export type ValidationResult = {
  ok: boolean;
  message?: string; 
};

export type Validator = (password: string) => ValidationResult;
