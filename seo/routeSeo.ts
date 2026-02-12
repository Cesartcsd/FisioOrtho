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
} from '../constants';
import { RouteSEO } from '../types';

const logoUrl = `${SITE_URL}/assets/brand/soroportas-mark-default.png`;
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
  '@type': 'HomeAndConstructionBusiness',
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

export const ROUTE_SEO: Record<string, RouteSEO> = {
  home: {
    title: 'Soroportas | Portas de alto padrão em Sorocaba e região',
    description:
      'Portas de alto padrão com acabamento de precisão, consultoria técnica e instalação profissional em Sorocaba e região.',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: defaultImageUrl,
    jsonLd: [organizationSchema, localBusinessSchema, webSiteSchema],
  },
  about: {
    title: 'Sobre nós | Soroportas',
    description:
      'Conheça a história da Soroportas, nossa curadoria técnica e o processo artesanal de fabricação e instalação de portas premium.',
    canonicalPath: '/sobre-nos',
    ogType: 'article',
    ogImage: defaultImageUrl,
    jsonLd: [
      organizationSchema,
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Sobre nós', path: '/sobre-nos' },
      ]),
    ],
  },
  services: {
    title: 'Serviços de portas premium | Soroportas',
    description:
      'Projetos sob medida, instalação profissional, isolamento acústico e curadoria técnica para portas de alto padrão.',
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
    title: 'Projetos e portfólio | Soroportas',
    description:
      'Veja projetos reais da Soroportas com portas de alto padrão em ambientes residenciais e comerciais.',
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
  contact: {
    title: 'Contato | Soroportas',
    description:
      `Fale com a ${BRAND_NAME} por WhatsApp, telefone ou e-mail. Atendimento com hora marcada em ${CONTACT_CITY}-${CONTACT_STATE}.`,
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
    title: 'Lacca Pet | Soroportas',
    description:
      'Descubra a coleção Lacca Pet da Soroportas, com superfície ultra resistente e sustentável feita de garrafas PET recicladas.',
    canonicalPath: '/colecoes/lacca-pet',
    ogType: 'article',
    ogImage: laccaCollectionImageUrl, // Using existing or updated image variable if available, assuming re-use for now or update separately
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Coleções', path: '/' },
        { name: 'Lacca Pet', path: '/colecoes/lacca-pet' },
      ]),
    ],
  },
  collectionLinhaLaccaTouch: {
    title: 'Linha Lacca Touch | Soroportas',
    description:
      'Explore a Linha Lacca Touch da Soroportas com acabamento sofisticado e opcoes para ambientes internos.',
    canonicalPath: '/colecoes/linha-lacca-touch',
    ogType: 'article',
    ogImage: laccaCollectionImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Coleções', path: '/' },
        { name: 'Linha Lacca Touch', path: '/colecoes/linha-lacca-touch' },
      ]),
    ],
  },
  collectionLinhaAmadeirada: {
    title: 'Linha Amadeirada | Soroportas',
    description:
      'Veja a Linha Amadeirada da Soroportas com padroes naturais e alto nivel de acabamento para projetos de destaque.',
    canonicalPath: '/colecoes/linha-amadeirada',
    ogType: 'article',
    ogImage: amadeiradaCollectionImageUrl,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: 'Início', path: '/' },
        { name: 'Coleções', path: '/' },
        { name: 'Linha Amadeirada', path: '/colecoes/linha-amadeirada' },
      ]),
    ],
  },
  privacy: {
    title: 'Política de Privacidade | Soroportas',
    description:
      'Entenda como a Soroportas coleta, usa e protege dados pessoais conforme boas práticas de privacidade e LGPD.',
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
    title: 'Termos de Uso | Soroportas',
    description:
      'Consulte os termos de uso do site da Soroportas, regras de navegação e condições gerais de relacionamento digital.',
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
    title: 'Página não encontrada | Soroportas',
    description: 'A página solicitada não foi encontrada. Volte para a página inicial da Soroportas.',
    canonicalPath: '/404',
    robots: 'noindex,follow',
    ogType: 'website',
    ogImage: defaultImageUrl,
  },
};

const COLLECTION_SEO_BY_SLUG: Record<string, RouteSEO> = {
  'lacca-pet': ROUTE_SEO.collectionLaccaPet,
  'linha-lacca-touch': ROUTE_SEO.collectionLinhaLaccaTouch,
  'linha-amadeirada': ROUTE_SEO.collectionLinhaAmadeirada,
};

export const getCollectionSeoBySlug = (slug: string): RouteSEO | null => {
  return COLLECTION_SEO_BY_SLUG[slug] ?? null;
};

export const PRERENDER_ROUTES = [
  '/',
  '/sobre-nos',
  '/servicos',
  '/projetos',
  '/contato',
  '/colecoes/lacca-pet',
  '/colecoes/linha-lacca-touch',
  '/colecoes/linha-amadeirada',
  '/politica-de-privacidade',
  '/termos-de-uso',
];

export const SITEMAP_ENTRIES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/sobre-nos', priority: '0.8', changefreq: 'monthly' },
  { path: '/servicos', priority: '0.9', changefreq: 'monthly' },
  { path: '/projetos', priority: '0.8', changefreq: 'weekly' },
  { path: '/contato', priority: '0.9', changefreq: 'monthly' },
  { path: '/colecoes/lacca-pet', priority: '0.8', changefreq: 'monthly' },
  { path: '/colecoes/linha-lacca-touch', priority: '0.8', changefreq: 'monthly' },
  { path: '/colecoes/linha-amadeirada', priority: '0.8', changefreq: 'monthly' },
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
