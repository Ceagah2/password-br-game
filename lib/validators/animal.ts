import { normalize } from "./normalize";
import { Validator } from "./types";

const ANIMALS = [
  "capivara",
  "tamandua",
  "onca",
  "arara",
  "jabuti",
  "paca",
  "boto",
  "mico",
  "tamandua",
  "tatu",
  "jutai",
  "sucuri",
  "sabiá",
  "galo",
  "ema",
  "mico",
  "tartaruga",
  "garoupa",
  "lobo",
  "beija-flor",
  "garca",
  "arara",
];

export const animal: Validator = (input) => {
  const n = normalize(input);
  const found = ANIMALS.some((a) => n.includes(a));
  return found
    ? { valid: true }
    : {
        valid: false,
        message: "Pode ser aqueles que tem na nota.",
      };
};
