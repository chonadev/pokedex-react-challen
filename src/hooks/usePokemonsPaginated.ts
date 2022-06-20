import { API_URL_POKEMON } from './../utils/httpClient';
import { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon.interface';
import { PokemonPaginated } from '../types/PokemonPaginated.interface';

export function usePokemonPaginated() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [actualUrl, setActualUrl] = useState<string>(API_URL_POKEMON);
	const [nextUrl, setNextUrl] = useState<string>('');
	const [previousUrl, setPreviousUrl] = useState<string>('');

	const getPokemonData = async (res: any) => {
		res.map(async (item: any) => {
			const pokemonData = await fetch(item.url).then(resp => resp.json());
			setPokemons((prevPokemons: Pokemon[]) => prevPokemons.concat(pokemonData));
			return item;
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			setPokemons([]);
			const json: PokemonPaginated = await fetch(actualUrl).then(res => res.json());
			getPokemonData(json.results);
			if (json.next) {
				setNextUrl(json.next);
			}
			if (json.previous) {
				setPreviousUrl(json.previous);
			}
		};

		fetchData();
	}, [actualUrl]);

	const loadNext = () => {
		setActualUrl(nextUrl);
	};

	const loadPrev = () => {
		setActualUrl(previousUrl);
	};

	return { pokemons, loadPrev, loadNext };
}
