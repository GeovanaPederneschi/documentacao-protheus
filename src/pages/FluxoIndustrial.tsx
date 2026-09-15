import { useSeo } from "../lib/seo";
import { Locked } from "../components/Locked";

export function FluxoIndustrial() {
  useSeo(
    "Integração PCP, Estoque, Compras e Fiscal no Protheus",
    "Fluxo completo de integração entre os módulos PCP, Estoque, Compras e Fiscal (Bloco K) do ERP TOTVS Protheus: tabelas, campos de vínculo e parâmetros MV_, com fontes oficiais.",
  );

  return (
    <article>
      <h1>PCP → Estoque → Compras → Fiscal (fluxo industrial)</h1>
      <p className="lead">
        Como um apontamento de produção se propaga pelo sistema inteiro —
        não apenas o que cada parâmetro faz isoladamente.
      </p>

      <figure>
        <img
          src="/assets/fluxo-industrial.svg"
          alt="Diagrama do fluxo industrial do Protheus mostrando a integração entre Pedido de Venda, PCP, Estoque, Compras, Financeiro e o SPED Fiscal Bloco K"
        />
        <figcaption>Venda → PCP → Estoque → Compras → Financeiro → Fiscal (Bloco K)</figcaption>
      </figure>

      <Locked
        preview={
          <p>
            <strong>Plano Mestre de Produção (PCP)</strong> é alimentado
            pela carteira de pedidos de Vendas. Isso conecta demanda
            comercial à programação da fábrica — o primeiro elo de uma
            cadeia com mais cinco etapas documentadas abaixo, cada uma com
            a tabela, o campo de vínculo e o parâmetro <code>MV_</code>{" "}
            envolvido.
          </p>
        }
      >
        <h2>Passo a passo</h2>
        <ol>
          <li>
            <strong>Ordem de Produção (OP)</strong> gera dois tipos de
            evento no Estoque: requisição de insumos e apontamento de
            produção. Ambos criam movimentos internos na tabela{" "}
            <code>SD3</code>, sempre carregando a OP de origem no campo{" "}
            <code>D3_OP</code>. É esse vínculo que permite calcular o custo
            médio/padrão do item produzido.
          </li>
          <li>
            <strong>MRP</strong> explode a estrutura do produto (BOM) e,
            para os itens comprados, gera <strong>Solicitação de Compra</strong>{" "}
            automaticamente — o gatilho que liga PCP a Compras sem
            intervenção manual.
          </li>
          <li>
            <strong>Compras</strong> transforma a solicitação em cotação e
            Pedido de Compra; ao ser faturado pelo fornecedor, gera novo
            movimento de estoque e, no Financeiro, um título a pagar cuja
            natureza é definida por <code>MV_1DUPNAT</code>/
            <code>MV_2DUPNAT</code>.
          </li>
          <li>
            <strong>Fiscal (Bloco K)</strong>: os mesmos movimentos de
            estoque/produção alimentam os registros obrigatórios do SPED
            Fiscal — <code>K200</code> (estoque escriturado),{" "}
            <code>K230</code> (produção) e <code>K235</code> (insumos
            consumidos) — controlados por tipo de produto via a família{" "}
            <code>MV_BLKTP*</code>. Obrigação mensal, para indústrias e
            equiparadas.
          </li>
          <li>
            <strong>Vendas → Financeiro</strong>: em paralelo, o Pedido de
            Venda gera a duplicata a receber, também via{" "}
            <code>MV_1DUPNAT</code>/<code>MV_2DUPNAT</code>, fechando o
            ciclo comercial.
          </li>
        </ol>

        <h2>O que falta validar</h2>
        <ul>
          <li>
            Confirmar em ambiente de teste se o campo <code>D3_OP</code> é
            preenchido em 100% dos cenários de requisição/devolução ou só
            nos padrões.
          </li>
          <li>
            Mapear o ponto exato em que <code>MV_QIPEST</code>/
            <code>MV_QIPOPEP</code> (Qualidade) entram nesse fluxo quando a
            empresa usa inspeção de processo antes do apontamento.
          </li>
          <li>
            Detalhar o fluxo de aprovação/alçada (<code>MV_JALCADA</code>,{" "}
            <code>MV_FINCTAL</code>) que pode interromper a geração
            automática do título a pagar.
          </li>
        </ul>
      </Locked>

      <p className="badge-status-legend">
        Fontes: TDN e Central de Atendimento TOTVS (Manufatura, Bloco K);
        Triade Intelligence (fluxo PCP, usado como ponto de partida e
        revalidado contra fonte oficial). Ver página de Fontes.
      </p>
    </article>
  );
}
