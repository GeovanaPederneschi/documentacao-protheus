import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";
import { CHECKOUT_URL } from "../lib/config";

export function Home() {
  useSeo(
    "Documentação de integração entre módulos do Protheus",
    "Parâmetros MV_, fluxos completos entre módulos e dicionário de dados do ERP TOTVS Protheus, organizados num só lugar, com fonte oficial em cada afirmação.",
  );

  return (
    <>
      <section className="hero">
        <h1>
          A documentação de integração do Protheus que a TOTVS nunca
          organizou
        </h1>
        <p className="lead">
          Parâmetros <code>MV_</code>, fluxos completos entre módulos e
          dicionário de dados — hoje espalhados em centenas de artigos
          isolados do TDN e posts de blog de consultoria — consolidados aqui
          num mapa só, navegável, com fonte oficial em cada linha.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href={CHECKOUT_URL} target="_blank" rel="noreferrer">
            Comprar acesso completo
          </a>
          <Link className="btn btn-ghost btn-lg" to="/mapa-modulos">
            Ver o mapa de módulos (grátis)
          </Link>
        </div>
      </section>

      <section>
        <img
          src="/assets/mapa-modulos-protheus.svg"
          alt="Mapa de integração entre os módulos do Protheus: PCP, Estoque, Compras, Faturamento, Financeiro, Contábil, Fiscal, RH, PCO e Qualidade"
          className="hero-image"
        />
      </section>

      <section>
        <h2>O que já está mapeado</h2>
        <div className="card-grid">
          <Link className="card" to="/mapa-modulos">
            <span className="emoji">🗺️</span>
            <h3>Mapa de Módulos</h3>
            <p>Visão geral de como PCP, Estoque, Compras, Financeiro, Fiscal, RH e Contábil se conectam. Grátis.</p>
          </Link>
          <Link className="card" to="/fluxo-comercial">
            <span className="emoji">🧾</span>
            <h3>Fluxo Comercial</h3>
            <p>Do orçamento de venda ao título a receber, tabela por tabela, campo por campo. Grátis.</p>
          </Link>
          <Link className="card" to="/parametros-mv">
            <span className="emoji">⚙️</span>
            <h3>Parâmetros MV_</h3>
            <p>Todos os parâmetros de integração organizados por relação entre módulos. Assinantes.</p>
          </Link>
          <Link className="card" to="/fluxo-industrial">
            <span className="emoji">🏭</span>
            <h3>Fluxo Industrial</h3>
            <p>PCP → Estoque → Compras → Financeiro → Bloco K, de ponta a ponta. Assinantes.</p>
          </Link>
          <Link className="card" to="/dicionario-dados">
            <span className="emoji">🗂️</span>
            <h3>Dicionário de Dados</h3>
            <p>Como extrair e ler SX2/SX3/SX9 do seu próprio ambiente de teste. Assinantes.</p>
          </Link>
          <Link className="card" to="/glossario-tabelas">
            <span className="emoji">📚</span>
            <h3>Glossário de Tabelas</h3>
            <p>Prefixos SA, SB, SC, SD, SE, SF e o que cada tabela guarda. Assinantes.</p>
          </Link>
        </div>
      </section>

      <section>
        <h2>Por que isso vale a pena</h2>
        <p>
          A documentação oficial da TOTVS é extensa, mas fragmentada: cada
          parâmetro tem um artigo isolado, sem visão do fluxo completo entre
          módulos. Consultorias publicam posts de blog sobre o assunto como
          isca de marketing, mas ninguém organiza isso num lugar central,
          navegável e mantido. Este projeto documenta apenas o que é
          público e configurável no seu próprio ambiente — parâmetros,
          relacionamento de tabelas, fluxo observado — nunca o código-fonte
          proprietário compilado da TOTVS.
        </p>
        <p>
          <Link to="/fontes">Toda fonte usada está listada aqui →</Link>
        </p>
      </section>
    </>
  );
}
