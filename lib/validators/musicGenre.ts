import { normalize } from "./normalize";
import { Validator } from "./types";

const GENRES = [
  "samba",
  "forro",
  "bossa nova",
  "bossa",
  "mpb",
  "sertanejo",
  "axé",
  "funk",
  "choro",
  "pagode",
  "forró",
];

export const musicGenre: Validator = (input) => {
  const n = normalize(input);
  const found = GENRES.some((g) => n.includes(g));
  return found
    ? { valid: true }
    : { valid: false, message: "Só ouve Kpop ne? Por isso que nao sabe nada sobre o Brasil." };
};
