import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container, HStack, Text, useToast, VStack } from '@chakra-ui/react';
import { useDebounce } from '../hooks/useDebounce';
import { ColorModeSwitch } from '../components/ColorModeSwich';
import { Pokemon } from '../types/Pokemon.interface';
import { SearchPokemon } from '../components/SearchPokemon';
import GridPokemons from '../components/GridPokemons';
import PokemonCard from '../components/PokemonCard';
import { apiGetPokemonByIdOrName } from '../utils/httpClient';
import { HeaderColored } from '../components/HeaderColored';
import Loading from '../components/Loading';

export const PokemonSearchPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isSearchLoading, setIsSearchLoading] = useState(false);
	const [pokemonFound, setPokemonFound] = useState<Pokemon>();
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const toast = useToast();

	const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const lowercase = ev.currentTarget.value.toLowerCase();
		setSearchTerm(lowercase);
	};

	const handleClickClearSearch = () => {
		setSearchTerm('');
	};

	function showToast() {
		toast({
			title: 'Not found',
			description: 'Not Found Pokemon.',
			status: 'warning',
			duration: 4000,
			isClosable: true,
		});
	}

	useEffect(() => {
		if (debouncedSearchTerm) {
			setIsSearchLoading(true);
			const fetchData = async () => {
				const data = await apiGetPokemonByIdOrName(searchTerm)
					.catch(() => {
						showToast();
					})
					.finally(() => setIsSearchLoading(false));

				setPokemonFound(data);
			};

			fetchData();
		}
	}, [debouncedSearchTerm]);

	return (
		<VStack>
			<Container maxW='container' centerContent>
				<HStack pt={3}>
					<ColorModeSwitch />
				</HStack>

				<HeaderColored>Pokedex</HeaderColored>

				<Text color='gray.500' pb={3}>
					Search your pokemon.
				</Text>

				<HStack>
					<SearchPokemon
						searchTerm={searchTerm}
						handleInputChange={handleInputChange}
						handleClickClearSearch={handleClickClearSearch}
					/>
					{isSearchLoading && <Loading />}
				</HStack>

				{pokemonFound && pokemonFound?.name ? (
					<Container maxW='md' pt={6}>
						<PokemonCard pokemon={pokemonFound} />
					</Container>
				) : (
					<GridPokemons />
				)}
			</Container>
		</VStack>
	);
};
