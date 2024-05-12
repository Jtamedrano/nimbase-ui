export const isFalsyString = (value?: string): boolean => {
  return value === null || value === undefined || value.trim() === ""
}
