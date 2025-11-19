import { Validator } from "./types";

export const slangValidator: Validator = (password) => {
  const SLANGS = [
      "massa", 
      "top", 
      "suave", 
      "brabo", 
      "bolado", 
      "de boa",
      "parça",
      "parceiro",
      "meu bom",
      ];

  const found = SLANGS.some((giria) =>
    password.toLowerCase().includes(giria.toLowerCase())
  );

  if (!found) {
    return {
      ok: false,
      message: "Faltou uma gíria brasileira pra dar aquele tempero.",
    };
  }

  return { ok: true };
};
