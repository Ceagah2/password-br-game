export interface PasswordRule {
  id: number; // ordem da regra
  title: string; // "Fauna Brasileira"
  description: string; // texto narrativo
  instruction: string; // texto instrutivo curto
  validate: (password: string) => boolean; // lógica
  errorMessage: string; // msg curta de erro
}
