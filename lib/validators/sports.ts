import { normalize } from "./normalize";
import { Validator } from "./types";

const SPORTS = [
  "futebol",
  "volei",
  "voleibol",
  "basquete",
  "atletismo",
  "natação",
  "nado",
  "judô",
  "judo",
  "jiu-jitsu",
  "capoeira",
  "futsal",
  "handebol",
  "boxe",
  "karatê",
  "mma",
];

export const sports: Validator = (input) => {
  const n = normalize(input);
  const found = SPORTS.some((s) => n.includes(s));
  return found
    ? { valid: true }
    : { valid: false, message: "Nunca viu as olimpiadas ?" };
};
