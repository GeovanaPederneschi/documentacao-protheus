import { useEffect } from "react";

const SITE_NAME = "Protheus por Dentro";

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Define <title> e meta description da página atual (SEO básico em SPA). */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} · ${SITE_NAME}`;
    setMeta("description", description);
  }, [title, description]);
}
