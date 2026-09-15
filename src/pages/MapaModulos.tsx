import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";

export function MapaModulos() {
  useSeo(
    "Mapa de integração entre os módulos do Protheus",
    "Visão geral de como PCP, Estoque, Compras, Faturamento, Financeiro, Contábil, Fiscal e RH se conectam no ERP TOTVS Protheus, com os parâmetros MV_ que ligam cada relação.",
  );

  return (
    <article>
      <h1>Mapa de integração entre os módulos do Protheus</h1>
      <p className="lead">
        Antes de entrar em cada parâmetro isoladamente, vale ver o quadro
        geral: o Protheus não é um monólito nem módulos isolados — é um
        núcleo de dados compartilhado, e cada módulo liga no núcleo (e entre
        si) através de parâmetros de configuração <code>MV_</code>.
      </p>

      <figure>
        <img
          src="/assets/mapa-modulos-protheus.svg"
          alt="Diagrama mostrando os módulos do Protheus (PCP, Estoque, Compras, Faturamento, Financeiro, Contábil, Fiscal, RH, PCO, Qualidade) conectados ao núcleo por parâmetros MV_"
        />
        <figcaption>
          Cada linha representa uma integração real, documentada em detalhe
          nas páginas de parâmetros e fluxos deste site.
        </figcaption>
      </figure>

      <h2>Como ler este mapa</h2>
      <ul>
        <li>
          <strong>PCO ↔ RH/Compras/Estoque/Faturamento/Financeiro</strong> —
          via <code>MV_PCOINTE</code>, o orçamento é atualizado
          automaticamente por qualquer lançamento desses módulos.
        </li>
        <li>
          <strong>Qualidade ↔ Estoque</strong> — via <code>MV_QIPEST</code>,
          um laudo de inspeção pode gerar movimento de estoque direto.
        </li>
        <li>
          <strong>Compras/Faturamento ↔ Financeiro</strong> — via{" "}
          <code>MV_1DUPNAT</code>/<code>MV_2DUPNAT</code>, todo documento de
          compra ou venda sabe qual natureza financeira usar ao gerar o
          título.
        </li>
        <li>
          <strong>Estoque/Produção ↔ Fiscal</strong> — via a família{" "}
          <code>MV_BLKTP*</code>, os movimentos alimentam o Bloco K do SPED
          Fiscal.
        </li>
        <li>
          <strong>RH ↔ Financeiro</strong> — via <code>MV_BTITFOL</code> e
          equivalentes, o cálculo da folha gera título a pagar.
        </li>
      </ul>

      <div className="callout">
        Quer o detalhamento completo de cada parâmetro (o que faz, os
        valores possíveis, e a fonte oficial)?{" "}
        <Link to="/parametros-mv">Ver a tabela completa de parâmetros MV_ →</Link>
      </div>

      <h2>Fluxos completos</h2>
      <p>
        Este mapa mostra a relação entre módulos; os fluxos abaixo mostram o
        caminho real do dado, tabela por tabela:
      </p>
      <div className="card-grid">
        <Link className="card" to="/fluxo-comercial">
          <span className="emoji">🧾</span>
          <h3>Fluxo Comercial</h3>
          <p>Orçamento → Pedido → Faturamento → Título a Receber. Grátis.</p>
        </Link>
        <Link className="card" to="/fluxo-industrial">
          <span className="emoji">🏭</span>
          <h3>Fluxo Industrial</h3>
          <p>PCP → Estoque → Compras → Financeiro → Bloco K. Assinantes.</p>
        </Link>
      </div>

      <p className="badge-status-legend">
        Fonte dos parâmetros citados: TDN e Central de Atendimento TOTVS —
        ver <Link to="/fontes">página de Fontes</Link>.
      </p>
    </article>
  );
}
