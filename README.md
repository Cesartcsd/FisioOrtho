# FisioOrthopédicos

Site institucional da clínica FisioOrthopédicos, com foco em captação de pacientes via WhatsApp, apresentação do catálogo de produtos ortopédicos e detalhes das especialidades. Desenvolvido com páginas indexáveis e base técnica de SEO on-page.

## Sumário

- [Visão geral](#visão-geral)
- [Principais recursos](#principais-recursos)
- [Stack técnica](#stack-técnica)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Rotas públicas](#rotas-públicas)
- [SEO e pré-render](#seo-e-pré-render)
- [Conteúdo e imagens](#conteúdo-e-imagens)
- [Deploy](#deploy)
- [Troubleshooting](#troubleshooting)
- [Documentação relacionada](#documentação-relacionada)

## Visão geral

O projeto conta com uma arquitetura multipágina dinâmica para clínicas com:

- rotas públicas dedicadas para tratamentos e catálogo de produtos;
- metadados SEO por rota;
- JSON-LD para MedicalClinic, LocalBusiness e BreadcrumbList;
- pré-render estático em build de produção;
- robots e sitemap canônicos.

Domínio canônico configurado:

- `https://www.fisioorthopedicos.com.br`

## Principais recursos

- Navegação multipágina com `react-router-dom`.
- Head tags por rota com componente nativo `SeoHead`.
- Schemas JSON-LD para SEO local e estrutura médica.
- Catálogo completo de equipamentos com filtros de categoria integrados à UI.
- Pré-render das rotas públicas com `vite-plugin-prerender`.
- Mídias locais em `public/assets` com `srcset` WebP e `sizes`.
- CTA de conversão via WhatsApp em pontos chave da interface (inclusive em cada produto do catálogo).

## Stack técnica

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
|   |-- ProductsPage.tsx
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

## Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm
- Google Chrome instalado (para pré-render em build de produção no ambiente atual Windows)

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse:

- `http://localhost:3000`

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Ambiente de desenvolvimento com Vite |
| `npm run build` | Build de produção + pré-render das rotas públicas |
| `npm run preview` | Preview local do build gerado em `dist/` |

## Rotas públicas

- `/`
- `/sobre-nos`
- `/servicos`
- `/produtos`
- `/projetos`
- `/contato`
- `/colecoes/fisioterapia-ortopedica`
- `/colecoes/fisioterapia-facial`
- `/colecoes/medicina-chinesa`
- `/politica-de-privacidade`
- `/termos-de-uso`

Fallback:

- `*` -> `NotFoundPage`

## SEO e pré-render

### Camada SEO por rota

Arquivos principais:

- `seo/routeSeo.ts`
- `components/seo/SeoHead.tsx`

Cada rota pública possui:

- `title`
- `description`
- `canonical`
- Open Graph
- Twitter Card
- `robots`
- JSON-LD (quando aplicável)

### Pré-render

O pré-render usa `vite-plugin-prerender` em modo produção (`vite.config.ts`) com as rotas de `PRERENDER_ROUTES`.

No ambiente atual, o renderer está configurado com:

- `executablePath: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`

Se o build falhar por Chrome não encontrado, ajuste esse caminho no `vite.config.ts` para o executável correto da máquina.

### Robots e Sitemap

- `public/robots.txt`
- `public/sitemap.xml`

Ambos apontam para o domínio canônico `https://www.fisioorthopedicos.com.br`.

## Conteúdo e imagens

### Conteúdo centralizado

Arquivo:

- `constants.ts`

Inclui:

- dados institucionais/NAP da clínica;
- links de contato e WhatsApp;
- conteúdo de seções (FAQ, Depoimentos, etc);
- dados de especialidades (`COLLECTIONS`) com `slug` e modalidades;
- catálogo de equipamentos médicos e acessórios (`PRODUCTS`);
- referências de imagens.

### Gestão de imagens

Padrão atual:

- imagens locais em `public/assets`
- variantes WebP com sufixos `-480`, `-768`, `-1024`, `-1280`
- `srcset` + `sizes` em Hero, Especialidades e Galeria

Guia operacional completo:

- `docs/GERENCIAMENTO_DE_IMAGENS.md`

## Deploy

### Vercel

Arquivo:

- `vercel.json`

Configuração atual:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- fallback de rotas para `index.html` (SPA routing)

## Troubleshooting

### Porta diferente no ambiente local

O projeto usa `3000` em `vite.config.ts`. Se estiver ocupado, ajuste a porta na configuração.

### Erro no build de pré-render

Causa comum: caminho do Chrome inválido no `vite.config.ts`.

Solução:

- valide se o executável existe;
- ajuste `executablePath` para o caminho correto da máquina.

### Rotas abrindo 404 em produção

Verifique:

- configuração de fallback em `vercel.json`;
- build e deploy da pasta `dist`;
- existência dos arquivos pré-renderizados após `npm run build`.

## Documentação relacionada

- `DOCUMENTACAO.md`
- `docs/GERENCIAMENTO_DE_IMAGENS.md`
