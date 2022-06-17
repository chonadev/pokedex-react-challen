const BASE_API_URL = "https://pokeapi.co/api/v2";

export async function get( path: string) {
  return fetch(`${BASE_API_URL}${path}`).then( resp => resp.json());
}
