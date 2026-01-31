export function isValidMovieName(name) {
  if (!name) return false;
  return /^[a-zA-Z0-9 :' -]+$/.test(name?.trim());
}
