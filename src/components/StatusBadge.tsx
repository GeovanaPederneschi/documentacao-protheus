export function StatusBadge({ status }: { status: "ok" | "warn" }) {
  if (status === "ok") {
    return <span className="status-ok">✅ Confirmado</span>;
  }
  return <span className="status-warn">⚠️ A validar</span>;
}
