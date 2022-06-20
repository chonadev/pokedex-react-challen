import React, { useState } from 'react';
import { Button, Select, SimpleGrid, HStack, Container } from '@chakra-ui/react';
import { usePokemonPaginated } from '../hooks/usePokemonsPaginated';
import { Pokemon } from '../types/Pokemon.interface';
import PokemonCard from './PokemonCard';

const GridPokemons = () => {
	const { pokemons, loadPrev, loadNext } = usePokemonPaginated();
	const [filterSelected, setFilterSelected] = useState<string>('lowest');

	const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const optionSelectedValue = event.target.value;
		setFilterSelected(optionSelectedValue);
		orderPokemons(optionSelectedValue);
	};

	const orderPokemons = (option: string) => {
		if (option.match('lowest')) {
			pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
		}
		if (option.match('highest')) {
			pokemons.sort((a: Pokemon, b: Pokemon) => b.id - a.id);
		}
		if (option.match('order_A_Z')) {
			pokemons.sort((a: Pokemon, b: Pokemon) => (a.name > b.name ? 1 : -1));
		}
		if (option.match('order_Z_A')) {
			pokemons.sort((a: Pokemon, b: Pokemon) => (a.name < b.name ? 1 : -1));
		}
	};

	return (
		<>
			<Container>
				<Select variant='filled' defaultValue={filterSelected} onChange={handleChangeFilter}>
					<option value='lowest'> order Lowest</option>
					<option value='highest'> order Highest</option>
					<option value='order_A_Z'> order A-Z</option>
					<option value='order_Z_A'> order Z-A</option>
				</Select>
			</Container>

			<HStack py={3} columnGap='3'>
				<Button onClick={loadPrev}> previus </Button>
				<Button onClick={loadNext}> next </Button>
			</HStack>

			<SimpleGrid columns={[2, null, 4]} spacing='2' py={6}>
				{pokemons && pokemons.map((poke: Pokemon) => <PokemonCard key={poke.id} pokemon={poke} />)}
			</SimpleGrid>
		</>
	);
};

export default GridPokemons;
