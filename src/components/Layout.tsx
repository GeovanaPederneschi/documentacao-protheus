import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAccess } from "../lib/AccessContext";
import { CHECKOUT_URL } from "../lib/config";

const NAV_LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/mapa-modulos", label: "Mapa de Módulos" },
  { to: "/fluxo-comercial", label: "Fluxo Comercial" },
  { to: "/parametros-mv", label: "Parâmetros MV_" },
  { to: "/fluxo-industrial", label: "Fluxo Industrial" },
  { to: "/dicionario-dados", label: "Dicionário de Dados" },
  { to: "/glossario-tabelas", label: "Glossário" },
  { to: "/fontes", label: "Fontes" },
];

export function Layout({ children }: { children: ReactNode }) {
  const { unlocked, lock } = useAccess();

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="wrap site-header-inner">
          <NavLink to="/" className="brand">
            Protheus <span>por Dentro</span>
          </NavLink>
          <nav className="site-nav">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-cta">
            {unlocked ? (
              <button className="btn btn-ghost" onClick={lock}>
                Sair do acesso
              </button>
            ) : (
              <a className="btn btn-primary" href={CHECKOUT_URL} target="_blank" rel="noreferrer">
                Comprar acesso
              </a>
            )}
          </div>
        </div>
      </header>
      <main className="wrap">{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <p>
            Documentação independente sobre o ERP TOTVS Protheus. Não possui
            vínculo oficial com a TOTVS S.A. — nomes de módulos e marcas
            pertencem aos seus respectivos titulares. Toda afirmação técnica
            é acompanhada de fonte (ver <NavLink to="/fontes">Fontes</NavLink>).
          </p>
        </div>
      </footer>
    </div>
  );
}
