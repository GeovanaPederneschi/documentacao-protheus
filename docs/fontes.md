# Fontes

Registro de rastreabilidade das fontes usadas para montar os documentos
deste repositório. Todas são públicas; nenhuma envolve acesso a código-fonte
proprietário compilado da TOTVS.

## Oficiais (TDN / Central de Atendimento TOTVS)

- Central de Atendimento TOTVS — Manufatura, SIGAQIP, parametrizações para
  integrar OP/apontamento (`MV_QIPEST`).
  https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021385511
- Central de Atendimento TOTVS — Cross Segmento Backoffice, SIGAPCO,
  conceito e principais parâmetros e tabelas do PCO (`MV_PCOINTE`,
  `MV_PCOSINC`, `MV_PCOSDCT`).
  https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017496452
- Central de Atendimento TOTVS — Cross Segmento Backoffice, SIGAPCO, como
  realizar a integração entre os módulos do Protheus com o PCO.
  https://centraldeatendimento.totvs.com/hc/pt-br/articles/19496129058455
- TDN — PCOM12045, Integração com o módulo Financeiro (`MV_1DUPNAT`,
  `MV_2DUPNAT`, `MV_1DUPPREF`, `MV_2DUPPREF`).
  https://tdn.totvs.com/pages/releaseview.action?pageId=6085174
- TDN — Integração Financeira e Contábil, Linha Microsiga Protheus.
  https://tdn.totvs.com/pages/releaseview.action?pageId=243634428
- Central de Atendimento TOTVS — Cross Segmentos Backoffice, SIGAFAT,
  configuração da natureza financeira no Pedido de Vendas (`MV_1DUPNAT`,
  `MV_2DUPNAT`).
  https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037385894
- Central de Atendimento TOTVS — Cross Segmento Backoffice, SIGAEST, Bloco K
  — conceito e configurações mínimas (`MV_BLKTP*`, ponto de entrada
  `SPDFIS001`).
  https://centraldeatendimento.totvs.com/hc/pt-br/articles/4421126537879
- TDN — Bloco K: informações gerais sobre o bloco (registros K200, K230,
  K235).
  https://tdn.totvs.com/pages/viewpage.action?pageId=259560649

## Secundárias (consultorias — usadas como ponto de partida, marcadas ⚠️ até validação)

- Triade Intelligence — PCP no TOTVS Protheus (fluxo PCP → Estoque →
  Compras → Fiscal). https://www.triade.inf.br/expertise/pco.html e
  https://www.triade.inf.br/expertise/pcp.html
- Mastersiga Consultoria — Principais parâmetros do módulo PCO.
  https://mastersiga.tomticket.com/kb/compras/principais-parametros-do-modulo-pco-planejamento-e-controle-orcamentario
- Mastersiga Consultoria — Funcionalidade do parâmetro `MV_GERABLQ` na
  liberação do Pedido de Venda.
  https://mastersiga.tomticket.com/kb/microsiga-protheus/-cross-segmento-sigafat-protheus-funcionalidade-do-parametro-mvgerablq-na-liberacao-do-pedido-de-venda

## Referência geral sobre dicionário de dados (SX2/SX3/SX9)

- Medium (fabricio) — Dicionário de dados Protheus: metadados e dados do
  banco de dados. https://medium.com/@fabricioereche/dicionario-de-dados-protheus-c28187f091a0
- Medium (fabricio) — SX2, tabelas do sistema.
  https://medium.com/@fabricioereche/sx2-tabelas-do-sistema-86061b5066e9
- ProtheusAdvpl — SX2, SX3 e SIX no Protheus.
  https://protheusadvpl.com.br/sx2-sx3-six-protheus/

## Regras de atualização deste arquivo

- Toda nova fonte usada em qualquer documento deve ser adicionada aqui, com
  URL completa.
- Uma afirmação marcada ⚠️ em `parametros-integracao-mv.md` só vira ✅ com
  fonte oficial (TDN/Central de Atendimento) ou evidência de teste em
  ambiente próprio (grupo `99`), registrada aqui.
