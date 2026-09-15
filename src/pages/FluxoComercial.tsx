import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";

export function FluxoComercial() {
  useSeo(
    "Do orçamento de venda ao título a receber no Protheus",
    "Fluxo oficial de integração comercial no ERP TOTVS Protheus: tabelas SCJ, SC5, SC9, SF2 e SE1, campos de vínculo e parâmetros MV_ de bloqueio de crédito, com fonte oficial TOTVS.",
  );

  return (
    <article>
      <h1>Do orçamento de venda ao título a receber (fluxo comercial)</h1>
      <p className="lead">
        Diferente de muitos fluxos deste sistema, este é descrito por{" "}
        <strong>artigo oficial da TOTVS</strong> tabela por tabela e campo
        por campo — por isso está inteiramente aberto aqui.
      </p>

      <figure>
        <img
          src="/assets/fluxo-comercial.svg"
          alt="Diagrama do fluxo comercial do Protheus: orçamento de venda, pedido, liberação de crédito, nota fiscal e título a receber"
        />
        <figcaption>Orçamento → Pedido → Liberação de crédito → Nota Fiscal → Título a Receber</figcaption>
      </figure>

      <h2>Tabelas e campos de vínculo (fonte oficial)</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Tabelas</th>
              <th>Campo de vínculo</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Orçamento → Pedido de Venda</td>
              <td><code>SCJ</code>/<code>SCK</code> → <code>SC5</code>/<code>SC6</code></td>
              <td>
                <code>CJ_STATUS</code> recebe <code>"B"</code> quando o
                orçamento gera um pedido; <code>CK_NUM</code> recebe{" "}
                <code>CJ_NUM</code>; <code>CK_NUMPV</code> recebe{" "}
                <code>C6_NUM</code>
              </td>
              <td>
                O orçamento não é apagado ao virar pedido — fica marcado e
                referenciado, permitindo rastrear de qual orçamento um
                pedido veio.
              </td>
            </tr>
            <tr>
              <td>Pedido de Venda</td>
              <td><code>SC5</code>/<code>SC6</code></td>
              <td><code>C6_NUM</code> recebe <code>C5_NUM</code></td>
              <td>Cada item do pedido carrega o número do cabeçalho a que pertence.</td>
            </tr>
            <tr>
              <td>Pedido → Faturamento</td>
              <td><code>SC5</code>/<code>SC6</code>/<code>SC9</code> → <code>SF2</code>/<code>SD2</code></td>
              <td>liberação registrada em <code>SC9</code></td>
              <td>O pedido precisa estar liberado antes de virar Nota Fiscal de Saída.</td>
            </tr>
            <tr>
              <td>Faturamento → Título a Receber</td>
              <td><code>SF2</code> → <code>SE1</code></td>
              <td><code>F2_DUPL</code> referencia <code>E1_NUM</code></td>
              <td>A nota fiscal "sabe" qual título de contas a receber ela gerou.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Onde os parâmetros MV_ entram nesse fluxo</h2>
      <ul>
        <li>
          A natureza financeira do título gerado em <code>SE1</code> é
          definida por <code>MV_1DUPNAT</code>/<code>MV_2DUPNAT</code>.
        </li>
        <li>
          Antes da liberação (<code>SC9</code>), o pedido pode ser barrado
          por bloqueio de crédito.
        </li>
        <li>
          <code>MV_GERABLQ</code> controla a geração de bloqueio na própria
          liberação do Pedido de Venda.
        </li>
      </ul>

      <h3>Parâmetros de bloqueio de crédito (Vendas ↔ Faturamento)</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Parâmetro</th>
              <th>O que faz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>MV_BLOQUEI</code></td>
              <td><code>.T.</code> = todo pedido de venda vai para aprovação de crédito antes de liberar; <code>.F.</code> = sem bloqueio.</td>
            </tr>
            <tr>
              <td><code>MV_CREDCLI</code></td>
              <td>Define se o controle de crédito é por loja ou por cliente.</td>
            </tr>
            <tr>
              <td><code>MV_BLOQCRED</code></td>
              <td>Bloqueia por crédito quando já existe bloqueio de estoque.</td>
            </tr>
            <tr>
              <td><code>MV_AVALCRD</code></td>
              <td>Ao alterar um pedido já liberado, reavalia o crédito pelo valor da última liberação.</td>
            </tr>
            <tr>
              <td><code>MV_GERABLQ</code></td>
              <td>Controla a geração de bloqueio na liberação do Pedido de Venda.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        Quer o mesmo nível de detalhe para a manufatura?{" "}
        <Link to="/fluxo-industrial">Ver o fluxo PCP → Estoque → Compras → Fiscal →</Link>
      </div>

      <p className="badge-status-legend">
        Fonte: Central de Atendimento TOTVS — vínculo de tabelas SIGAFAT do
        orçamento até o título a receber; TDN — Análise de Crédito
        (MATA450) e Liberação Automática (MATA440). Ver{" "}
        <Link to="/fontes">página de Fontes</Link>.
      </p>
    </article>
  );
}
