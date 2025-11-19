import { normalize } from "./normalize";
import { Validator } from "./types";

const SHOWS = [
  "casteloratimbum",
  "xuxa",
  "globinho",
  "cocorico",
  "balaomagico",
  "bananasdepijama",
  "sabadoanimado",
  "disneycruj",
  "bandkids",
  "catalendas",
  "ilharatimbum",
];

export const tvShow: Validator = (input) => {
  const n = normalize(input);
  const found = SHOWS.some((s) => n.includes(s));
  return found
    ? { valid: true }
    : { valid: false, message: "Se tiver mais de uma palavra, escreve tudo junto. Vai que cola?" };
};
