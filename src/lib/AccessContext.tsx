import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { isUnlockedFromStorage, lock as clearUnlock, tryUnlock } from "./access";

interface AccessState {
  unlocked: boolean;
  checking: boolean;
  unlock: (code: string) => Promise<boolean>;
  lock: () => void;
}

const AccessContext = createContext<AccessState | null>(null);

export function AccessProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setUnlocked(isUnlockedFromStorage());
  }, []);

  const value = useMemo<AccessState>(
    () => ({
      unlocked,
      checking,
      unlock: async (code: string) => {
        setChecking(true);
        try {
          const ok = await tryUnlock(code);
          if (ok) setUnlocked(true);
          return ok;
        } finally {
          setChecking(false);
        }
      },
      lock: () => {
        clearUnlock();
        setUnlocked(false);
      },
    }),
    [unlocked, checking],
  );

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

export function useAccess(): AccessState {
  const ctx = useContext(AccessContext);
  if (!ctx) throw new Error("useAccess precisa estar dentro de <AccessProvider>");
  return ctx;
}
