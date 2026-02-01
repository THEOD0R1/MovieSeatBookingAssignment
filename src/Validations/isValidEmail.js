export function isValidEmail(str) {
  const regEx = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  return regEx.test(str);
}
