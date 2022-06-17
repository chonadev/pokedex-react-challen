import { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon.interface';
import { PokemonPaginated } from '../types/PokemonPaginated.interface';

export function usePokemonPaginated() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [actualUrl, setActualUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
	const [nextUrl, setNextUrl] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);

	const getPokemonData = async (res: any) => {
		res.map(async (item: any) => {
			const pokemonData = await fetch(item.url).then(resp => resp.json());
			setPokemons((prevPokemons: Pokemon[]) => prevPokemons.concat(pokemonData));
			return item;
		});
	};

	useEffect(() => {
		setIsLoading(true);
		const getPokemon = () =>
			fetch(actualUrl)
				.then(resp => resp.json())
				.then((resp: PokemonPaginated) => {
					setNextUrl(resp.next);
					getPokemonData(resp.results);
					setIsLoading(false);
				});
		getPokemon();
	}, [actualUrl]);

	const loadMore = () => {
		setIsLoading(true);
		setActualUrl(nextUrl);
	};

	return { pokemons, loadMore, isLoading, setPokemons };
}
