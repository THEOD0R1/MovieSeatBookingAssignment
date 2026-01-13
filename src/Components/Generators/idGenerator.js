export const idGenerator = function (prefix = "") {
  return prefix + Date.now().toString(36) + Math.random().toString(36);
};
