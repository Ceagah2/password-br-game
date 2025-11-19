import { Validator } from "./types";

export const initialPasswordLetters: Validator = (input) => {
  if (input.length >= 8) return { valid: true };
  return {
    valid: false,
    message: "A senha precisa ter ao menos 8 caracteres.",
  };
};
