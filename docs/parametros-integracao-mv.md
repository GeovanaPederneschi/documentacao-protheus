# Parâmetros `MV_` de integração entre módulos

Cada parâmetro abaixo liga/desliga (ou configura) a integração entre dois ou
mais módulos do Protheus. A tabela existe porque, hoje, essa informação está
espalhada em artigos isolados do TDN/Central de Atendimento e em posts de
blog de consultorias — aqui ela fica **agrupada por relação entre módulos**,
o que ninguém publicou de forma centralizada até onde este projeto
verificou (ver [`fontes.md`](fontes.md)).

Legenda de status:
- ✅ **Confirmado** — descrito em fonte oficial TOTVS (TDN ou Central de
  Atendimento).
- ⚠️ **A validar** — citado por fonte secundária (consultoria) ou incompleto
  nas fontes oficiais encontradas; precisa ser confirmado num ambiente de
  teste antes de virar afirmação definitiva.

## PCO (Planejamento e Controle Orçamentário) ↔ RH / Compras / Estoque / Faturamento / Financeiro

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_PCOINTE` | PCO (SIGAPCO) ↔ Compras, Estoque, Faturamento, Financeiro, Folha (RH) | Liga/desliga a integração do PCO com os lançamentos/bloqueios desses módulos. Com `MV_PCOINTE=1`, movimentos desses módulos atualizam automaticamente os saldos previsto, orçado, empenhado e realizado nas tabelas de movimento (`AKD`) e saldo (`AKT`) do orçamento — sem precisar lançar o gasto duas vezes. | ✅ Confirmado |
| `MV_PCOSINC` | PCO ↔ Plano de Contas / Centro de Custo | Sincroniza a conta orçamentária com o plano de contas ou centro de custo. | ✅ Confirmado |
| `MV_PCOSDCT` | PCO | Habilita controle de saldo por contingência. | ✅ Confirmado |

Fonte: Central de Atendimento TOTVS, artigo sobre integração PCO ↔ demais
módulos.

## QIP (Qualidade) ↔ Estoque / PCP

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_QIPEST` | QIP (SIGAQIP) ↔ Estoque (SIGAEST) | Habilita a integração entre inspeção de qualidade e estoque. `0` = sem integração; `1` = pergunta se deseja movimentar ao salvar um laudo geral (tela de Resultado de Inspeção passa a oferecer a movimentação de estoque). | ✅ Confirmado |
| `MV_QIPOPEP` | QIP ↔ PCP | Define a prioridade de dados na relação entre os ambientes QIP e PCP. | ⚠️ A validar |
| `MV_NEGESTR` | Estoque ↔ PCP | Permite incluir itens negativos na estrutura, gerando devoluções no arquivo de movimentos entre Estoque e PCP. | ⚠️ A validar |

## PCP ↔ Estoque/Custos ↔ Compras (núcleo da manufatura)

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_PRAPONT` | PCP (SIGAPCP) | Define a prioridade no apontamento de produção. | ⚠️ A validar |

Além de parâmetros pontuais, o fluxo PCP → Estoque → Compras é, em grande
parte, **integração nativa por processo** (não apenas por parâmetro
isolado): requisições, devoluções e apontamentos de produção geram
movimentos internos de estoque com a Ordem de Produção no campo `D3_OP`,
alimentando o custo médio/padrão; o MRP gera Solicitações de Compra para os
itens comprados, disparando o ciclo com o módulo de Compras. Ver o
detalhamento em
[`fluxo-industria-pcp-estoque-compras-fiscal.md`](fluxo-industria-pcp-estoque-compras-fiscal.md).

## Compras ↔ Financeiro (títulos a pagar)

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_1DUPNAT` | Compras (SIGACOM) ↔ Financeiro (SIGAFIN) | Define a natureza financeira usada na geração do título a pagar a partir do documento de saída/entrada padrão. | ✅ Confirmado |
| `MV_2DUPNAT` | Compras ↔ Financeiro | Mesma função do `MV_1DUPNAT`, mas para o documento de entrada/retorno (ex.: devoluções, casos que usam Fornecedor). | ✅ Confirmado |
| `MV_1DUPPREF` / `MV_2DUPPREF` | Compras ↔ Financeiro | Prefixo do título gerado, associado aos pares acima. | ✅ Confirmado |
| `MV_JALCADA` | Compras (Garantias/Despesas) ↔ Financeiro | Controle de alçada em Compras: exige aprovação antes de gerar o título. | ⚠️ A validar |
| `MV_FINCTAL` | Financeiro | Define a forma de liberação de movimentos; valor `2` = controle por alçada, exigindo o código de aprovação (`E2_CODAPRO`). | ⚠️ A validar |

## Faturamento ↔ Financeiro (duplicatas)

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_1DUPNAT` | Faturamento (SIGAFAT) ↔ Financeiro | Define a origem/natureza financeira usada para gerar a duplicata a partir de Pedidos de Venda padrão. | ✅ Confirmado |
| `MV_2DUPNAT` | Faturamento ↔ Financeiro | Mesma função para Pedidos de Devolução ou que envolvem Fornecedor. | ✅ Confirmado |
| `MV_1DUP` | Faturamento ↔ Financeiro | Determina se a contagem do campo de parcela (`E1_PARCELA`) é por letra ou número, e o limite de parcelas. | ⚠️ A validar |
| `MV_GERABLQ` | Faturamento | Controla geração de bloqueio na liberação do Pedido de Venda (afeta se o pedido segue para faturamento/financeiro). | ⚠️ A validar |
| `MV_JURXFIN` | Faturamento/outros ↔ Financeiro | Ativa integrações adicionais com o Financeiro (módulo com o maior número de integrações do sistema). | ⚠️ A validar |

## Estoque/Produção ↔ Fiscal (SPED Bloco K)

| Parâmetro | Módulos ligados | O que faz | Status |
|---|---|---|---|
| `MV_BLKTP*` (família de parâmetros, um por tipo de produto) | Estoque/PCP ↔ Fiscal (Bloco K / EFD ICMS-IPI) | Define, por tipo de produto, o conteúdo considerado no Bloco K. Pode ser sobreposto pelo ponto de entrada `SPDFIS001`. | ✅ Confirmado |

Apontamentos de produção e movimentos de estoque alimentam os registros
`K200` (estoque escriturado), `K230` (produção) e `K235` (insumos
consumidos) do Bloco K, entregues mensalmente.

## Próximos passos deste documento

- Validar os itens marcados ⚠️ num ambiente de teste (grupo `99`) e mover
  para ✅ com a evidência.
- Adicionar Vendas ↔ Faturamento (liberação de crédito), RH ↔ Financeiro
  (títulos de folha) e Fiscal ↔ Contábil.
- Cruzar cada parâmetro com as tabelas que ele afeta, usando o dicionário de
  dados (`SX9`) do próprio ambiente — ver
  [`dicionario-de-dados-sx2-sx3-sx9.md`](dicionario-de-dados-sx2-sx3-sx9.md).
