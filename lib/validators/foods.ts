import { normalize } from "./normalize";
import { Validator } from "./types";

const FOODS = [
  "feijoada",
  "acaraje",
  "moqueca",
  "baião",
  "tapioca",
  "acarajé",
  "açai",
  "acai",
  "pamonha",
  "vatapa",
  "farofa",
  "brigadeiro",
  "coxinha",
  "vatapá",
  "tutu",
];

export const food: Validator = (input) => {
  const n = normalize(input);
  const found = FOODS.some((f) => n.includes(f));
  return found
    ? { valid: true }
    : { valid: false, message: "Nao vale comida processada. Pode ser aquele que voce come errado tambem" };
};
