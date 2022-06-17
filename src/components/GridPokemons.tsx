import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Select, SimpleGrid } from '@chakra-ui/react'
import { usePokemonPaginated } from '../hooks/usePokemonsPaginated';
import CardPokemon from './CardPokemon';
import Loading from './Loading';
import { Pokemon } from '../types/Pokemon.interface';

const GridPokemons = () => {
  const { pokemons, isLoading, loadMore } = usePokemonPaginated();
  const [filterSelected, setFilterSelected] = useState<string>('lowest');

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionSelectedValue = event.target.value;
    setFilterSelected(optionSelectedValue);
    console.log("option change");
    orderPokemons(optionSelectedValue);
  }

  const orderPokemons = (option: string) => {
    console.log("filter by", option);
    
    if(option.match("lowest")) {
      pokemons.sort((a:Pokemon,b:Pokemon) => a.id - b.id);
    }
    if(option.match("highest")) {
      pokemons.sort((a:Pokemon,b:Pokemon) => b.id - a.id);
    }
    if(option.match("order_A_Z")) {
      pokemons.sort((a:Pokemon,b:Pokemon) => a.name > b.name ? 1 : -1);
    }
    if(option.match("order_Z_A")) {
      pokemons.sort((a:Pokemon,b:Pokemon) => a.name < b.name ? 1 : -1);
    }
  }

  useEffect(() => {
    if(pokemons) {
      setFilterSelected("lowest");
    }
  }, [pokemons])


  if (isLoading){
    return <Loading/>
  }

  return (
    <>
      <Box>
        <Select variant="filled" defaultValue={filterSelected} onChange={handleChangeFilter}>
          <option value='lowest'> order Lowest</option>
          <option value='highest'> order Highest</option>
          <option value='order_A_Z'> order A-Z</option>
          <option value='order_Z_A'> order Z-A</option>
        </Select>
      </Box>

      <SimpleGrid columns={[2, null, 4]} spacing="2" py={6}>
        {pokemons && pokemons.length > 1 && (
          pokemons.map((poke : Pokemon) => (
            <CardPokemon key={poke.id} pokemon={poke} />
          ))
        )}
      </SimpleGrid>

      <Center py={3} onClick={loadMore}>
        <Button> Load more </Button> 
      </Center>
    </>
  )
}

export default GridPokemons