import React, { MouseEvent, MouseEventHandler } from 'react'
import { Button, Center, SimpleGrid } from '@chakra-ui/react'
import { usePokemonPaginated } from '../hooks/usePokemonsPaginated';
import CardPokemon from './CardPokemon';
import Loading from './Loading';
import { Pokemon } from '../types/Pokemon.interface';

const GridPokemons = () => {
  
  const { pokemons, isLoading, loadMore } = usePokemonPaginated();

  if (isLoading){
    return <Loading/>
  }

  return (
    <>
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