import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agora apontando para a pasta local dentro do workspace
const SOURCE_DIR = path.resolve(__dirname, '../FisioOrthopedicos-main/IMG');
const TARGET_DIR = path.resolve(__dirname, '../public/assets');

const copyFile = (src, dest) => {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copiado: ${dest}`);
  } else {
    console.warn(`Arquivo não encontrado: ${src}`);
  }
};

const generateWebpVariants = async (src, destBase, widths = [480, 768, 1024, 1280]) => {
  if (!fs.existsSync(src)) {
    console.warn(`Arquivo não encontrado para conversão: ${src}`);
    return;
  }
  
  fs.mkdirSync(path.dirname(destBase), { recursive: true });
  
  // Copiar o arquivo original como fallback de segurança
  const ext = path.extname(src);
  fs.copyFileSync(src, `${destBase}${ext}`);
  console.log(`Original mantido: ${destBase}${ext}`);
  
  // Gerar as variantes em HD (resoluções escaláveis e preservando aspecto) usando formato WebP
  for (const width of widths) {
    const dest = `${destBase}-${width}.webp`;
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 85 }) // Qualidade HD preservada
      .toFile(dest);
    console.log(`Gerado WebP HD (${width}px): ${dest}`);
  }
};

const processAll = async () => {
  console.log('Iniciando processamento de imagens de alta definição...');

  // 1. Logos
  copyFile(path.join(SOURCE_DIR, 'Logo.png'), path.join(TARGET_DIR, 'brand', 'fisioortho-logo.png'));
  copyFile(path.join(SOURCE_DIR, 'FisioOrtho.png'), path.join(TARGET_DIR, 'brand', 'fisioortho-logo-light.png'));
  copyFile(path.join(SOURCE_DIR, 'Logo-icon.png'), path.join(TARGET_DIR, 'brand', 'fisioortho-icon.png'));

  // 2. Imagens de Destaque (Hero)
  await generateWebpVariants(path.join(SOURCE_DIR, 'fisio.png'), path.join(TARGET_DIR, 'hero', 'hero-main'));
  // A imagem da Dra. Jessica pode ser enviada para a galeria ou hero secundário, por hora na galeria.
  await generateWebpVariants(path.join(SOURCE_DIR, 'je.jpeg'), path.join(TARGET_DIR, 'gallery', 'dra-jessica'));

  // 3. Especialidades
  await generateWebpVariants(path.join(SOURCE_DIR, 'serv-3.png'), path.join(TARGET_DIR, 'collections', 'fisioterapia-ortopedica', 'cover'));
  await generateWebpVariants(path.join(SOURCE_DIR, 'servico.png'), path.join(TARGET_DIR, 'collections', 'fisioterapia-facial', 'cover'));
  await generateWebpVariants(path.join(SOURCE_DIR, 'acupuntura.jpg'), path.join(TARGET_DIR, 'collections', 'medicina-chinesa', 'cover'));

  // 4. Produtos
  const productsSrcDir = path.join(SOURCE_DIR, 'Produtos');
  const productsDestDir = path.join(TARGET_DIR, 'products');
  if (fs.existsSync(productsSrcDir)) {
    fs.mkdirSync(productsDestDir, { recursive: true });
    const files = fs.readdirSync(productsSrcDir);
    for (const file of files) {
      // Alguns arquivos de produto também são JPG, PNG. Apenas copiamos, pois o e-commerce consumirá a original HD.
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        copyFile(path.join(productsSrcDir, file), path.join(productsDestDir, file));
      }
    }
  } else {
    console.warn(`Pasta de produtos não encontrada: ${productsSrcDir}`);
  }

  // 5. Galeria do Consultório
  const gallerySrcDir = path.join(SOURCE_DIR, 'consultorio');
  const galleryDestDir = path.join(TARGET_DIR, 'gallery');
  if (fs.existsSync(gallerySrcDir)) {
    const files = fs.readdirSync(gallerySrcDir);
    let index = 1;
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        await generateWebpVariants(path.join(gallerySrcDir, file), path.join(galleryDestDir, `gallery-${index}`));
        index++;
      }
    }
  } else {
    console.warn(`Pasta do consultorio não encontrada: ${gallerySrcDir}`);
  }

  console.log('✨ Processamento finalizado! Imagens em HD alocadas com sucesso.');
};

processAll().catch(console.error);
