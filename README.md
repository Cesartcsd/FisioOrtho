# Soroportas

Site institucional da Soroportas com foco em captacao de leads via WhatsApp, paginas indexaveis e base tecnica de SEO on-page.

## Sumario

- [Visao geral](#visao-geral)
- [Principais recursos](#principais-recursos)
- [Stack tecnica](#stack-tecnica)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pre-requisitos](#pre-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponiveis](#scripts-disponiveis)
- [Rotas publicas](#rotas-publicas)
- [SEO e pre-render](#seo-e-pre-render)
- [Conteudo e imagens](#conteudo-e-imagens)
- [Deploy](#deploy)
- [Troubleshooting](#troubleshooting)
- [Documentacao relacionada](#documentacao-relacionada)

## Visao geral

O projeto evoluiu de landing page unica para uma arquitetura multipagina com:

- rotas publicas dedicadas;
- metadados SEO por rota;
- JSON-LD por contexto;
- pre-render estatico em build de producao;
- robots e sitemap canonicos.

Dominio canonico configurado:

- `https://www.soroportas.com`

## Principais recursos

- Navegacao multipagina com `react-router-dom`.
- Head tags por rota com componente nativo `SeoHead`.
- Schemas JSON-LD para Organization, LocalBusiness, WebSite e BreadcrumbList.
- Pre-render das rotas publicas com `vite-plugin-prerender`.
- Midias locais em `public/assets` com `srcset` WebP e `sizes`.
- CTA de conversao via WhatsApp em pontos chave da interface.

## Stack tecnica

- `react` + `react-dom`
- `typescript`
- `vite`
- `react-router-dom`
- `SeoHead` nativo (gerenciamento de meta tags via DOM)
- `framer-motion`
- `tailwindcss` + `postcss` + `autoprefixer`
- `vite-plugin-prerender`

## Estrutura do projeto

```text
.
|-- App.tsx
|-- index.tsx
|-- constants.ts
|-- types.ts
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
|   |-- seo/SeoHead.tsx
|   `-- ...
|-- seo/
|   `-- routeSeo.ts
|-- public/
|   |-- robots.txt
|   |-- sitemap.xml
|   `-- assets/
`-- docs/
    `-- GERENCIAMENTO_DE_IMAGENS.md
```

## Pre-requisitos

- Node.js 18+ (recomendado 20+)
- npm
- Google Chrome instalado (para pre-render em build de producao no ambiente atual Windows)

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse:

- `http://localhost:3000`

Observacao:

- `GEMINI_API_KEY` aparece no `vite.config.ts`, mas atualmente nao existe dependencia funcional dessa chave no front-end deste projeto.

## Scripts disponiveis

| Script | Descricao |
|---|---|
| `npm run dev` | Ambiente de desenvolvimento com Vite |
| `npm run build` | Build de producao + pre-render das rotas publicas |
| `npm run preview` | Preview local do build gerado em `dist/` |

## Rotas publicas

- `/`
- `/sobre-nos`
- `/servicos`
- `/projetos`
- `/contato`
- `/colecoes/entrada-principal`
- `/colecoes/linha-lacca-touch`
- `/colecoes/linha-amadeirada`
- `/politica-de-privacidade`
- `/termos-de-uso`

Fallback:

- `*` -> `NotFoundPage`

## SEO e pre-render

### Camada SEO por rota

Arquivos principais:

- `seo/routeSeo.ts`
- `components/seo/SeoHead.tsx`

Cada rota publica possui:

- `title`
- `description`
- `canonical`
- Open Graph
- Twitter Card
- `robots`
- JSON-LD (quando aplicavel)

### Pre-render

O pre-render usa `vite-plugin-prerender` em modo producao (`vite.config.ts`) com as rotas de `PRERENDER_ROUTES`.

No ambiente atual, o renderer esta configurado com:

- `executablePath: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`

Se o build falhar por Chrome nao encontrado, ajuste esse caminho no `vite.config.ts` para o executavel correto da maquina.

### Robots e Sitemap

- `public/robots.txt`
- `public/sitemap.xml`

Ambos apontam para o dominio canonico `https://www.soroportas.com`.

## Conteudo e imagens

### Conteudo centralizado

Arquivo:

- `constants.ts`

Inclui:

- dados institucionais/NAP;
- links de contato;
- conteudo de secoes;
- dados de colecoes com `slug`, lista de cores e imagens por cor;
- referencias de imagens.

### Gestao de imagens

Padrao atual:

- imagens locais em `public/assets`
- variantes WebP com sufixos `-480`, `-768`, `-1024`, `-1280`
- `srcset` + `sizes` em Hero, Collections e Gallery

Guia operacional completo:

- `docs/GERENCIAMENTO_DE_IMAGENS.md`

## Deploy

### Vercel

Arquivo:

- `vercel.json`

Configuracao atual:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- fallback de rotas para `index.html` (SPA routing)

## Troubleshooting

### Porta diferente no ambiente local

O projeto usa `3000` em `vite.config.ts`. Se estiver ocupado, ajuste a porta na configuracao.

### Erro no build de pre-render

Causa comum: caminho do Chrome invalido no `vite.config.ts`.

Solucao:

- valide se o executavel existe;
- ajuste `executablePath` para o caminho correto da maquina.

### Rotas abrindo 404 em producao

Verifique:

- configuracao de fallback em `vercel.json`;
- build e deploy da pasta `dist`;
- existencia dos arquivos pre-renderizados apos `npm run build`.

## Documentacao relacionada

- `DOCUMENTACAO.md`
- `docs/GERENCIAMENTO_DE_IMAGENS.md`

