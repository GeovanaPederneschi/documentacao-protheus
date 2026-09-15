import { useSeo } from "../lib/seo";
import { StatusBadge } from "../components/StatusBadge";
import { Locked } from "../components/Locked";

export function ParametrosMV() {
  useSeo(
    "Parâmetros MV_ de integração entre módulos do Protheus",
    "Lista organizada por relação entre módulos dos parâmetros MV_ que controlam a integração no ERP TOTVS Protheus: PCP, Estoque, Compras, Faturamento, Financeiro, RH, Contábil e Fiscal, com fonte oficial de cada um.",
  );

  return (
    <article>
      <h1>Parâmetros MV_ de integração entre módulos do Protheus</h1>
      <p className="lead">
        Cada parâmetro abaixo liga, desliga ou configura a integração entre
        dois ou mais módulos. Organizado por relação entre módulos — o que
        não existe centralizado em nenhum outro lugar até onde este projeto
        verificou.
      </p>

      <p className="badge-status-legend">
        Legenda: <StatusBadge status="ok" /> descrito em fonte oficial TOTVS
        (TDN ou Central de Atendimento) · <StatusBadge status="warn" />{" "}
        citado por fonte secundária ou incompleto, precisa validação em
        ambiente de teste.
      </p>

      <Locked
        preview={
          <>
            <h2>PCO (Planejamento e Controle Orçamentário) ↔ RH / Compras / Estoque / Faturamento / Financeiro</h2>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Parâmetro</th>
                    <th>Módulos ligados</th>
                    <th>O que faz</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>MV_PCOINTE</code></td>
                    <td>PCO ↔ Compras, Estoque, Faturamento, Financeiro, Folha</td>
                    <td>
                      Liga/desliga a integração do PCO com os
                      lançamentos/bloqueios desses módulos. Com valor{" "}
                      <code>1</code>, os movimentos atualizam automaticamente
                      os saldos previsto, orçado, empenhado e realizado do
                      orçamento.
                    </td>
                    <td><StatusBadge status="ok" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        }
      >
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Módulos ligados</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_PCOSINC</code></td>
                <td>PCO ↔ Plano de Contas / Centro de Custo</td>
                <td>Sincroniza a conta orçamentária com o plano de contas ou centro de custo.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_PCOSDCT</code></td>
                <td>PCO</td>
                <td>Habilita controle de saldo por contingência.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
            </tbody>
          </table>

          <h2>QIP (Qualidade) ↔ Estoque / PCP</h2>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Módulos ligados</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_QIPEST</code></td>
                <td>QIP ↔ Estoque</td>
                <td>
                  Habilita a integração entre inspeção de qualidade e
                  estoque. <code>0</code> = sem integração; <code>1</code> =
                  pergunta se deseja movimentar ao salvar um laudo geral.
                </td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_QIPOPEP</code></td>
                <td>QIP ↔ PCP</td>
                <td>Define a prioridade de dados na relação entre os ambientes QIP e PCP.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
              <tr>
                <td><code>MV_NEGESTR</code></td>
                <td>Estoque ↔ PCP</td>
                <td>Permite incluir itens negativos na estrutura, gerando devoluções no arquivo de movimentos.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Compras ↔ Financeiro (títulos a pagar)</h2>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Módulos ligados</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_1DUPNAT</code></td>
                <td>Compras ↔ Financeiro</td>
                <td>Define a natureza financeira usada na geração do título a pagar a partir do documento padrão.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_2DUPNAT</code></td>
                <td>Compras ↔ Financeiro</td>
                <td>Mesma função do <code>MV_1DUPNAT</code>, para documento de entrada/retorno.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_1DUPPREF</code> / <code>MV_2DUPPREF</code></td>
                <td>Compras ↔ Financeiro</td>
                <td>Prefixo do título gerado, associado aos pares acima.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_JALCADA</code></td>
                <td>Compras (Garantias/Despesas) ↔ Financeiro</td>
                <td>Controle de alçada em Compras: exige aprovação antes de gerar o título.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
              <tr>
                <td><code>MV_FINCTAL</code></td>
                <td>Financeiro</td>
                <td>Define a forma de liberação de movimentos; <code>2</code> = controle por alçada.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Faturamento ↔ Financeiro (duplicatas)</h2>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Módulos ligados</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_1DUP</code></td>
                <td>Faturamento ↔ Financeiro</td>
                <td>Determina se a contagem da parcela é por letra ou número, e o limite de parcelas.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
              <tr>
                <td><code>MV_GERABLQ</code></td>
                <td>Faturamento</td>
                <td>Controla geração de bloqueio na liberação do Pedido de Venda.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
              <tr>
                <td><code>MV_JURXFIN</code></td>
                <td>Faturamento/outros ↔ Financeiro</td>
                <td>Ativa integrações adicionais com o Financeiro.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
            </tbody>
          </table>

          <h2>RH (GPE) ↔ Financeiro (títulos de folha)</h2>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Módulos ligados</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_BTITFOL</code></td>
                <td>RH ↔ Financeiro</td>
                <td>Configura o tratamento da integração de título de folha: <code>0</code> não trata, <code>1</code> mensagem, <code>2</code> bloqueio.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_BTITADT</code></td>
                <td>RH ↔ Financeiro</td>
                <td>Mesmo esquema, para títulos de adiantamento.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_BTITFER</code></td>
                <td>RH ↔ Financeiro</td>
                <td>Mesmo esquema, para títulos de férias.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_RATPROV</code></td>
                <td>RH ↔ Financeiro/Contábil</td>
                <td>Permite o rateio de verba salarial entre folha e provisão.</td>
                <td><StatusBadge status="warn" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Contábil (SIGACTB) ↔ demais módulos</h2>
          <p>
            O SIGACTB centraliza a contabilização automática de eventos
            gerados em Compras, Faturamento, Financeiro, Estoque e RH, via
            regras de lançamento configuráveis (<code>CTBA102</code>/
            <code>CTBA080</code>).
          </p>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_PRELAN</code></td>
                <td>Indica se o lançamento contábil é gravado direto ou passa por pré-lançamento.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_ALTLCTO</code></td>
                <td>Permite alterar lançamentos de integração já gerados.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_CONTSB</code></td>
                <td>Se <code>"S"</code>, grava o lançamento mesmo que débito e crédito não fechem.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
              <tr>
                <td><code>MV_CTBFLAG</code></td>
                <td>Define se a marcação de flags de contabilização roda off-line ou on-line.</td>
                <td><StatusBadge status="ok" /></td>
              </tr>
            </tbody>
          </table>

          <h2>Estoque/Produção ↔ Fiscal (SPED Bloco K)</h2>
          <table>
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>O que faz</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>MV_BLKTP*</code></td>
                <td>
                  Define, por tipo de produto, o conteúdo considerado no
                  Bloco K. Pode ser sobreposto pelo ponto de entrada{" "}
                  <code>SPDFIS001</code>.
                </td>
                <td><StatusBadge status="ok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Locked>

      <p className="badge-status-legend">
        Fontes completas com link direto para cada artigo TDN/Central de
        Atendimento: ver página de Fontes.
      </p>
    </article>
  );
}
