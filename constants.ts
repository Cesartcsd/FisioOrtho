import { CollectionItem, FeatureItem } from './types';

const buildWebpSrcSet = (basePath: string, widths: number[]): string =>
  widths.map((width) => `${basePath}-${width}.webp ${width}w`).join(', ');

export const SITE_URL = 'https://www.soroportas.com';
export const BRAND_NAME = 'Soroportas';

export const CONTACT_PHONE_DISPLAY = '(15) 99700-2683';
export const CONTACT_PHONE_E164 = '+5515997002683';
export const CONTACT_EMAIL = 'comercial@soroportas.com';
export const CONTACT_CITY = 'Sorocaba';
export const CONTACT_STATE = 'SP';
export const CONTACT_COUNTRY = 'Brasil';
export const CONTACT_ADDRESS = 'Av. Gen. Osório, 1364 - Jardim Novo Horizonte, Sorocaba - SP, 18060-502';

export const WHATSAPP_NUMBER = '5515997002683';
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
    alt: 'Ambiente interno sofisticado com porta de alto padrão ao centro.',
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
    id: 'lacca-pet',
    slug: 'lacca-pet',
    title: 'Lacca Pet',
    category: 'Resistência & Sustentabilidade',
    description: 'Superfície ultra resistente desenvolvida com garrafas PET recicladas. O equilíbrio perfeito entre sustentabilidade e durabilidade, com um branco puro que não amarela.',
    imageUrl: '/assets/collections/lacca-pet/branco/branco-1.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/lacca-pet/branco/branco-1', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'branco',
        name: 'Branco',
        images: [
          {
            src: '/assets/collections/lacca-pet/branco/branco-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/lacca-pet/branco/branco-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Lacca Pet na cor Branco - vista 1',
          },
          {
            src: '/assets/collections/lacca-pet/branco/branco-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/lacca-pet/branco/branco-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Lacca Pet na cor Branco - vista 2',
          },
          {
            src: '/assets/collections/lacca-pet/branco/branco-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/lacca-pet/branco/branco-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Lacca Pet na cor Branco - vista 3',
          },
          {
            src: '/assets/collections/lacca-pet/branco/branco-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/lacca-pet/branco/branco-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Lacca Pet na cor Branco - vista 4',
          },
        ],
      },
    ],
  },

  {
    id: 'social',
    slug: 'linha-amadeirada',
    title: 'Linha Amadeirada',
    category: 'Amplitude',
    description: 'A beleza atemporal da madeira natural com acabamento premium. Portas que trazem calor, sofisticação e uma textura inigualável para o seu ambiente.',
    imageUrl: '/assets/collections/linha-amadeirada/curupixa/curupixa-1.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/curupixa/curupixa-1', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'curupixa',
        name: 'Curupixá',
        images: [
          {
            src: '/assets/collections/linha-amadeirada/curupixa/curupixa-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/curupixa/curupixa-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Curupixá - vista 1',
          },
          {
            src: '/assets/collections/linha-amadeirada/curupixa/curupixa-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/curupixa/curupixa-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Curupixá - vista 2',
          },
          {
            src: '/assets/collections/linha-amadeirada/curupixa/curupixa-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/curupixa/curupixa-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Curupixá - vista 3',
          },
          {
            src: '/assets/collections/linha-amadeirada/curupixa/curupixa-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/curupixa/curupixa-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Curupixá - vista 4',
          },
        ],
      },

      {
        id: 'imbuia',
        name: 'Imbuia',
        images: [
          {
            src: '/assets/collections/linha-amadeirada/imbuia/imbuia-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/imbuia/imbuia-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Imbuia - vista 1',
          },
          {
            src: '/assets/collections/linha-amadeirada/imbuia/imbuia-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/imbuia/imbuia-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Imbuia - vista 2',
          },
          {
            src: '/assets/collections/linha-amadeirada/imbuia/imbuia-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/imbuia/imbuia-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Imbuia - vista 3',
          },
          {
            src: '/assets/collections/linha-amadeirada/imbuia/imbuia-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/imbuia/imbuia-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Imbuia - vista 4',
          },
        ],
      },
      {
        id: 'italy',
        name: 'Italy',
        images: [
          {
            src: '/assets/collections/linha-amadeirada/italy/italy-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/italy/italy-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Italy - vista 1',
          },
          {
            src: '/assets/collections/linha-amadeirada/italy/italy-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/italy/italy-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Italy - vista 2',
          },
          {
            src: '/assets/collections/linha-amadeirada/italy/italy-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/italy/italy-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Italy - vista 3',
          },
          {
            src: '/assets/collections/linha-amadeirada/italy/italy-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-amadeirada/italy/italy-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Amadeirada na cor Italy - vista 4',
          },
        ],
      },
    ],
  },
  {
    id: 'linha-lacca-touch',
    slug: 'linha-lacca-touch',
    title: 'Linha Lacca Touch',
    category: 'Sofisticação',
    description: 'Sinta o toque aveludado e a elegância das cores contemporâneas. A Linha Lacca Touch une acabamento impecável, resistência e tons que definem tendências no design de interiores.',
    imageUrl: '/assets/collections/linha-lacca-touch/cappuccino/cappuccino-1.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/cappuccino/cappuccino-1', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/cappuccino/cappuccino-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/cappuccino/cappuccino-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Cappuccino - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/cappuccino/cappuccino-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/cappuccino/cappuccino-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Cappuccino - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/cappuccino/cappuccino-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/cappuccino/cappuccino-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Cappuccino - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/cappuccino/cappuccino-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/cappuccino/cappuccino-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Cappuccino - vista 4',
          },
        ],
      },
      {
        id: 'fendi',
        name: 'Fendi',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/fendi/fendi-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/fendi/fendi-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Fendi - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/fendi/fendi-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/fendi/fendi-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Fendi - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/fendi/fendi-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/fendi/fendi-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Fendi - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/fendi/fendi-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/fendi/fendi-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Fendi - vista 4',
          },
        ],
      },
      {
        id: 'floresta',
        name: 'Floresta',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/floresta/floresta-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/floresta/floresta-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Floresta - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/floresta/floresta-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/floresta/floresta-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Floresta - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/floresta/floresta-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/floresta/floresta-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Floresta - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/floresta/floresta-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/floresta/floresta-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Floresta - vista 4',
          },
        ],
      },
      {
        id: 'grafite',
        name: 'Grafite',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/grafite/grafite-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/grafite/grafite-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Grafite - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/grafite/grafite-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/grafite/grafite-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Grafite - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/grafite/grafite-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/grafite/grafite-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Grafite - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/grafite/grafite-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/grafite/grafite-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Grafite - vista 4',
          },
        ],
      },
      {
        id: 'nero',
        name: 'Nero',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/nero/nero-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/nero/nero-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Nero - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/nero/nero-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/nero/nero-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Nero - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/nero/nero-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/nero/nero-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Nero - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/nero/nero-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/nero/nero-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Nero - vista 4',
          },
        ],
      },
      {
        id: 'poseidon',
        name: 'Poseidon',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/poseidon/poseidon-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/poseidon/poseidon-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Poseidon - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/poseidon/poseidon-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/poseidon/poseidon-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Poseidon - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/poseidon/poseidon-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/poseidon/poseidon-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Poseidon - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/poseidon/poseidon-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/poseidon/poseidon-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Poseidon - vista 4',
          },
        ],
      },
      {
        id: 'urban',
        name: 'Urban',
        images: [
          {
            src: '/assets/collections/linha-lacca-touch/urban/urban-1.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/urban/urban-1', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Urban - vista 1',
          },
          {
            src: '/assets/collections/linha-lacca-touch/urban/urban-2.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/urban/urban-2', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Urban - vista 2',
          },
          {
            src: '/assets/collections/linha-lacca-touch/urban/urban-3.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/urban/urban-3', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Urban - vista 3',
          },
          {
            src: '/assets/collections/linha-lacca-touch/urban/urban-4.jpg',
            webpSrcSet: buildWebpSrcSet('/assets/collections/linha-lacca-touch/urban/urban-4', [480, 768, 1024, 1280]),
            sizes: '(max-width: 768px) 100vw, 33vw',
            alt: 'Porta Linha Lacca Touch na cor Urban - vista 4',
          },
        ],
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
