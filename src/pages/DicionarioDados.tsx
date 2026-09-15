import { useSeo } from "../lib/seo";
import { Locked } from "../components/Locked";

export function DicionarioDados() {
  useSeo(
    "Dicionário de dados do Protheus: SX2, SX3 e SX9",
    "Guia prático para extrair e organizar o dicionário de dados do Protheus (tabelas SX2, SX3, SX9) do seu próprio ambiente de teste, sem depender de código-fonte proprietário.",
  );

  return (
    <article>
      <h1>Dicionário de dados do Protheus: SX2, SX3, SX9</h1>
      <p className="lead">
        O dicionário de dados é metadado do seu próprio ambiente — não é
        código-fonte proprietário. Por isso dá para extrair, documentar e
        publicar sem esbarrar em restrição de licença.
      </p>

      <Locked
        preview={
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Tabela</th>
                  <th>O que contém</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>SX2</code></td>
                  <td>Mapeamento de arquivos: lista todas as tabelas disponíveis no ambiente, com alias e caminho físico.</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      >
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Tabela</th>
                <th>O que contém</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>SX3</code></td>
                <td>Dicionário de campos: tipo, tamanho, título, <code>picture</code>, consulta padrão etc.</td>
              </tr>
              <tr>
                <td><code>SX9</code></td>
                <td>Relacionamentos declarados entre tabelas (chave estrangeira lógica do Protheus).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Como extrair do seu ambiente de teste</h2>
        <p>
          Pré-requisito: ambiente de teste Protheus (grupo <code>99</code>,
          sem custo de licença), acesso ao Configurador (SIGACFG) ou acesso
          direto ao banco.
        </p>

        <h3>Opção 1 — via SIGACFG (interface)</h3>
        <ol>
          <li>Acesse SIGACFG → Base de Dados → Dicionário de Dados.</li>
          <li>
            Para um módulo específico (ex.: Compras), filtre pelas tabelas
            com prefixo do módulo (ex.: <code>SC7</code> = Pedido de Compra).
          </li>
          <li>Exporte a estrutura de campos (SX3) para planilha/CSV.</li>
        </ol>

        <h3>Opção 2 — via consulta direta ao banco (mais completo)</h3>
        <p>
          Os nomes físicos variam por versão/SGBD, mas o padrão geral é
          tabelas de estrutura como <code>SX2010</code>, <code>SX3010</code>,{" "}
          <code>SX9010</code> (o sufixo numérico é o ambiente/empresa).
          Exporte o resultado como CSV.
        </p>

        <h2>O que fazemos com o export</h2>
        <ol>
          <li>Montamos a lista de tabelas do módulo, com descrição de negócio.</li>
          <li>Traduzimos os campos técnicos para nomes legíveis.</li>
          <li>
            Cruzamos os relacionamentos da SX9 com os parâmetros já
            documentados — por exemplo, confirmar que SC7 se relaciona com
            SE2 exatamente no ponto em que <code>MV_1DUPNAT</code> atua.
          </li>
          <li>Geramos um diagrama de relacionamento real (não estimado) para o módulo.</li>
        </ol>

        <div className="callout">
          Isso documenta estrutura de dados e configuração, não a lógica
          interna do código-fonte padrão da TOTVS (compilado/RPO,
          inacessível). Lógica de negócio não exposta via parâmetro ou
          relacionamento declarado só pode ser documentada por observação de
          comportamento em ambiente de teste.
        </div>
      </Locked>
    </article>
  );
}
