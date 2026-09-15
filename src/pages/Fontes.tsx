import { useSeo } from "../lib/seo";

interface Source {
  title: string;
  url: string;
}

const OFICIAIS: Source[] = [
  { title: "Central de Atendimento TOTVS — SIGAQIP, parametrizações para integrar OP/apontamento (MV_QIPEST)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021385511" },
  { title: "Central de Atendimento TOTVS — SIGAPCO, conceito e principais parâmetros e tabelas do PCO", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017496452" },
  { title: "Central de Atendimento TOTVS — SIGAPCO, como realizar a integração entre os módulos do Protheus com o PCO", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/19496129058455" },
  { title: "TDN — PCOM12045, Integração com o módulo Financeiro (MV_1DUPNAT, MV_2DUPNAT)", url: "https://tdn.totvs.com/pages/releaseview.action?pageId=6085174" },
  { title: "TDN — Integração Financeira e Contábil, Linha Microsiga Protheus", url: "https://tdn.totvs.com/pages/releaseview.action?pageId=243634428" },
  { title: "Central de Atendimento TOTVS — SIGAFAT, configuração da natureza financeira no Pedido de Vendas (MV_1DUPNAT, MV_2DUPNAT)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037385894" },
  { title: "Central de Atendimento TOTVS — SIGAEST, Bloco K — conceito e configurações mínimas (MV_BLKTP*, SPDFIS001)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/4421126537879" },
  { title: "TDN — Bloco K: informações gerais sobre o bloco (registros K200, K230, K235)", url: "https://tdn.totvs.com/pages/viewpage.action?pageId=259560649" },
  { title: "Central de Atendimento TOTVS — RH GPE, parâmetros utilizados para geração de títulos (MV_BTITFOL, MV_BTITADT, MV_BTITFER)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/8206344253975" },
  { title: "Central de Atendimento TOTVS — RH GPE, como integrar títulos do Gestão de Pessoal com o Financeiro", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037639133" },
  { title: "TDN — Lançamento Contábil Automático (CTBA102 - SIGACTB) — MV_PRELAN, MV_ALTLCTO, MV_CONTSB", url: "https://tdn.totvs.com.br/pages/releaseview.action?pageId=342313859" },
  { title: "Central de Atendimento TOTVS — SIGACTB, MV_CTBFLAG, marcação de flags na contabilização", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000600247" },
  { title: "Central de Atendimento TOTVS — SIGACTB CTBA105, integração contábil, controle de transação (MV_TTS)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402890049559" },
  { title: "Central de Atendimento TOTVS — SIGAFAT, vínculo das tabelas desde o orçamento de venda até o título a receber", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/20759367519895" },
  { title: "TDN — Análise de Crédito de Pedido de Venda (MATA450 - SIGAFAT)", url: "https://tdn.totvs.com/pages/releaseview.action?pageId=366649441" },
  { title: "TDN — Liberação Automática dos Pedidos de Venda (MATA440 - SIGAFAT)", url: "https://tdn.totvs.com/pages/releaseview.action?pageId=366649056" },
  { title: "Central de Atendimento TOTVS — SIGAFAT, não pedir nova liberação de crédito em liberações seguintes (MV_AVALCRD)", url: "https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016176611" },
];

const SECUNDARIAS: Source[] = [
  { title: "Triade Intelligence — PCP no TOTVS Protheus (fluxo PCP → Estoque → Compras → Fiscal)", url: "https://www.triade.inf.br/expertise/pcp.html" },
  { title: "Triade Intelligence — PCO Orçamentário no TOTVS Protheus", url: "https://www.triade.inf.br/expertise/pco.html" },
  { title: "Mastersiga Consultoria — Principais parâmetros do módulo PCO", url: "https://mastersiga.tomticket.com/kb/compras/principais-parametros-do-modulo-pco-planejamento-e-controle-orcamentario" },
  { title: "Mastersiga Consultoria — Funcionalidade do parâmetro MV_GERABLQ na Liberação do Pedido de Venda", url: "https://mastersiga.tomticket.com/kb/microsiga-protheus/-cross-segmento-sigafat-protheus-funcionalidade-do-parametro-mvgerablq-na-liberacao-do-pedido-de-venda" },
];

const REFERENCIA: Source[] = [
  { title: "Medium (fabricio) — Dicionário de dados Protheus: metadados e dados do banco de dados", url: "https://medium.com/@fabricioereche/dicionario-de-dados-protheus-c28187f091a0" },
  { title: "Medium (fabricio) — SX2, tabelas do sistema", url: "https://medium.com/@fabricioereche/sx2-tabelas-do-sistema-86061b5066e9" },
  { title: "ProtheusAdvpl — SX2, SX3 e SIX no Protheus", url: "https://protheusadvpl.com.br/sx2-sx3-six-protheus/" },
  { title: "ProtheusAdvpl — Principais tabelas do Protheus (glossário de prefixos)", url: "https://protheusadvpl.com.br/principais-tabelas-do-protheus/" },
  { title: "FBS Consultoria — Tabelas Financeiro Protheus (SE1, SE2, SE5, SF1, SF2)", url: "https://www.fbsolutions.com.br/erp-totvs-protheus/tabelas-financeiro-protheus/" },
];

function SourceGroup({ title, items }: { title: string; items: Source[] }) {
  return (
    <>
      <h2>{title}</h2>
      <ul className="sources-list">
        {items.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Fontes() {
  useSeo(
    "Fontes",
    "Todas as fontes oficiais e secundárias usadas para documentar a integração entre módulos do ERP TOTVS Protheus neste site, com link direto para cada artigo.",
  );

  return (
    <article>
      <h1>Fontes</h1>
      <p className="lead">
        Rastreabilidade completa: toda afirmação técnica publicada aqui é
        acompanhada de fonte. Nenhuma envolve acesso a código-fonte
        proprietário compilado da TOTVS — apenas documentação pública (TDN,
        Central de Atendimento) e, quando marcado, material secundário
        usado como ponto de partida a ser validado.
      </p>

      <SourceGroup title="Oficiais (TDN / Central de Atendimento TOTVS)" items={OFICIAIS} />
      <SourceGroup title="Secundárias (consultorias — ponto de partida, marcadas ⚠️ até validação)" items={SECUNDARIAS} />
      <SourceGroup title="Referência geral sobre dicionário de dados e tabelas" items={REFERENCIA} />

      <h2>Regras de atualização</h2>
      <ul>
        <li>Toda nova fonte usada em qualquer página é adicionada aqui, com URL completa.</li>
        <li>
          Uma afirmação marcada ⚠️ nas páginas de parâmetros só vira ✅ com
          fonte oficial (TDN/Central de Atendimento) ou evidência de teste
          em ambiente próprio (grupo <code>99</code>).
        </li>
      </ul>
    </article>
  );
}
