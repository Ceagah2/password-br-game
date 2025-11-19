import { normalize } from "./normalize";
import { Validator } from "./types";

const SLANGS = [
  "massa",
  "suave",
  "top",
  "bomdemais",
  "eita",
  "caraca",
  "véi",
  "monstro",
  "bolado",
  "deboa",
  "táok",
  "táok",
  "brother",
  "mano",
  "fiao",
  "parça",
  "craca",
  "zica",
  "irado",
  "daora",
  "fera",
  "mó",
  "tenso",
  "chave",
  "bicho",
  "fera",
  "liso",
  "sussa",
  "vish",
  "flw",
  "blz",
  "valeu",
];

export const slang: Validator = (input) => {
  const n = normalize(input);
  const found = SLANGS.some((s) => n.includes(s));
  return found
    ? { valid: true }
    : { valid: false, message: "Como voce se comunica com seus amigos?" };
};
