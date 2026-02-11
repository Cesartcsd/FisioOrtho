import { CollectionItem, FeatureItem } from './types';

const buildWebpSrcSet = (basePath: string, widths: number[]): string =>
  widths.map((width) => `${basePath}-${width}.webp ${width}w`).join(', ');

export const SITE_URL = 'https://www.soroportas.com';
export const BRAND_NAME = 'Soroportas';

export const CONTACT_PHONE_DISPLAY = '(15) 99760-0409';
export const CONTACT_PHONE_E164 = '+5515997600409';
export const CONTACT_EMAIL = 'contato@soroportas.com';
export const CONTACT_CITY = 'Sorocaba';
export const CONTACT_STATE = 'SP';
export const CONTACT_COUNTRY = 'Brasil';
export const CONTACT_ADDRESS =
  'Atendimento presencial somente com horário agendado em Sorocaba e região.';

export const WHATSAPP_NUMBER = '5515997600409';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ola,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20portas.`;

export const BRAND_LOGOS = {
  default: '/assets/brand/soroportas-mark-default.png',
  light: '/assets/brand/soroportas-mark-light.png',
};

export const HERO_IMAGES = {
  main: {
    src: '/assets/hero/hero-main.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/hero/hero-main', [480, 768, 1024, 1280]),
    sizes: '100vw',
    alt: 'Porta de entrada de alto padrão em ambiente residencial',
  },
};

export const HERO_CONTENT = {
  headline: 'A porta certa muda o ambiente inteiro.',
  subheadline:
    'Portas de alto padrão com acabamento preciso e atendimento que ajuda você a escolher sem erro.',
  cta: 'Falar com um especialista',
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'entrance',
    slug: 'entrada-principal',
    title: 'Entrada Principal',
    category: 'Primeira Impressão',
    description: 'Portas pivotantes e maciças que definem a personalidade da fachada.',
    imageUrl: '/assets/collections/entrada-principal.jpeg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/entrada-principal', [480, 768]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'branco-classico',
        name: 'Branco Classico',
        images: [],
      },
      {
        id: 'preto-fosco',
        name: 'Preto Fosco',
        images: [],
      },
      {
        id: 'nogueira-escura',
        name: 'Nogueira Escura',
        images: [],
      },
    ],
  },
  {
    id: 'interior',
    slug: 'linha-lacca-touch',
    title: 'Linha Lacca Touch',
    category: 'Conforto',
    description: 'Isolamento acústico e acabamento impecável para quartos e escritórios.',
    imageUrl: '/assets/collections/interiores.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/interiores', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'branco-lacca',
        name: 'Branco Lacca',
        images: [],
      },
      {
        id: 'fendi',
        name: 'Fendi',
        images: [],
      },
      {
        id: 'cinza-urbano',
        name: 'Cinza Urbano',
        images: [],
      },
    ],
  },
  {
    id: 'social',
    slug: 'linha-amadeirada',
    title: 'Linha Amadeirada',
    category: 'Amplitude',
    description: 'Sistemas de correr e vidro para conectar sala, varanda e jardim.',
    imageUrl: '/assets/collections/social.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/social', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'freijo-natural',
        name: 'Freijo Natural',
        images: [],
      },
      {
        id: 'carvalho-mel',
        name: 'Carvalho Mel',
        images: [],
      },
      {
        id: 'imbuia',
        name: 'Imbuia',
        images: [],
      },
    ],
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'material',
    title: 'Madeira Nobre Selecionada',
    description:
      'Trabalhamos apenas com lotes certificados e secos em estufa, garantindo estabilidade dimensional e durabilidade por geracoes.',
    iconName: 'TreeDeciduous',
  },
  {
    id: 'finish',
    title: 'Acabamento de Precisão',
    description:
      'Vernizes de alta performance e lixamento técnico. O toque é acetinado e a proteção é absoluta contra intempéries.',
    iconName: 'Gem',
  },
  {
    id: 'installation',
    title: 'Vedação e Silêncio',
    description:
      'Borrachas amortecedoras e sistemas de vedação que proporcionam conforto acústico e fechamento suave.',
    iconName: 'VolumeX',
  },
  {
    id: 'consultancy',
    title: 'Curadoria Técnica',
    description:
      'Não vendemos apenas a porta. Analisamos sua planta e sugerimos a solução técnica ideal para evitar problemas futuros.',
    iconName: 'ClipboardCheck',
  },
];

export const GALLERY_ITEMS = [
  {
    src: '/assets/gallery/gallery-1.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-1', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Entrada Residencial Premium',
  },
  {
    src: '/assets/gallery/gallery-2.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-2', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Suíte Master com Porta Acústica',
  },
  {
    src: '/assets/gallery/gallery-3.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-3', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Home Office Integrado',
  },
  {
    src: '/assets/gallery/gallery-4.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-4', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Casa de Campo com Integração Total',
  },
];

export const GALLERY_IMAGES = GALLERY_ITEMS.map((item) => item.src);

export const PROJECT_STATS = [
  { number: '500+', label: 'Projetos Entregues' },
  { number: '15', label: 'Anos de Experiência' },
  { number: '100%', label: 'Clientes Satisfeitos' },
  { number: '50+', label: 'Modelos Exclusivos' },
];
