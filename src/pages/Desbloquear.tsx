import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSeo } from "../lib/seo";
import { useAccess } from "../lib/AccessContext";
import { CHECKOUT_URL } from "../lib/config";

export function Desbloquear() {
  useSeo(
    "Desbloquear conteúdo completo",
    "Insira o código de acesso recebido após a compra para liberar o conteúdo completo do site.",
  );

  const { unlock, checking, unlocked } = useAccess();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);
    const ok = await unlock(code);
    if (ok) {
      navigate("/parametros-mv");
    } else {
      setError(true);
    }
  }

  if (unlocked) {
    return (
      <article>
        <h1>Acesso liberado ✅</h1>
        <p>Todo o conteúdo do site já está desbloqueado neste navegador.</p>
      </article>
    );
  }

  return (
    <article>
      <h1>Já comprei — desbloquear conteúdo</h1>
      <p className="lead">
        Cole abaixo o código de acesso enviado na página de confirmação da
        compra (ou por e-mail). O desbloqueio vale para este navegador.
      </p>

      <form onSubmit={handleSubmit} className="unlock-form">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Cole seu código de acesso"
          autoFocus
        />
        <button className="btn btn-primary" type="submit" disabled={checking || !code}>
          {checking ? "Verificando…" : "Desbloquear"}
        </button>
      </form>

      {error && (
        <p className="unlock-error">
          Código inválido. Confira se copiou certinho, sem espaços extras.
        </p>
      )}

      <p>
        Ainda não comprou?{" "}
        <a href={CHECKOUT_URL} target="_blank" rel="noreferrer">
          Comprar acesso →
        </a>
      </p>
    </article>
  );
}
