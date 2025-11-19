import { normalize } from "./normalize";
import { Validator } from "./types";

const TREES = [
  "ipe",
  "ipê",
  "jatoba",
  "castanheira",
  "aroeira",
  "paubrasil",
  "peroba",
  "sibipiruna",
];

export const tree: Validator = (input) => {
  const n = normalize(input);
  const found = TREES.some((t) => n.includes(t));
  return found
    ? { valid: true }
    : { valid: false, message: "O nome do pais vem de uma arvore. Se nao souber essa, desista." };
};
