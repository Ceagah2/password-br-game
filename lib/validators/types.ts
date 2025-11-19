export type ValidationResult = {
  valid: boolean;
  message?: string; 
};

export type Validator = (password: string) => ValidationResult;
