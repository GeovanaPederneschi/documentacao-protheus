# Dicionário de dados: SX2, SX3, SX9

O dicionário de dados do Protheus é metadado do **seu próprio ambiente**
(configuração, não código-fonte proprietário compilado). Por isso dá para
extrair, documentar e publicar sem esbarrar em restrição de licença — é
inclusive informação que já circula publicamente em sites de terceiros.

## As três tabelas-chave

| Tabela | O que contém |
|---|---|
| `SX2` | Mapeamento de arquivos: lista todas as tabelas disponíveis no ambiente, com alias e caminho físico. |
| `SX3` | Dicionário de campos: cada campo de cada tabela, tipo, tamanho, título, `picture`, consulta padrão (`X3_CONSULTA`), etc. |
| `SX9` | Relacionamentos declarados entre tabelas (chave estrangeira lógica do Protheus). |

Essas três tabelas juntas permitem reconstruir, de forma legível:
- a lista de tabelas por módulo (prefixo do alias, ex.: `SC7` = Compras,
  `SD3` = Movimento de Estoque, `SE2` = Contas a Pagar);
- a tradução de campo técnico (`D3_OP`) para descrição de negócio
  ("Ordem de Produção");
- o grafo de relacionamento entre tabelas (o que, na prática, é o mapa de
  integração que este projeto quer publicar).

## Como extrair do seu ambiente de teste

Pré-requisito: ambiente de teste Protheus (grupo `99`, sem custo de
licença), acesso ao Configurador (SIGACFG) ou acesso direto ao banco.

### Opção 1 — via SIGACFG (interface)

1. Acesse **SIGACFG → Base de Dados → Dicionário de Dados**.
2. Para um módulo específico (ex.: Compras), filtre pelas tabelas com
   prefixo do módulo (ex.: `SC7` = Pedido de Compra, `SC1` = Solicitação de
   Compra).
3. Exporte a estrutura de campos (SX3) da tabela — a maioria das versões
   permite exportar para planilha/CSV a partir dessa tela.

### Opção 2 — via consulta direta ao banco (mais completo)

Se você tiver acesso ao banco de dados de teste, uma consulta simples nas
tabelas físicas do dicionário traz tudo de uma vez. Os nomes físicos variam
por versão/SGBD, mas o padrão geral é:

- Tabelas de estrutura: `SX2010`, `SX3010`, `SX9010` (o sufixo numérico é o
  ambiente/empresa; pode variar).

Exporte o resultado como CSV.

### O que trazer para este projeto

- Um export de **SX2 + SX3 + SX9** filtrado por um módulo (ex.: `SC7` -
  Compras), mesmo que parcial.
- Cole o conteúdo aqui na conversa, ou anexe como arquivo (CSV/texto).

## O que será feito com o export

1. Montar a lista de tabelas do módulo, com descrição de negócio.
2. Traduzir os campos técnicos para nomes legíveis.
3. Cruzar os relacionamentos da `SX9` com os parâmetros já documentados em
   [`parametros-integracao-mv.md`](parametros-integracao-mv.md) — por
   exemplo, confirmar que `SC7` (Pedido de Compra) se relaciona com `SE2`
   (Contas a Pagar) exatamente no ponto em que `MV_1DUPNAT` atua.
4. Gerar um diagrama de relacionamento real (não estimado) para o módulo,
   no mesmo formato do fluxo em
   [`fluxo-industria-pcp-estoque-compras-fiscal.md`](fluxo-industria-pcp-estoque-compras-fiscal.md).

## Limite importante

Isso documenta **estrutura de dados e configuração**, não a lógica interna
do código-fonte padrão da TOTVS (que é compilado/RPO e não está acessível).
A lógica de negócio que não está exposta via parâmetro ou relacionamento
declarado só pode ser documentada por **observação de comportamento** no
ambiente de teste (testar o fluxo na prática e registrar o resultado), não
por leitura de código.
