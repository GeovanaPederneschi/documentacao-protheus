# Documentação Protheus (não oficial)

Documentação técnica independente sobre o ERP TOTVS Protheus, focada no que a
documentação oficial não entrega bem: **como os módulos realmente se
conversam** — parâmetros de integração, fluxo de dados entre tabelas, e
comportamento observado na prática.

## Por que este repositório existe

A documentação oficial da TOTVS (TDN, Central de Atendimento) é extensa, mas
fragmentada: cada parâmetro tem um artigo isolado, sem visão do fluxo
completo entre módulos. Consultorias publicam posts de blog sobre o assunto
(como isca de marketing), mas ninguém organiza isso num lugar central,
navegável e mantido.

Este projeto **não** documenta o código-fonte proprietário da TOTVS (RPO
compilado — sem acesso, sem intenção de acessar). Ele documenta:

1. **Parâmetros `MV_` de integração** entre módulos — o que cada um liga,
   com que módulo, e o efeito prático de ativá-lo. Ver
   [`docs/parametros-integracao-mv.md`](docs/parametros-integracao-mv.md).
2. **Fluxos de dados entre módulos** (ex.: PCP → Estoque → Compras →
   Fiscal/Bloco K), consolidando o que hoje está espalhado em artigos
   avulsos. Ver
   [`docs/fluxo-industria-pcp-estoque-compras-fiscal.md`](docs/fluxo-industria-pcp-estoque-compras-fiscal.md).
3. **Dicionário de dados** (tabelas SX2/SX3/SX9) — não o conteúdo
   proprietário da TOTVS, mas um guia de como extrair e organizar essa
   metainformação do **seu próprio ambiente** (inclusive um ambiente de
   teste, grupo `99`, sem custo de licença). Ver
   [`docs/dicionario-de-dados-sx2-sx3-sx9.md`](docs/dicionario-de-dados-sx2-sx3-sx9.md).

## Estado atual

Fase inicial: consolidação de parâmetros e fluxos a partir de fontes
públicas oficiais (TDN, Central de Atendimento TOTVS), com marcação clara de
status (confirmado por fonte oficial vs. precisa validação em ambiente de
teste). Todas as fontes usadas estão listadas em
[`docs/fontes.md`](docs/fontes.md) para rastreabilidade.

## Como contribuir com dados reais

Se você tem acesso a um ambiente de teste do Protheus, o passo mais valioso
agora é rodar as consultas descritas em
`docs/dicionario-de-dados-sx2-sx3-sx9.md` e trazer o export (SX2/SX3/SX9 de
um módulo, ex.: SC7/Compras) para validarmos os relacionamentos contra o que
já está documentado aqui.

## Aviso

Este material é produzido de forma independente, a partir de fontes
públicas. TOTVS, Protheus e nomes de módulos (SIGAPCP, SIGAEST, SIGACOM
etc.) são marcas da TOTVS S.A. Este repositório não tem qualquer vínculo
oficial com a TOTVS.
