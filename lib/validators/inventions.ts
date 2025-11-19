import { normalize } from "./normalize";
import { Validator } from "./types";

const INVENTIONS = [
  "aviao",
  "urnaeletronica",
  "caixadagua",
  "motor",
  "radiotelefonia",
  "corretor",
];

export const invention: Validator = (input) => {
  const n = normalize(input);
  const found = INVENTIONS.some((i) => n.includes(i));
  return found
    ? { valid: true }
    : {
        valid: false,
        message:
          "Essa é a mais dificil. Mas eu confio no seu potencial",
      };
};
