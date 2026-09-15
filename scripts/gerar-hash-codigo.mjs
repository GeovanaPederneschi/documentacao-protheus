// Gera o hash SHA-256 de um novo código de acesso, para colar em
// src/lib/access.ts (constante ACCESS_CODE_HASH).
//
// Uso: node scripts/gerar-hash-codigo.mjs "SEU-NOVO-CODIGO"
import { createHash } from "node:crypto";

const code = process.argv[2];

if (!code) {
  console.error('Uso: node scripts/gerar-hash-codigo.mjs "SEU-NOVO-CODIGO"');
  process.exit(1);
}

console.log(createHash("sha256").update(code).digest("hex"));
