# Documentação do Projeto - FisioOrthopédicos

> Última atualização: 05/05/2026

---

## 1) Visão Geral

A **FisioOrthopédicos** é um site institucional em React voltado para uma clínica especializada em fisioterapia ortopédica, reabilitação facial, medicina chinesa, e para a apresentação/venda/locação de um extenso catálogo de produtos ortopédicos. O objetivo principal é a captação de pacientes e vendas via WhatsApp.

Estado atual do projeto:

- Arquitetura multipágina (SPA com React Router).
- Rotas públicas com pré-renderização estática (SEO-friendly).
- SEO técnico por rota (meta tags, canonical, OG, Twitter e JSON-LD otimizado para `MedicalClinic`).
- Catálogo em tempo real com filtros integrados e redirecionamento de intenção de compra via WhatsApp.
- Páginas dedicadas por especialidade médica listando os tratamentos.

---

## 2) Stack Tecnológica

| Tecnologia | Versão | Função |
|---|---:|---|
| React | ^19.2.3 | UI |
| React DOM | ^19.2.3 | Render no browser |
| TypeScript | ~5.8.2 | Tipagem estática |
| Vite | ^6.2.0 | Dev server e build |
| React Router DOM | ^7.13.0 | Roteamento multipágina |
| SEO Head nativo | interno | SEO tags por rota sem dependência externa |
| Framer Motion | 11.16.0 | Animações |
| Lucide React | ^0.562.0 | Ícones |
| Tailwind CSS | ^3.4.1 | Estilização |
| PostCSS + Autoprefixer | ^8.4.31 / ^10.4.16 | Pipeline CSS |
| vite-plugin-prerender | ^1.0.8 | Pré-render em produção |
| sharp | ^0.34.5 | Apoio para otimização de imagens |

---

## 3) Estrutura de Arquivos (Atual)

```text
fisioorthopedicos/
|-- App.tsx
|-- index.tsx
|-- index.css
|-- constants.ts
|-- types.ts
|-- vite.config.ts
|-- vercel.json
|-- DOCUMENTACAO.md
|-- docs/
|   `-- GERENCIAMENTO_DE_IMAGENS.md
|-- layouts/
|   `-- SiteLayout.tsx
|-- pages/
|   |-- HomePage.tsx
|   |-- AboutPage.tsx
|   |-- ServicesPage.tsx
|   |-- ProductsPage.tsx
|   |-- ProjectsPage.tsx
|   |-- ContactPage.tsx
|   |-- CollectionDetailPage.tsx
|   |-- PrivacyPage.tsx
|   |-- TermsPage.tsx
|   `-- NotFoundPage.tsx
|-- components/
|   |-- Navbar.tsx
|   |-- Footer.tsx
|   |-- WhatsAppButton.tsx
|   |-- Hero.tsx
|   |-- Collections.tsx
|   |-- Features.tsx
|   |-- Process.tsx
|   |-- Gallery.tsx
|   |-- Lightbox.tsx
|   |-- Testimonials.tsx
|   |-- FAQ.tsx
|   |-- CustomCursor.tsx
|   |-- QuoteModal.tsx
|   `-- seo/
|      `-- SeoHead.tsx
|-- seo/
|   `-- routeSeo.ts
`-- public/
    |-- robots.txt
    |-- sitemap.xml
    `-- assets/
        |-- brand/
        |-- hero/
        |-- collections/
        |-- products/
        `-- gallery/
```

---

## 4) Rotas Públicas

Configuradas em `App.tsx`:

| Rota | Página |
|---|---|
| `/` | HomePage |
| `/sobre-nos` | AboutPage |
| `/servicos` | ServicesPage |
| `/produtos` | ProductsPage |
| `/projetos` | ProjectsPage |
| `/contato` | ContactPage |
| `/colecoes/:slug` | CollectionDetailPage (Especialidades) |
| `/politica-de-privacidade` | PrivacyPage |
| `/termos-de-uso` | TermsPage |
| `*` | NotFoundPage |

Slugs atualmente publicados de Especialidades:

- `/colecoes/fisioterapia-ortopedica`
- `/colecoes/fisioterapia-facial`
- `/colecoes/medicina-chinesa`

---

## 5) Arquitetura de Renderização

Fluxo atual:

```text
index.tsx
  -> App (BrowserRouter)
    -> SiteLayout
      -> Navbar
      -> Outlet (página atual)
      -> Footer
      -> WhatsAppButton
      -> QuoteModal (Agendamento)
```

Detalhes importantes:

- `SiteLayout.tsx` dispara `prerender-ready` a cada troca de rota para suportar o `vite-plugin-prerender`.
- Navegação interna combina `Link` (rotas) e âncora para seções da home (`#collections`, `#features`, `#faq`).
- Em `Collections.tsx`, os cartões levam para a página detalhada da respectiva Especialidade.

---

## 6) SEO Técnico (Implementado)

### 6.1 Mapa central de SEO

Arquivo: `seo/routeSeo.ts`

- Define SEO por rota via `ROUTE_SEO`.
- Define `PRERENDER_ROUTES`.
- Define `SITEMAP_ENTRIES`.
- Define `CONTACT_NAP` para consistência de dados da clínica.
- Exponibiliza `getCollectionSeoBySlug(slug)` para rotas de especialidades.

### 6.2 Tags SEO por página

Arquivo: `components/seo/SeoHead.tsx`

- `<title>` e `meta description`
- `meta robots`
- `link rel="canonical"`
- Open Graph (`og:*`)
- Twitter Card (`twitter:*`)
- JSON-LD (`application/ld+json`)

### 6.3 Schemas JSON-LD usados

- `Organization`
- `MedicalClinic` (LocalBusiness)
- `WebSite`
- `BreadcrumbList` (páginas internas e especialidades)

### 6.4 Robots e Sitemap

- `public/robots.txt`: libera rastreio e aponta para sitemap canônico.
- `public/sitemap.xml`: inclui todas as rotas públicas (incluindo as rotas de produtos e especialidades).

### 6.5 Domínio canônico

- `https://www.fisioorthopedicos.com.br`

---

## 7) Componentes

### Estrutura principal

- `Navbar`: menu desktop/mobile, links de páginas e catálogo.
- `Footer`: navegação, contato (NAP) e links legais.
- `WhatsAppButton`: CTA flutuante global.
- `QuoteModal`: Formulário de agendamento de consultas ou serviços.
- `CustomCursor`: cursor customizado para dispositivos com hover.

### Home (`HomePage.tsx`)

Ordem de seções:

1. `Hero` (Apresentação da Dra. e Clínica)
2. `Collections` (Especialidades Médicas)
3. `Features` (Diferenciais de Atendimento)
4. `Process` (Fluxo de Tratamento e Recuperação)
5. `Gallery` (Nosso Espaço com `Lightbox`)
6. `Testimonials` (Pacientes)
7. `FAQ` (Dúvidas frequentes sobre as sessões)

### Catálogo de Produtos (`ProductsPage.tsx`)

- Exibição em Grid responsivo do array de `PRODUCTS`.
- Filtros por categoria (Mobilidade, Órteses, etc).
- CTA inteligente que envia o nome do produto selecionado diretamente para o WhatsApp da Clínica.

### Detalhe de Especialidade (`CollectionDetailPage.tsx`)

- Leitura de `slug` via `useParams`.
- Busca da especialidade correspondente em `COLLECTIONS`.
- Filtro por modalidades/tratamentos com estado ativo.
- Galeria de fotos associadas a cada tratamento.

---

## 8) Conteúdo Centralizado

Arquivo: `constants.ts`

- Dados da clínica (`BRAND_NAME`, `SITE_URL`).
- Contato/NAP (`CONTACT_PHONE_*`, `CONTACT_EMAIL`, endereço físico do consultório).
- `WHATSAPP_LINK`.
- Catálogo de `PRODUCTS` contendo 39 equipamentos.
- Arrays de conteúdo (`FAQ_ITEMS`, `TESTIMONIALS`, `FEATURES`).
- Mídias e responsividade de imagens.

Contrato de Especialidades:

- `COLLECTIONS` inclui `slug` e `colors` (utilizado semanticamente como modalidades de tratamento).
- Cada modalidade (cor) possui `id`, `name` e `images`.

Arquivo: `types.ts`

- Tipos de dados de UI (`ProductItem`, `FAQItem`, etc.).
- Contrato SEO por rota (`RouteSEO`).

---

## 9) Mídia e Performance

Implementações atuais:

- Imagens locais em `public/assets`.
- Uso de `srcSet` WebP + `sizes` para responsividade ideal.
- Hero com `fetchPriority="high"` e `loading="eager"`.
- Imagens fora da dobra com `loading="lazy"`.

Padrão de variantes WebP:

- `-480.webp`
- `-768.webp`
- `-1024.webp`
- `-1280.webp`

Guia operacional: `docs/GERENCIAMENTO_DE_IMAGENS.md`.

---

## 10) Build, Preview e Execução

Comandos:

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## 11) Deploy (Vercel)

Arquivo: `vercel.json`

- Build com `npm run build`.
- Output em `dist`.
- Fallback para `index.html` (SPA) para suportar navegação direta em rotas.

Com o pré-render ativo em produção (`vite.config.ts`):

- As rotas de `PRERENDER_ROUTES` geram HTML estático para melhorar indexação.

---

## 12) Checklist de Manutenção da Documentação

Sempre atualizar esta documentação quando houver alteração em:

- Rotas de `App.tsx`.
- SEO central em `seo/routeSeo.ts`.
- Estrutura de imagens em `public/assets`.
- Contratos de `constants.ts` e `types.ts`.
- Config de build/deploy (`vite.config.ts`, `vercel.json`, `robots.txt`, `sitemap.xml`).
