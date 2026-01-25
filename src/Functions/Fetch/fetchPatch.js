export async function fetchPatch(url, data) {
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
