import { useCallback, useState } from "react";

/** Shared across Refex sites for consistent UX & analytics */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type UseEmailValidationOptions = {
  required?: boolean;
};

export function useEmailValidation(options: UseEmailValidationOptions = {}) {
  const { required = true } = options;
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(
    (value: string) => {
      const v = String(value ?? "").trim();
      if (!v) {
        if (required) {
          setError("Email is required");
          return false;
        }
        setError(null);
        return true;
      }
      if (!EMAIL_REGEX.test(v)) {
        setError("Enter a valid email address");
        return false;
      }
      setError(null);
      return true;
    },
    [required],
  );

  return { error, setError, validate };
}
