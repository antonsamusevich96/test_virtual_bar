export const getKeyPairs = <T extends object>(
  obj: T,
  keyPrefix1: string,
  keyPrefix2: string,
): [T[keyof T], T[keyof T], string][] => {
  return Object.entries(obj)
    .filter(([key, value]) => key.startsWith(keyPrefix1) && value != null)
    .map(([key, value1]) => {
      const index = key.replace(keyPrefix1, "");
      const value2 = obj[`${keyPrefix2}${index}` as keyof T];
      return [value1, value2, index];
    });
};
