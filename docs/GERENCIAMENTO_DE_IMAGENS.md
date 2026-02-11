# Gerenciamento de Imagens - Soroportas

> Ultima atualizacao: 10/02/2026

Este guia descreve como manter as imagens do projeto de acordo com o codigo atual.

---

## 1) Onde ficam as imagens

Pasta base:

- `public/assets/`

Subpastas usadas hoje:

- `public/assets/brand/`
- `public/assets/hero/`
- `public/assets/collections/`
- `public/assets/gallery/`

---

## 2) Como o codigo consome imagens

O consumo e centralizado em `constants.ts`.

### Hero

```ts
HERO_IMAGES.main = {
  src: '/assets/hero/hero-main.jpg',
  webpSrcSet: '/assets/hero/hero-main-480.webp 480w, ...',
  sizes: '100vw',
  alt: '...'
}
```

### Colecoes (cards e paginas dedicadas)

Cada item de `COLLECTIONS` usa:

- `slug`
- `imageUrl`
- `imageWebpSrcSet`
- `imageSizes`
- `colors`

Cada item de `colors` usa:

- `id`
- `name`
- `images`

Cada item de `images` usa:

- `src`
- `alt`
- `webpSrcSet` (opcional)
- `sizes` (opcional)

### Galeria da home

Cada item de `GALLERY_ITEMS` usa:

- `src`
- `webpSrcSet`
- `sizes`
- `title`

`GALLERY_IMAGES` e derivado automaticamente de `GALLERY_ITEMS`.

---

## 3) Convencao de nomes (importante)

Para imagens responsivas com WebP, o projeto usa este padrao:

- imagem base: `nome.jpg` ou `nome.jpeg`
- variantes:
  - `nome-480.webp`
  - `nome-768.webp`
  - `nome-1024.webp`
  - `nome-1280.webp`

Exemplo real:

- `gallery-1.jpg`
- `gallery-1-480.webp`
- `gallery-1-768.webp`
- `gallery-1-1024.webp`
- `gallery-1-1280.webp`

---

## 4) Trocar uma imagem existente

### Opcao A (mais segura): manter o mesmo nome

1. Substitua a imagem base (`.jpg`/`.jpeg`) com o mesmo nome.
2. Atualize tambem as variantes `.webp` com o mesmo prefixo.
3. Nao precisa alterar `constants.ts`.

### Opcao B: usar novo nome

1. Adicione novo arquivo na pasta correta.
2. Gere e adicione as variantes WebP com o mesmo prefixo.
3. Atualize os caminhos em `constants.ts`.

---

## 5) Adicionar nova imagem na galeria da home

1. Copie os arquivos para `public/assets/gallery/`.
2. Garanta a imagem base + variantes WebP.
3. Adicione um novo item em `GALLERY_ITEMS` em `constants.ts`:

```ts
{
  src: '/assets/gallery/nova-imagem.jpg',
  webpSrcSet: '/assets/gallery/nova-imagem-480.webp 480w, ...',
  sizes: '(max-width: 768px) 100vw, 50vw',
  title: 'Titulo do projeto'
}
```

Nao edite `GALLERY_IMAGES` manualmente: ele e gerado a partir de `GALLERY_ITEMS`.

---

## 6) Adicionar/trocar imagem de capa da colecao

Edite o item correspondente em `COLLECTIONS` em `constants.ts`:

- `imageUrl`
- `imageWebpSrcSet`
- `imageSizes`

Recomendacao atual para cards de colecao:

- `imageSizes: '(max-width: 768px) 100vw, 33vw'`

---

## 7) Adicionar fotos por cor na pagina de colecao

Quando as fotos finais forem enviadas, preencha `colors[].images` na colecao correta.

Exemplo:

```ts
{
  id: 'branco-classico',
  name: 'Branco Classico',
  images: [
    {
      src: '/assets/collections/entrada-principal/branco-classico-1.jpg',
      webpSrcSet: '/assets/collections/entrada-principal/branco-classico-1-480.webp 480w, /assets/collections/entrada-principal/branco-classico-1-768.webp 768w',
      sizes: '(max-width: 768px) 100vw, 33vw',
      alt: 'Porta Entrada Principal na cor Branco Classico'
    }
  ]
}
```

Boas praticas para essa fase:

- Manter prefixo consistente por colecao/cor.
- Informar `alt` descritivo por imagem.
- Garantir que todos os arquivos referenciados existam em `public/assets`.

---

## 8) Adicionar/trocar imagem do Hero

Edite `HERO_IMAGES.main` em `constants.ts`:

- `src`
- `webpSrcSet`
- `sizes`
- `alt`

Importante:

- Hero usa `fetchPriority="high"` e `loading="eager"`.
- Prefira imagem base com boa qualidade visual e peso controlado.

---

## 9) Boas praticas

- Priorize imagens com boa compressao e nitidez.
- Mantenha proporcao semelhante a atual para evitar quebra de layout.
- Sempre preencha `alt` descritivo quando aplicavel.
- Evite links externos (o projeto esta padronizado com assets locais).

---

## 10) Validacao apos mudancas

Execute:

```bash
npm run dev
npm run build
```

Checklist rapido:

- A imagem aparece corretamente na pagina esperada.
- `srcset` esta sendo servido (inspecione no browser).
- Nao ha 404 em arquivos de imagem no DevTools.
- O filtro por cor exibe as imagens corretas da cor selecionada.
- Lighthouse nao piorou de forma relevante em LCP.

---

## 11) Observacao sobre automacao

No estado atual do repositorio, nao existe script oficial versionado para gerar variantes WebP automaticamente.

Se for criar um fluxo automatico no futuro, documente:

- comando/script usado
- padrao de nomes gerado
- pastas de entrada/saida
- como validar o resultado
