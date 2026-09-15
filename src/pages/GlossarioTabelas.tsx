import { useSeo } from "../lib/seo";
import { Locked } from "../components/Locked";

export function GlossarioTabelas() {
  useSeo(
    "Glossário de tabelas do Protheus por prefixo",
    "Referência dos prefixos de tabela do Protheus (SA, SB, SC, SD, SE, SF): o que cada grupo de tabelas guarda no ERP TOTVS Protheus.",
  );

  return (
    <article>
      <h1>Glossário de tabelas por prefixo</h1>
      <p className="lead">
        O Protheus nomeia tabelas por um prefixo de letra (grupo/módulo) +
        um dígito (entidade dentro do grupo). Saber ler esse padrão é o que
        permite entender qualquer fluxo sem decorar caso a caso.
      </p>

      <Locked
        preview={
          <>
            <h2>SA — Cadastros</h2>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr><th>Tabela</th><th>Conteúdo</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>SA1</code></td><td>Clientes</td></tr>
                  <tr><td><code>SA2</code></td><td>Fornecedores</td></tr>
                </tbody>
              </table>
            </div>
          </>
        }
      >
        <div className="table-scroll">
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SA3</code></td><td>Vendedores</td></tr>
              <tr><td><code>SA4</code></td><td>Transportadoras</td></tr>
              <tr><td><code>SA5</code></td><td>Amarração Produto × Fornecedor</td></tr>
              <tr><td><code>SA6</code></td><td>Bancos</td></tr>
              <tr><td><code>SA7</code></td><td>Amarração Produto × Cliente</td></tr>
              <tr><td><code>SA9</code></td><td>Técnicos</td></tr>
            </tbody>
          </table>

          <h2>SB — Estoque (cadastro/saldo)</h2>
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SB1</code></td><td>Cadastro de Produtos (descrição genérica)</td></tr>
              <tr><td><code>SB2</code></td><td>Saldos físico e financeiro por produto/armazém</td></tr>
              <tr><td><code>SB3</code></td><td>Demandas</td></tr>
              <tr><td><code>SB4</code></td><td>Referências de produto</td></tr>
              <tr><td><code>SB5</code></td><td>Dados adicionais do produto</td></tr>
              <tr><td><code>SB6</code></td><td>Saldo em poder de terceiros</td></tr>
              <tr><td><code>SB7</code></td><td>Lançamentos de inventário</td></tr>
              <tr><td><code>SB8</code></td><td>Saldos por lote</td></tr>
              <tr><td><code>SB9</code></td><td>Saldos iniciais</td></tr>
            </tbody>
          </table>

          <h2>SC — Previsões de entrada/saída e pedidos</h2>
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SC1</code></td><td>Solicitação de Compra</td></tr>
              <tr><td><code>SC2</code></td><td>Ordem de Produção</td></tr>
              <tr><td><code>SC3</code></td><td>Contrato de parceria</td></tr>
              <tr><td><code>SC4</code></td><td>Previsão de vendas</td></tr>
              <tr><td><code>SC5</code></td><td>Cabeçalho do Pedido de Venda</td></tr>
              <tr><td><code>SC6</code></td><td>Itens do Pedido de Venda</td></tr>
              <tr><td><code>SC7</code></td><td>Pedido de Compra</td></tr>
              <tr><td><code>SC8</code></td><td>Cotação</td></tr>
              <tr><td><code>SC9</code></td><td>Pedidos de venda liberados</td></tr>
              <tr><td><code>SCJ</code></td><td>Cabeçalho do Orçamento de Venda</td></tr>
              <tr><td><code>SCK</code></td><td>Itens do Orçamento de Venda</td></tr>
            </tbody>
          </table>

          <h2>SD — Movimentações de estoque e faturamento</h2>
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SD1</code></td><td>Itens de Nota Fiscal de Entrada</td></tr>
              <tr><td><code>SD2</code></td><td>Itens de Nota Fiscal de Saída</td></tr>
              <tr><td><code>SD3</code></td><td>Movimento interno de estoque (produção, transferência, ajuste)</td></tr>
            </tbody>
          </table>

          <h2>SE — Financeiro</h2>
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SE1</code></td><td>Contas a Receber</td></tr>
              <tr><td><code>SE2</code></td><td>Contas a Pagar</td></tr>
              <tr><td><code>SE5</code></td><td>Movimentação bancária</td></tr>
            </tbody>
          </table>

          <h2>SF — Fiscal (Notas Fiscais)</h2>
          <table>
            <thead><tr><th>Tabela</th><th>Conteúdo</th></tr></thead>
            <tbody>
              <tr><td><code>SF1</code></td><td>Cabeçalho de Nota Fiscal de Entrada</td></tr>
              <tr><td><code>SF2</code></td><td>Cabeçalho de Nota Fiscal de Saída</td></tr>
            </tbody>
          </table>

          <div className="callout">
            RH, Contabilidade, PCO e módulos verticais usam prefixos próprios
            (<code>AKD</code>, <code>AKT</code> para PCO, por exemplo) e
            serão adicionados aqui conforme forem documentados.
          </div>
        </div>
      </Locked>
    </article>
  );
}
