export function isValidMovieName(name) {
  return /^[a-zA-Z0-9 :' -]+$/.test(name.trim());
}
