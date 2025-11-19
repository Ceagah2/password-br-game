import { normalize } from "./normalize";
import { Validator } from "./types";

const MEMES = [
  "nazare",
  "receba",
  "inshalá",
  "cavalo",
  "amostradinho",
  "calabreso",
  "bentocake",
  "mopaz",
  "pfizer",
  "querocafe",
  "serjao",
  "sanduicheiche",
  "paranossaalegria",

];

export const meme: Validator = (input) => {
  const n = normalize(input);
  const found = MEMES.some((m) => n.includes(m));
  return found
    ? { valid: true }
    : { valid: false, message: "Dica: se tiver mais de uma palavra, escreve tudo junto. Vai que cola?" };
};
