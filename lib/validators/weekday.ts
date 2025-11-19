import { normalize } from "./normalize";
import { Validator } from "./types";

const WEEKDAYS = [
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
  "sábado",
  "domingo",
];

export const weekday: Validator = (input) => {
  const n = normalize(input);
  const found = WEEKDAYS.some((d) => n.includes(d));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "Nao sabe que dia é hoje? Só o primeiro nome, esquece a feira.",
      };
};
