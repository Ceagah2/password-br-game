import { normalize } from "./normalize";
import { Validator } from "./types";

const EMOTIONS = [
  "feliz",
  "triste",
  "raiva",
  "medo",
  "nojo",
  "surpreso",
  "alegre",
  "ansioso",
  "calmo",
  "melancolico",
  "satisfeito",
  "entediado",
];

export const emotion: Validator = (input) => {
  const n = normalize(input);
  const found = EMOTIONS.some((e) => n.includes(e));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "Coloque uma emoção (ex: feliz, triste, surpreso).",
      };
};
