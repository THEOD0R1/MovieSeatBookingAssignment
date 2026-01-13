export function isValidPrice(price) {
  return /^\d+$/.test(price) && price > 0;
}
