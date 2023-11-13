export function generateId(value) {
  if (!value.length) {
    return 0;
  }

  return Math.max(value.map(({ id }) => id)) + 1;
}
