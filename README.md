# Protheus por Dentro

Site (Vite + React + TypeScript) com documentação independente sobre o ERP
TOTVS Protheus, focado no que a documentação oficial não entrega bem: como
os módulos realmente se conversam — parâmetros de integração, fluxo de
dados entre tabelas e dicionário de dados.

Parte do conteúdo é aberta (mapa de módulos, um fluxo completo, fontes);
o restante é vendido via link externo de pagamento (Stripe Payment Link ou
Gumroad), sem login nem assinatura — um código de acesso simples desbloqueia
o site no navegador.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # serve o build em localhost pra conferir
```

## Deploy no Vercel

Zero configuração extra é necessária:

1. No painel do [Vercel](https://vercel.com/new), importe este repositório.
2. O Vercel detecta automaticamente o framework **Vite** (`npm run build`,
   saída em `dist/`).
3. O arquivo `vercel.json` já cuida do rewrite de SPA (para as rotas do
   React Router funcionarem em refresh/link direto, ex.: `/parametros-mv`).
4. Deploy.

## Como configurar a venda (paywall simples, sem backend)

1. Crie um produto em qualquer plataforma de checkout externo — mais
   simples: [Stripe Payment Links](https://dashboard.stripe.com/payment-links)
   ou [Gumroad](https://gumroad.com/). Não precisa integrar API nenhuma.
2. Cole a URL do checkout em `src/lib/config.ts` (`CHECKOUT_URL`).
3. Defina o código de acesso que será entregue a quem comprar (na página de
   confirmação do Stripe/Gumroad, ou por e-mail automático da própria
   plataforma):
   ```bash
   node scripts/gerar-hash-codigo.mjs "SEU-NOVO-CODIGO"
   ```
4. Cole o hash gerado em `src/lib/access.ts`, na constante
   `ACCESS_CODE_HASH`.
5. Commit + push — pronto, o novo código passa a valer.

O desbloqueio é 100% client-side (hash comparado no navegador, sem
backend). Isso significa: rápido de configurar, mas não é à prova de
engenharia reversa — é um MVP para validar se o produto vende antes de
investir em autenticação/assinatura de verdade.

## Estrutura de conteúdo

| Página | Rota | Acesso |
|---|---|---|
| Início | `/` | Livre |
| Mapa de Módulos | `/mapa-modulos` | Livre |
| Fluxo Comercial (Orçamento → Título a Receber) | `/fluxo-comercial` | Livre |
| Fontes | `/fontes` | Livre |
| Parâmetros MV_ de integração | `/parametros-mv` | Pago |
| Fluxo Industrial (PCP → Estoque → Compras → Fiscal) | `/fluxo-industrial` | Pago |
| Dicionário de Dados (SX2/SX3/SX9) | `/dicionario-dados` | Pago |
| Glossário de Tabelas | `/glossario-tabelas` | Pago |
| Desbloquear | `/desbloquear` | Livre (formulário de código) |

Todo o conteúdo técnico cita a fonte oficial (TDN / Central de Atendimento
TOTVS) ou marca explicitamente quando ainda precisa validação em ambiente
de teste — ver a página **Fontes**.

## Aviso

Este material é produzido de forma independente, a partir de fontes
públicas. TOTVS, Protheus e nomes de módulos (SIGAPCP, SIGAEST, SIGACOM
etc.) são marcas da TOTVS S.A. Este projeto não tem qualquer vínculo
oficial com a TOTVS.
