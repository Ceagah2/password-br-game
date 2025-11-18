import { PasswordRule } from "@/types/interface";

export function getActiveRule(password: string, rules: PasswordRule[]) {
  for (const rule of rules) {
    const valid = rule.validate(password);
    if (!valid) return rule; // primeira quebrada
  }

  return null; // jogo finalizado
}
