import { CollectionItem, FeatureItem, ProductItem, FAQItem } from './types';

const buildWebpSrcSet = (basePath: string, widths: number[]): string =>
  widths.map((width) => `${basePath}-${width}.webp ${width}w`).join(', ');

// ── Marca e domínio ──────────────────────────────────────────────
export const SITE_URL = 'https://www.fisioorthopedicos.com.br';
export const BRAND_NAME = 'FisioOrthopédicos';

// ── Contato / NAP ────────────────────────────────────────────────
export const CONTACT_PHONE_DISPLAY = '(15) 99116-3035';
export const CONTACT_PHONE_E164 = '+5515991163035';
export const CONTACT_PHONE_CONSULTORIO = '(15) 99147-6480';
export const CONTACT_EMAIL = 'contato@fisioorthopedicos.com.br';
export const CONTACT_CITY = 'Sorocaba';
export const CONTACT_STATE = 'SP';
export const CONTACT_COUNTRY = 'Brasil';
export const CONTACT_ADDRESS = 'Av. Pereira da Silva, 1953 - Jd. Sta. Rosália - Sala 5, Sorocaba - SP';

export const BUSINESS_HOURS = {
  weekdays: '09:00 às 12:00 / 14:00 às 18:00',
  saturday: '09:00 às 12:00',
  sunday: 'Fechado',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/fisioorthopedicos',
  instagram: 'https://www.instagram.com/fisioorthopedicos/',
  linkedin: 'https://www.linkedin.com/in/dra-j%C3%A9ssica-arantes-a86666153/',
};

// ── WhatsApp ─────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '5515991476480';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20FisioOrthop%C3%A9dicos.`;

// ── Logos ─────────────────────────────────────────────────────────
export const BRAND_LOGOS = {
  default: '/assets/brand/fisioortho-logo.png',
  light: '/assets/brand/fisioortho-logo-light.png',
};

// ── Hero ──────────────────────────────────────────────────────────
export const HERO_IMAGES = {
  main: {
    src: '/assets/hero/hero-main.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/hero/hero-main', [480, 768, 1024, 1280]),
    sizes: '100vw',
    alt: 'Consultório moderno de fisioterapia ortopédica com equipamentos profissionais.',
  },
};

export const HERO_CONTENT = {
  headline: 'Excelência em Fisioterapia Ortopédica',
  subheadline:
    'Venha cuidar da sua saúde com atendimento exclusivo e o diferencial de uma visão profissional. Dra. Jéssica Arantes — fisioterapeuta especialista desde 2013.',
  cta: 'Agendar Consulta',
};

// ── Especialidades (usa a mesma interface CollectionItem) ────────
export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'fisioterapia-ortopedica',
    slug: 'fisioterapia-ortopedica',
    title: 'Fisioterapia Ortopédica',
    category: 'Reabilitação',
    description:
      'Tratamento especializado para pós-operatório ortopédico, lesões músculo-esqueléticas e RPG. Recupere sua mobilidade com acompanhamento profissional personalizado.',
    imageUrl: '/assets/collections/fisioterapia-ortopedica/cover.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/fisioterapia-ortopedica/cover', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'pos-operatorio',
        name: 'Pós-Operatório Ortopédico',
        images: [],
      },
      {
        id: 'lesoes',
        name: 'Lesões Músculo-Esqueléticas',
        images: [],
      },
      {
        id: 'rpg',
        name: 'RPG - Reeducação Postural Global',
        images: [],
      },
    ],
  },
  {
    id: 'fisioterapia-facial',
    slug: 'fisioterapia-facial',
    title: 'Fisioterapia Facial',
    category: 'Especializada',
    description:
      'Reabilitação ortognática, tratamento de disfunção de ATM, paralisia de Bell e fisioterapia vestibular (VPPB). Cuidado especializado para sua saúde facial.',
    imageUrl: '/assets/collections/fisioterapia-facial/cover.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/fisioterapia-facial/cover', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'ortognatica',
        name: 'Reabilitação Ortognática',
        images: [],
      },
      {
        id: 'atm',
        name: 'Disfunção de ATM',
        images: [],
      },
      {
        id: 'paralisia-bell',
        name: 'Paralisia de Bell',
        images: [],
      },
      {
        id: 'vppb',
        name: 'Fisioterapia Vestibular (VPPB)',
        images: [],
      },
    ],
  },
  {
    id: 'medicina-chinesa',
    slug: 'medicina-chinesa',
    title: 'Medicina Chinesa',
    category: 'Terapias Integrativas',
    description:
      'Acupuntura sistêmica, auriculoterapia chinesa e francesa, e ventosaterapia. Técnicas milenares aliadas à ciência moderna para alívio de dores e equilíbrio corporal.',
    imageUrl: '/assets/collections/medicina-chinesa/cover.jpg',
    imageWebpSrcSet: buildWebpSrcSet('/assets/collections/medicina-chinesa/cover', [480, 768, 1024, 1280]),
    imageSizes: '(max-width: 768px) 100vw, 33vw',
    colors: [
      {
        id: 'acupuntura',
        name: 'Acupuntura Sistêmica',
        images: [],
      },
      {
        id: 'auriculoterapia',
        name: 'Auriculoterapia Chinesa e Francesa',
        images: [],
      },
      {
        id: 'ventosaterapia',
        name: 'Ventosaterapia',
        images: [],
      },
    ],
  },
];

// ── Diferenciais ─────────────────────────────────────────────────
export const FEATURES: FeatureItem[] = [
  {
    id: 'personalized',
    title: 'Atendimento Personalizado',
    description:
      'Cada paciente recebe um plano de tratamento exclusivo, desenvolvido pela Dra. Jéssica Arantes com base em avaliação detalhada.',
    iconName: 'UserCheck',
  },
  {
    id: 'equipment-training',
    title: 'Orientação e Treinamento',
    description:
      'Orientamos o uso correto de bengalas, muletas e andadores, evitando lesões secundárias e acelerando sua recuperação.',
    iconName: 'GraduationCap',
  },
  {
    id: 'integrated',
    title: 'Consultório e Loja Integrados',
    description:
      'Loja e consultório no mesmo local: você faz sua fisioterapia e já encontra os produtos ortopédicos que precisa, com orientação profissional.',
    iconName: 'Building2',
  },
  {
    id: 'experience',
    title: 'Experiência desde 2013',
    description:
      'Dra. Jéssica Arantes é fisioterapeuta renomada em Sorocaba, atuando na área ortopédica há mais de 10 anos com excelência.',
    iconName: 'Award',
  },
];

// ── Catálogo de Produtos ─────────────────────────────────────────
export const PRODUCTS: ProductItem[] = [
  { id: 'p-1', name: 'Bengala em T', description: 'Feita de alumínio, resistente e reforçada. Suporta até 100kg. Com regulagem de altura e ponteira de borracha.', category: 'Mobilidade', tag: 'Venda e Locação', imageUrl: '/assets/products/T.jpg' },
  { id: 'p-2', name: 'Bengala 4 Pontos', description: 'Alumínio resistente, suporta até 100kg. Regulagem de altura e 4 pontos para maior estabilidade.', category: 'Mobilidade', tag: 'Venda e Locação', imageUrl: '/assets/products/4pts.jpg' },
  { id: 'p-3', name: 'Muletas Axilares', description: 'Com regulagem de altura. Colocamos na altura correta e treinamos o uso para evitar lesões.', category: 'Mobilidade', tag: 'Locação', imageUrl: '/assets/products/Axilar.jpg' },
  { id: 'p-4', name: 'Muletas Canadenses', description: 'Suporta até 100kg. Altura correta e treinamento de uso inclusos na locação.', category: 'Mobilidade', tag: 'Locação', imageUrl: '/assets/products/Canadenses.jpg' },
  { id: 'p-5', name: 'Andador Fixo', description: 'Regulagem de altura, dobrável, leve e suporta até 100kg.', category: 'Mobilidade', tag: 'Locação', imageUrl: '/assets/products/Fixo.jpg' },
  { id: 'p-6', name: 'Andador Articulado', description: 'Regulagem de altura, dobrável e leve. Suporta até 100kg.', category: 'Mobilidade', tag: 'Locação', imageUrl: '/assets/products/Articulado.jpg' },
  { id: 'p-7', name: 'Travesseiro Longo', description: 'Macio e hipoalergênico, auxilia no posicionamento correto para dormir. Medida: 130 x 50 cm.', category: 'Conforto', tag: '130 x 50 cm', imageUrl: '/assets/products/BodyPillow.jpg' },
  { id: 'p-8', name: 'Encosto Triângulo', description: 'Espuma massageadora. Reduz em até 50% a pressão nas costas. Alívio na lombar e ciático.', category: 'Conforto', tag: '55 x 45 x 30 cm', imageUrl: '/assets/products/EncostoTriag.jpg' },
  { id: 'p-9', name: 'Palmilha em Poliuretano', description: 'Corrige a pisada e diminui o impacto. Ideal para atividade física.', category: 'Palmilhas', tag: 'Tam. 34 ao 42', imageUrl: '/assets/products/PU.jpg' },
  { id: 'p-10', name: 'Palmilha de Silicone/Gel', description: 'Auxilia na prevenção de dores nos pés, esporão de calcâneo e fascite plantar.', category: 'Palmilhas', tag: 'Tam. 33 ao 45', imageUrl: '/assets/products/GelNormal.jpg' },
  { id: 'p-11', name: 'Palmilha GelActiv', description: 'Massageia e estimula o fluxo sanguíneo. Melhora desempenho esportivo e previne lesões.', category: 'Palmilhas', tag: 'Tam. 38 ao 42', imageUrl: '/assets/products/GelActiv.jpg' },
  { id: 'p-12', name: 'Palmilha de Silicone Calcanhar', description: 'Silicone adesivado em gel para alívio das dores. Alta absorção de impactos.', category: 'Palmilhas', tag: 'Tam. M e G', imageUrl: '/assets/products/PCalcanhar.jpg' },
  { id: 'p-13', name: 'Fortalecimento Borboleta', description: 'Exercícios para membros superiores e inferiores, proporcionando resistência e força muscular.', category: 'Exercícios', tag: 'Tamanho Único', imageUrl: '/assets/products/FBorboleta.jpg' },
  { id: 'p-14', name: 'Corda', description: 'Para pular ou realizar alongamentos. Medida: 2,6m.', category: 'Exercícios', tag: '2,6 m', imageUrl: '/assets/products/Corda.jpg' },
  { id: 'p-15', name: 'Bola de Pilates', description: 'Para alongamentos e fortalecimento muscular. Suporta até 100kg.', category: 'Exercícios', tag: '65 cm diâmetro', imageUrl: '/assets/products/BolaPilates.jpg' },
  { id: 'p-16', name: 'Minibola de Pilates', description: 'Auxilia na prática de Pilates, Yoga e exercícios de fortalecimento.', category: 'Exercícios', tag: '25 cm diâmetro', imageUrl: '/assets/products/MinibolaPilates.jpg' },
  { id: 'p-17', name: 'Halter Pintado', description: 'Fortalecimento muscular, ganho de massa e reabilitação. Diversos pesos disponíveis.', category: 'Exercícios', tag: 'Par ou Unitário', imageUrl: '/assets/products/HaltP.jpg' },
  { id: 'p-18', name: 'Faixa Elástica', description: 'Fortalecimento e alongamento. Disponível em intensidades Médio, Forte e Extra Forte.', category: 'Exercícios', tag: '150 x 15 cm', imageUrl: '/assets/products/DorsiFlex.jpg' },
  { id: 'p-19', name: 'Disco de Equilíbrio Inflável', description: 'Produto vinílico, atóxico. Suporta até 100kg. Acompanha bomba de enchimento.', category: 'Exercícios', tag: '33 cm diâmetro', imageUrl: '/assets/products/Disco.jpg' },
  { id: 'p-20', name: 'Corretor Postural', description: 'Suporte para minimizar desvios da coluna. Parte interna acolchoada.', category: 'Órteses', tag: 'PP ao XXGG', imageUrl: '/assets/products/corretor postural.jpg' },
  { id: 'p-21', name: 'Corretor de Joanete', description: 'Silicone de alta maciez, hipoalergênico, lavável e de alívio imediato.', category: 'Órteses', tag: 'Tamanho Único', imageUrl: '/assets/products/Joanete.jpg' },
  { id: 'p-22', name: 'Corretor de Dedos', description: 'Corrige dedos, prevenindo calos e deformidades.', category: 'Órteses', tag: 'Tamanho Único', imageUrl: '/assets/products/Corretor de Dedos.jpg' },
  { id: 'p-23', name: 'Joelheira Patelar', description: 'Abas frontais em fecho aderente para compressão adequada. Bilateral.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/Joelheira.jpg' },
  { id: 'p-24', name: 'Imobilizador para Joelho', description: 'Fecho aderente para compressão adequada. Estreito ou largo.', category: 'Órteses', tag: 'Estreito ou Largo', imageUrl: '/assets/products/ImobJoe.jpg' },
  { id: 'p-25', name: 'Bota Imobilizadora Anatômica', description: 'Talas laterais em alumínio, solado em borracha. Indicada para fraturas e entorses.', category: 'Órteses', tag: 'Tam. 41 ao 46', imageUrl: '/assets/products/ImobBota.jpg' },
  { id: 'p-26', name: 'Bota Imobilizadora Standard', description: 'Anatômica, unissex, bilateral e de fabricação nacional.', category: 'Órteses', tag: 'Tam. 38 ao 42', imageUrl: '/assets/products/hidrolight.jpg' },
  { id: 'p-27', name: 'Tipoia Simples', description: 'Sustentação do membro superior para engessamentos, lesões e pós-operatório.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/Tipoia Simples.jpg' },
  { id: 'p-28', name: 'Tipoia Velpeau', description: 'Sustentação reforçada para engessamentos, lesões e pós-operatório de AVC.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/Tipoia Velpeau.jpg' },
  { id: 'p-29', name: 'Hiperboloide', description: 'Exercícios do bucomaxilo para fortalecimento ortognático.', category: 'Terapia', tag: 'PP ao GG', imageUrl: '/assets/products/hiperboloides.jpg' },
  { id: 'p-30', name: 'Ponteiras de Proteção', description: 'Gel polímero para ponta dos pés, alivia pressão e evita bolhas e calos.', category: 'Acessórios', tag: 'Tam. Único', imageUrl: '/assets/products/Ponteiras.png' },
  { id: 'p-31', name: 'Munhequeira com Tala', description: 'Auxilia na recuperação de lesões e prevenção de doenças na região.', category: 'Órteses', tag: 'M ao G', imageUrl: '/assets/products/Munhequeira.jpg' },
  { id: 'p-32', name: 'Munhequeira', description: 'Design anatômico, fácil ajuste, simples de limpar e altamente durável.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/MunhequeiraFlexMouve.jpg' },
  { id: 'p-33', name: 'Suporte Tennis Elbow', description: 'Prevenção e alívio de epicondilite. Ideal para digitadores, músicos e tarefas domésticas.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/Tennis Elbow.jpg' },
  { id: 'p-34', name: 'Tornozeleira', description: 'Ajustável com estabilizador. Para entorses, bursites, tendinites e artrite reumatoide.', category: 'Órteses', tag: 'Tam. Único', imageUrl: '/assets/products/Tornozeleira.jpg' },
  { id: 'p-35', name: 'Bomba de Inflar', description: 'Ação dupla, ideal para bolas de pilates e objetos infláveis.', category: 'Acessórios', tag: 'Tam. Único', imageUrl: '/assets/products/BombaInflar.jpg' },
  { id: 'p-36', name: 'TipToe Protector', description: 'Almofadas de silicone macio para alívio de metatarsalgia e neuroma.', category: 'Acessórios', tag: 'Tam. Único', imageUrl: '/assets/products/TipToe.jpg' },
  { id: 'p-37', name: 'FISIOFORT + Premium', description: 'Calor imediato e relaxamento corporal. Alívio de artrite, artrose e dores articulares.', category: 'Terapia', tag: '150g', imageUrl: '/assets/products/FisioFort.jpg' },
  { id: 'p-38', name: 'Faixa Elástica Três Painéis', description: 'Indicada para torcicolos, lesões cervicais, artroses e artrites.', category: 'Órteses', tag: 'P ao GG', imageUrl: '/assets/products/Cinta3Paineis.jpg' },
  { id: 'p-39', name: 'Colar Cervical de Espuma', description: 'Espuma de alta densidade, mantém a coluna em posição neutra de repouso.', category: 'Órteses', tag: 'M ao G', imageUrl: '/assets/products/Colar Cervical.jpg' },
];

export const PRODUCT_CATEGORIES = [
  'Todos', 'Mobilidade', 'Conforto', 'Palmilhas', 'Exercícios', 'Órteses', 'Terapia', 'Acessórios',
];

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Preciso de encaminhamento médico para fazer fisioterapia?',
    answer: 'Não é obrigatório, mas é recomendado. A Dra. Jéssica Arantes realiza uma avaliação completa na primeira consulta para definir o melhor plano de tratamento.',
  },
  {
    question: 'Vocês trabalham com convênios?',
    answer: 'Atualmente trabalhamos com atendimento particular. Entre em contato pelo WhatsApp para saber mais sobre valores e condições de pagamento.',
  },
  {
    question: 'Como funciona a locação de equipamentos?',
    answer: 'A locação inclui a entrega do equipamento com regulagem de altura personalizada e treinamento de uso correto, evitando lesões secundárias.',
  },
  {
    question: 'Qual a duração de uma sessão de fisioterapia?',
    answer: 'As sessões duram em média 50 minutos, podendo variar de acordo com o tratamento e necessidade individual de cada paciente.',
  },
  {
    question: 'Vocês atendem aos sábados?',
    answer: 'Sim! Funcionamos de segunda a sexta das 09h às 12h e das 14h às 18h, e aos sábados das 09h às 12h.',
  },
  {
    question: 'A clínica tem estacionamento?',
    answer: 'Sim, temos estacionamento exclusivo para clientes, garantindo comodidade e segurança para sua visita.',
  },
];

// ── Galeria ──────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    src: '/assets/gallery/gallery-1.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-1', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Consultório de Fisioterapia',
  },
  {
    src: '/assets/gallery/gallery-2.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-2', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Loja de Produtos Ortopédicos',
  },
  {
    src: '/assets/gallery/gallery-3.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-3', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Atendimento Especializado',
  },
  {
    src: '/assets/gallery/gallery-4.jpg',
    webpSrcSet: buildWebpSrcSet('/assets/gallery/gallery-4', [480, 768, 1024, 1280]),
    sizes: '(max-width: 768px) 100vw, 50vw',
    title: 'Ambiente Acolhedor e Moderno',
  },
];

export const GALLERY_IMAGES = GALLERY_ITEMS.map((item) => item.src);

// ── Estatísticas ─────────────────────────────────────────────────
export const PROJECT_STATS = [
  { number: '10+', label: 'Anos de Experiência' },
  { number: '5.000+', label: 'Pacientes Atendidos' },
  { number: '100%', label: 'Atendimento Personalizado' },
  { number: '39+', label: 'Produtos Ortopédicos' },
];

// ── Depoimentos ──────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 'test-1',
    text: 'Após minha cirurgia no joelho, a Dra. Jéssica me ajudou na reabilitação completa. Em poucas semanas já estava caminhando normalmente. Atendimento excepcional!',
    author: 'Maria S.',
    location: 'Sorocaba, SP',
  },
  {
    id: 'test-2',
    text: 'Aluguei muletas na FisioOrthopédicos e fiquei impressionado: além de entregar no tamanho certo, me ensinaram a usar corretamente. Fez toda diferença na recuperação.',
    author: 'Carlos R.',
    location: 'Sorocaba, SP',
  },
  {
    id: 'test-3',
    text: 'Sofria com dores na ATM há anos. Com o tratamento de fisioterapia facial, as dores diminuíram drasticamente. Recomendo de olhos fechados!',
    author: 'Ana P.',
    location: 'Votorantim, SP',
  },
];

// ── Dados "Quem Somos" ──────────────────────────────────────────
export const ABOUT_CONTENT = {
  intro: 'A FisioOrthopédicos foi criada com o intuito de proporcionar ao cliente excelência no atendimento dentro e fora da loja.',
  body: 'Dentro da loja, oferecemos orientações sobre qual o melhor produto para cada caso — como usar e qual a altura ideal na hora da locação ou compra de bengala, andador ou muletas. Pois é muito comum em outros lugares o cliente locar e não ser ensinado a usar o produto de forma correta, trazendo consequências prejudiciais à saúde.',
  bodyExtra: 'Fora da loja, o cliente encontra produtos para manter a prática de atividade física, travesseiros que auxiliam na qualidade de sono com a qualidade que a coluna precisa. O atendimento é realizado com profissionais treinados e com as orientações da Dra. Jéssica Arantes, fisioterapeuta renomada em Sorocaba, que trabalha com a área ortopédica desde 2013.',
  quote: 'Venha cuidar da sua saúde, atendimento exclusivo com o diferencial de uma visão profissional.',
  professionalName: 'Dra. Jéssica Arantes',
  professionalTitle: 'Fisioterapeuta Ortopédica — CREFITO',
  professionalImage: '/assets/brand/dra-jessica.jpeg',
};
