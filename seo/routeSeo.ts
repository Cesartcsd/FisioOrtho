import {
  BRAND_NAME,
  CONTACT_ADDRESS,
  CONTACT_CITY,
  CONTACT_COUNTRY,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_STATE,
  SITE_URL,
  PRODUCTS,
} from '../constants';
import { RouteSEO } from '../types';

const logoUrl = `${SITE_URL}/assets/brand/fisioortho-logo.png`;
const defaultImageUrl = `${SITE_URL}/assets/hero/hero-main-1280.webp`;
const entranceCollectionImageUrl = `${SITE_URL}/assets/collections/entrada-principal-768.webp`;
const laccaCollectionImageUrl = `${SITE_URL}/assets/collections/interiores-768.webp`;
const amadeiradaCollectionImageUrl = `${SITE_URL}/assets/collections/social-768.webp`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

const buildBreadcrumbSchema = (items: BreadcrumbItem[]): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: logoUrl,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE_E164,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['pt-BR'],
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: BRAND_NAME,
  image: defaultImageUrl,
  url: SITE_URL,
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_ADDRESS,
    addressLocality: CONTACT_CITY,
    addressRegion: CONTACT_STATE,
    addressCountry: CONTACT_COUNTRY,
  },
  areaServed: {
    '@type': 'State',
    name: 'São Paulo',
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: 'pt-BR',
};

const physiotherapistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physiotherapist',
  name: 'Dra. Jéssica Arantes',
  url: `${SITE_URL}/sobre-nos`,
  worksFor: {
    '@type': 'MedicalClinic',
    name: BRAND_NAME,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_ADDRESS,
    addressLocality: CONTACT_CITY,
    addressRegion: CONTACT_STATE,
    addressCountry: CONTACT_COUNTRY,
  },
};

const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catálogo de Produtos Ortopédicos',
  description: 'Equipamentos e acessórios ortopédicos para venda e locação.',
  itemListElement: PRODUCTS.slice(0, 10).map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `${SITE_URL}${product.imageUrl}`,
      category: product.category,
    },
  })),
};

export const ROUTE_SEO: Record<string, RouteSEO> = {
  home: {
    title: 'FisioOrthopédicos | Excelência em Fisioterapia em Sorocaba',
    description:
      'Clínica de fisioterapia ortopédica com atendimento especializado, estética avançada e reabilitação ortopédica em Sorocaba e região.',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: defaultImageUrl,
    jsonLd: [organizationSchema, localBusinessSchema, webSiteSchema],
  },
  about: {
    title: 'Sobre nós | FisioOrthopédicos',
    description:
      'Conheça a FisioOrthopédicos e o trabalho da Dra. Jéssica Arantes. Fisioterapia humanizada e resultados reais para sua saúde.',
    canonicalPath: '/sobre-nos',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      organizationSchema,
      physiotherapistSchema,
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Sobre nós', path: '/sobre-nos' },
      ]),
    ],
  },
  services: {
    title: 'Nossos Serviços | FisioOrthopédicos',
    description:
      'Fisioterapia ortopédica, fisioterapia facial, medicina chinesa e reabilitação avançada para o seu bem-estar.',
    canonicalPath: '/servicos',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      localBusinessSchema,
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Serviços', path: '/servicos' },
      ]),
    ],
  },
  projects: {
    title: 'Nosso Espaço | FisioOrthopédicos',
    description:
      'Conheça as instalações da FisioOrthopédicos. Um ambiente acolhedor e preparado para proporcionar a melhor reabilitação e bem-estar.',
    canonicalPath: '/projetos',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Projetos', path: '/projetos' },
      ]),
    ],
  },
  products: {
    title: 'Catálogo de Produtos | FisioOrthopédicos',
    description:
      'Catálogo completo de produtos ortopédicos para reabilitação: bengalas, muletas, andadores, palmilhas, órteses e muito mais.',
    canonicalPath: '/produtos',
    ogType: 'website',
    ogImage: defaultImageUrl,
    jsonLd: [
      localBusinessSchema,
      productListSchema,
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Produtos', path: '/produtos' },
      ]),
    ],
  },
  contact: {
    title: 'Contato | FisioOrthopédicos',
    description:
      `Agende sua avaliação na ${BRAND_NAME} por WhatsApp, telefone ou e-mail. Atendimento especializado em ${CONTACT_CITY}-${CONTACT_STATE}.`,
    canonicalPath: '/contato',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      localBusinessSchema,
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Contato', path: '/contato' },
      ]),
    ],
  },
  collectionLaccaPet: {
    title: 'Fisioterapia Ortopédica | FisioOrthopédicos',
    description:
      'Descubra nossos tratamentos focados em dores, reabilitação pós-cirúrgica e fortalecimento muscular avançado.',
    canonicalPath: '/colecoes/lacca-pet',
    ogType: 'article',
    ogImage: laccaCollectionImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Especialidades', path: '/' },
        { name: 'Fisioterapia Ortopédica', path: '/colecoes/lacca-pet' },
      ]),
    ],
  },
  collectionLinhaLaccaTouch: {
    title: 'Fisioterapia Facial | FisioOrthopédicos',
    description:
      'Explore nossos serviços de estética e reabilitação facial com protocolos avançados para paralisia e cuidado dermatofuncional.',
    canonicalPath: '/colecoes/linha-lacca-touch',
    ogType: 'article',
    ogImage: laccaCollectionImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Especialidades', path: '/' },
        { name: 'Fisioterapia Facial', path: '/colecoes/linha-lacca-touch' },
      ]),
    ],
  },
  collectionLinhaAmadeirada: {
    title: 'Medicina Chinesa | FisioOrthopédicos',
    description:
      'Conheça a abordagem da Medicina Chinesa em nossa clínica: Acupuntura, Auriculoterapia e tratamentos holísticos para sua saúde integral.',
    canonicalPath: '/colecoes/linha-amadeirada',
    ogType: 'article',
    ogImage: amadeiradaCollectionImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Especialidades', path: '/' },
        { name: 'Medicina Chinesa', path: '/colecoes/linha-amadeirada' },
      ]),
    ],
  },
  privacy: {
    title: 'Política de Privacidade | FisioOrthopédicos',
    description:
      'Entenda como a FisioOrthopédicos coleta, usa e protege seus dados conforme boas práticas de privacidade e LGPD.',
    canonicalPath: '/politica-de-privacidade',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
      ]),
    ],
  },
  terms: {
    title: 'Termos de Uso | FisioOrthopédicos',
    description:
      'Consulte os termos de uso do site da FisioOrthopédicos, regras de navegação e condições gerais de atendimento.',
    canonicalPath: '/termos-de-uso',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Termos de Uso', path: '/termos-de-uso' },
      ]),
    ],
  },
  notFound: {
    title: 'Página não encontrada | FisioOrthopédicos',
    description: 'A página solicitada não foi encontrada. Volte para a página inicial da FisioOrthopédicos.',
    canonicalPath: '/404',
    robots: 'noindex,follow',
    ogType: 'website',
    ogImage: defaultImageUrl,
  },
};

const COLLECTION_SEO_BY_SLUG: Record<string, RouteSEO> = {
  'fisioterapia-ortopedica': ROUTE_SEO.collectionLaccaPet,
  'fisioterapia-facial': ROUTE_SEO.collectionLinhaLaccaTouch,
  'medicina-chinesa': ROUTE_SEO.collectionLinhaAmadeirada,
};

export const getCollectionSeoBySlug = (slug: string): RouteSEO | null => {
  return COLLECTION_SEO_BY_SLUG[slug] ?? null;
};

export const PRERENDER_ROUTES = [
  '/',
  '/sobre-nos',
  '/servicos',
  '/produtos',
  '/projetos',
  '/contato',
  '/colecoes/fisioterapia-ortopedica',
  '/colecoes/fisioterapia-facial',
  '/colecoes/medicina-chinesa',
  '/politica-de-privacidade',
  '/termos-de-uso',
];

export const SITEMAP_ENTRIES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/sobre-nos', priority: '0.8', changefreq: 'monthly' },
  { path: '/servicos', priority: '0.9', changefreq: 'monthly' },
  { path: '/produtos', priority: '0.9', changefreq: 'weekly' },
  { path: '/projetos', priority: '0.8', changefreq: 'weekly' },
  { path: '/contato', priority: '0.9', changefreq: 'monthly' },
  { path: '/colecoes/fisioterapia-ortopedica', priority: '0.8', changefreq: 'monthly' },
  { path: '/colecoes/fisioterapia-facial', priority: '0.8', changefreq: 'monthly' },
  { path: '/colecoes/medicina-chinesa', priority: '0.8', changefreq: 'monthly' },
  { path: '/politica-de-privacidade', priority: '0.3', changefreq: 'yearly' },
  { path: '/termos-de-uso', priority: '0.3', changefreq: 'yearly' },
];

export const CONTACT_NAP = {
  name: BRAND_NAME,
  phoneDisplay: CONTACT_PHONE_DISPLAY,
  phoneE164: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  address: CONTACT_ADDRESS,
  city: CONTACT_CITY,
  state: CONTACT_STATE,
  country: CONTACT_COUNTRY,
};
