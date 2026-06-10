# Fábrica Mágica — Landing Page (Astro)

Landing page estática da Fábrica Mágica, migrada de PHP para Astro. Build e deploy via **Cloudflare Pages**.

## Cloudflare Pages — Configuração

| Campo | Valor |
|-------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | **`dist`** (não use `public` — essa pasta só tem scripts JS) |
| Node version | 20 |

> O arquivo [`wrangler.toml`](wrangler.toml) já define `pages_build_output_dir = "dist"` para o Cloudflare não publicar a pasta errada.

### Variável de ambiente

| Nome | Descrição | Exemplo |
|------|-----------|---------|
| `PUBLIC_SITE_URL` | URL pública do site (usada nas meta tags OG/Twitter) | `https://fm.escolhacertabrasil.com.br` |

Configure em **Cloudflare Pages → Settings → Environment variables** antes do primeiro deploy.

## Imagens

As imagens usam os mesmos caminhos do site original e devem estar disponíveis no domínio de produção:

- `/livro/images/ads1.webp`
- `/livro/images/gua-treinamento.webp`

O logo do footer é carregado de `https://fm.doutoraescola.com.br/assets/img/logo.webp`.

## Tracking

- **Google Tag Manager:** `GTM-56HN95B`
- **Meta Pixel:** `216996528921536` (client-side, sem API server-side)
- Evento `InitiateCheckout` nos cliques nos links de checkout

## Repositório

https://github.com/riengenheiro/fm10.git
