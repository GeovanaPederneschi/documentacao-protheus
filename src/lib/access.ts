// Paywall simples, sem backend: o código de acesso é comparado por hash
// (SHA-256) direto no navegador. Não é criptograficamente à prova de
// engenharia reversa (é tudo client-side), mas cumpre o objetivo de um MVP
// sem login/assinatura: quem pagou recebe o código (ex.: na página de
// obrigado do Stripe Payment Link / Gumroad) e destrava o conteúdo.
//
// Para trocar o código: rode
//   node scripts/gerar-hash-codigo.mjs "SEU-NOVO-CODIGO"
// e cole o resultado abaixo.
const ACCESS_CODE_HASH =
  "ef863ad5cb83a37eba5b36e6b2ea529362e975f9d0f9b8a0741e3eef131e84c7";

const STORAGE_KEY = "protheus-docs-unlocked";

async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text.trim());
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function tryUnlock(code: string): Promise<boolean> {
  const hash = await sha256Hex(code);
  const ok = hash === ACCESS_CODE_HASH;
  if (ok) {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage indisponível (modo privado etc.) — desbloqueio vale
      // só para esta sessão, via estado em memória no AccessContext.
    }
  }
  return ok;
}

export function isUnlockedFromStorage(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function lock(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nada a fazer
  }
}
