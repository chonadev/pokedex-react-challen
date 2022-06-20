const BASE_API_URL = process.env.REACT_APP_POKEAPI_URL || '';

export const API_URL_POKEMON = `${BASE_API_URL}/pokemon`;

export async function apiGetPokemon() {
	const resp = await fetch(API_URL_POKEMON);
	return await resp.json();
}

export async function apiGetPokemonByIdOrName(idOrName: string) {
	const resp = await fetch(`${BASE_API_URL}/pokemon/${idOrName}`);
	return await resp.json();
}
