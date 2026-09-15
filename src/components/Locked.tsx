import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAccess } from "../lib/AccessContext";
import { CHECKOUT_URL } from "../lib/config";

interface LockedProps {
  /** Prévia sempre visível, mesmo sem acesso — o "isca" que convence a comprar. */
  preview?: ReactNode;
  children: ReactNode;
}

export function Locked({ preview, children }: LockedProps) {
  const { unlocked } = useAccess();

  if (unlocked) return <>{children}</>;

  return (
    <>
      {preview}
      <div className="paywall">
        <p className="paywall-title">🔒 Conteúdo completo para assinantes</p>
        <p>
          O restante desta página — tabelas completas, todos os parâmetros e
          o detalhamento campo a campo — é liberado com o código de acesso
          enviado após a compra.
        </p>
        <div className="paywall-actions">
          <a className="btn btn-primary" href={CHECKOUT_URL} target="_blank" rel="noreferrer">
            Comprar acesso
          </a>
          <Link className="btn btn-ghost" to="/desbloquear">
            Já comprei, tenho o código
          </Link>
        </div>
      </div>
    </>
  );
}
