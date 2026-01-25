export async function fetchDelete(url) {
  return fetch(url, {
    method: "DELETE",
  });
}
