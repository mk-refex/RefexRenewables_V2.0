import type { NumberType } from "libphonenumber-js";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useCallback, useState } from "react";

/** Number types we do not accept for a “mobile” field */
const DISALLOWED_MOBILE_TYPES: NumberType[] = [
  "FIXED_LINE",
  "TOLL_FREE",
  "PREMIUM_RATE",
  "SHARED_COST",
  "PAGER",
  "VOICEMAIL",
  "UAN",
];

function isDisallowedMobileType(t: NumberType): boolean {
  if (t === undefined) return false;
  return DISALLOWED_MOBILE_TYPES.includes(t);
}

/**
 * Valid E.164 mobile-style number (any country): not a known landline / toll / premium (per lib metadata).
 */
export function isValidContactMobileE164(value: string): boolean {
  const raw = String(value ?? "").trim();
  if (!raw) return false;
  const normalized = raw.startsWith("+")
    ? raw
    : `+${raw.replace(/\D/g, "")}`;
  const parsed = parsePhoneNumberFromString(normalized);
  if (!parsed?.isValid()) return false;
  const t = parsed.getType();
  if (isDisallowedMobileType(t)) return false;
  return true;
}

export type UsePhoneValidationOptions = {
  required?: boolean;
};

export function usePhoneValidation(options: UsePhoneValidationOptions = {}) {
  const { required = true } = options;
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback(
    (value: string) => {
      const v = String(value ?? "").trim();
      if (!v) {
        if (required) {
          setError("Enter a valid mobile number");
          return false;
        }
        setError(null);
        return true;
      }
      if (!isValidContactMobileE164(v)) {
        setError("Enter a valid mobile number");
        return false;
      }
      setError(null);
      return true;
    },
    [required],
  );

  return { error, setError, validate };
}
