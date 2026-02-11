# Documentacao do Projeto - Soroportas

> Ultima atualizacao: 10/02/2026

---

## 1) Visao Geral

O **Soroportas** e um site institucional em React para captacao de leads via WhatsApp e apresentacao de produtos premium.

Estado atual do projeto:

- Arquitetura multipagina.
- Rotas publicas com pre-render estatico.
- SEO tecnico por rota (meta tags, canonical, OG, Twitter e JSON-LD).
- Midias locais em `public/assets` com `srcset` WebP.
- Paginas dedicadas por colecao com filtro por cor (fase pre-upload de fotos).

---

## 2) Stack Tecnologica

| Tecnologia | Versao | Funcao |
|---|---:|---|
| React | ^19.2.3 | UI |
| React DOM | ^19.2.3 | Render no browser |
| TypeScript | ~5.8.2 | Tipagem estatica |
| Vite | ^6.2.0 | Dev server e build |
| React Router DOM | ^7.13.0 | Roteamento multipagina |
| React Helmet Async | ^2.0.5 | SEO tags por rota |
| Framer Motion | 11.16.0 | Animacoes |
| Lucide React | ^0.562.0 | Icones |
| Tailwind CSS | ^3.4.1 | Estilizacao |
| PostCSS + Autoprefixer | ^8.4.31 / ^10.4.16 | Pipeline CSS |
| vite-plugin-prerender | ^1.0.8 | Pre-render em producao |
| sharp | ^0.34.5 | Apoio para otimizacao de imagens |

---

## 3) Estrutura de Arquivos (Atual)

```text
soroportas---portas-de-alto-padr-o/
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
        `-- gallery/
```

---

## 4) Rotas Publicas

Configuradas em `App.tsx`:

| Rota | Pagina |
|---|---|
| `/` | HomePage |
| `/sobre-nos` | AboutPage |
| `/servicos` | ServicesPage |
| `/projetos` | ProjectsPage |
| `/contato` | ContactPage |
| `/colecoes/:slug` | CollectionDetailPage |
| `/politica-de-privacidade` | PrivacyPage |
| `/termos-de-uso` | TermsPage |
| `*` | NotFoundPage |

Slugs atualmente publicados:

- `/colecoes/entrada-principal`
- `/colecoes/linha-lacca-touch`
- `/colecoes/linha-amadeirada`

---

## 5) Arquitetura de Renderizacao

Fluxo atual:

```text
index.tsx
  -> HelmetProvider
    -> App (BrowserRouter)
      -> SiteLayout
        -> Navbar
        -> Outlet (pagina atual)
        -> Footer
        -> WhatsAppButton
        -> QuoteModal
```

Detalhes importantes:

- `SiteLayout.tsx` dispara `prerender-ready` a cada troca de rota para suportar o `vite-plugin-prerender`.
- Navegacao interna combina `Link` (rotas) e ancora para secoes da home (`#collections`, `#features`, `#faq`).
- Em `Collections.tsx`, a foto e o link "Saiba mais" levam para a rota da colecao.

---

## 6) SEO Tecnico (Implementado)

### 6.1 Mapa central de SEO

Arquivo: `seo/routeSeo.ts`

- Define SEO por rota via `ROUTE_SEO`.
- Define `PRERENDER_ROUTES`.
- Define `SITEMAP_ENTRIES`.
- Define `CONTACT_NAP` para consistencia de dados institucionais.
- Exponibiliza `getCollectionSeoBySlug(slug)` para rotas de colecao.

### 6.2 Tags SEO por pagina

Arquivo: `components/seo/SeoHead.tsx`

- `<title>` e `meta description`
- `meta robots`
- `link rel="canonical"`
- Open Graph (`og:*`)
- Twitter Card (`twitter:*`)
- JSON-LD (`application/ld+json`)

### 6.3 Schemas JSON-LD usados

- `Organization`
- `HomeAndConstructionBusiness` (LocalBusiness)
- `WebSite`
- `BreadcrumbList` (paginas internas e paginas de colecao)

### 6.4 Robots e Sitemap

- `public/robots.txt`: libera rastreio e aponta para sitemap canonico.
- `public/sitemap.xml`: inclui todas as rotas publicas, incluindo as 3 paginas de colecao.

### 6.5 Dominio canonico

- `https://www.soroportas.com`

---

## 7) Componentes

### Estrutura principal

- `Navbar`: menu desktop/mobile, links de paginas e secoes.
- `Footer`: navegacao, contato (NAP) e links legais.
- `WhatsAppButton`: CTA flutuante global.
- `QuoteModal`: formulario multi-etapas de orcamento.
- `CustomCursor`: cursor customizado para dispositivos com hover.

### Home (`HomePage.tsx`)

Ordem de secoes:

1. `Hero`
2. `Collections`
3. `Features`
4. `Process`
5. `Gallery` (com `Lightbox`)
6. `Testimonials`
7. `FAQ`

### Detalhe de colecao (`CollectionDetailPage.tsx`)

- Leitura de `slug` via `useParams`.
- Busca da colecao correspondente em `COLLECTIONS`.
- Filtro por cor com estado ativo.
- Galeria por cor (nesta fase com `images: []`, exibindo estado vazio).
- CTA de WhatsApp para conversao.

---

## 8) Conteudo Centralizado

Arquivo: `constants.ts`

- Dados da marca (`BRAND_NAME`, `SITE_URL`).
- Contato/NAP (`CONTACT_PHONE_*`, `CONTACT_EMAIL`, cidade/estado, endereco).
- `WHATSAPP_LINK`.
- Logos da marca.
- Midias e responsividade de imagens (`HERO_IMAGES`, `COLLECTIONS`, `GALLERY_ITEMS`).
- Conteudo comercial (`HERO_CONTENT`, `FEATURES`, `PROJECT_STATS`).

Contrato de colecoes:

- `COLLECTIONS` agora inclui `slug` e `colors`.
- Cada cor possui `id`, `name` e `images`.
- `images` foi iniciado vazio na fase pre-upload e sera preenchido quando os arquivos forem enviados.

Arquivo: `types.ts`

- Tipos de dados de UI (`CollectionItem`, `FeatureItem`, etc.).
- Novos tipos: `CollectionColorOption`, `CollectionColorImage`.
- Contrato SEO por rota (`RouteSEO`).

---

## 9) Midia e Performance

Implementacoes atuais:

- Imagens locais em `public/assets`.
- Uso de `srcSet` WebP + `sizes` em Hero, Collections e Gallery.
- Hero com `fetchPriority="high"` e `loading="eager"`.
- Imagens fora da dobra com `loading="lazy"`.

Padrao de variantes WebP:

- `-480.webp`
- `-768.webp`
- `-1024.webp`
- `-1280.webp`

Guia operacional: `docs/GERENCIAMENTO_DE_IMAGENS.md`.

---

## 10) Build, Preview e Execucao

Comandos:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Observacoes:

- Atualmente nao ha dependencia funcional de API externa para o front-end.
- `GEMINI_API_KEY` ainda aparece em `vite.config.ts`, mas nao e consumida por codigo de interface neste estado do projeto.

---

## 11) Deploy (Vercel)

Arquivo: `vercel.json`

- Build com `npm run build`.
- Output em `dist`.
- Fallback para `index.html` (SPA) para suportar navegacao direta em rotas.

Com o pre-render ativo em producao (`vite.config.ts`):

- As rotas de `PRERENDER_ROUTES` geram HTML estatico para melhorar indexacao.

---

## 12) Checklist de Manutencao da Documentacao

Sempre atualizar esta documentacao quando houver alteracao em:

- Rotas de `App.tsx`.
- SEO central em `seo/routeSeo.ts`.
- Estrutura de imagens em `public/assets`.
- Contratos de `constants.ts` e `types.ts`.
- Config de build/deploy (`vite.config.ts`, `vercel.json`, `robots.txt`, `sitemap.xml`).
