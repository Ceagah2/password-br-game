import { Validator } from "./types";

export const initialPasswordNumbers: Validator = (input) => {
  const matches = input.match(/\d/g) ?? [];
  if (matches.length >= 2) return { valid: true };
  return {
    valid: false,
    message: "A senha precisa conter pelo menos 2 números.",
  };
};
