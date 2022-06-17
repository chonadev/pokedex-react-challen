import React, { ChangeEvent, useEffect, useState } from "react"
import { Container, Heading, HStack, Text, useToast, VStack } from "@chakra-ui/react"
import { get } from "../utils/httpClient"
import { useDebounce } from "../hooks/useDebounce"
import { ColorModeSwitch } from "../components/ColorModeSwich"
import { Pokemon } from "../types/Pokemon.interface"
import CardPokemon from "../components/CardPokemon"
import { SearchPokemon } from "../components/SearchPokemon"
import GridPokemons from "../components/GridPokemons"
import Loading from "../components/Loading"

export const PokemonSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const toast = useToast()

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const lowercase = ev.currentTarget.value.toLowerCase();
    setSearchTerm(lowercase);
  }

  const handleClickAFilterBtn = () => {
    setSearchTerm("");
  }

  const showError = () => toast({
      title: 'Not found',
      description: "No se encontro pokemon.",
      status: 'warning',
      duration: 5000,
      isClosable: true,
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      get(`/pokemon/${searchTerm}`).then( (data: Pokemon) => {
        setIsLoading(false);
        setPokemon(data);
        
      }).catch(() => {
        setIsLoading(false);
        showError();
      });
    } else {
      setPokemon(undefined);
      setIsLoading(false);
    }
  }, [debouncedSearchTerm])

  if(isLoading) {
    return <Loading />
  }

  return (
    <VStack>
      <Container maxW="container.sm" centerContent>
        
        <HStack direction='row' w="container">
          <Heading color="gray.500" py={6} bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'>
            Pokedex
          </Heading>
          <ColorModeSwitch />
        </HStack>
        
        <Text color="gray.500" pb={6}>Search for a pokemon by name.</Text>

        <SearchPokemon 
          searchTerm={searchTerm} 
          handleInputChange={handleInputChange} 
          handleClickAFilterBtn={handleClickAFilterBtn} />

        { pokemon ? 
          (pokemon && <Container maxW="md" pt={6} ><CardPokemon pokemon={pokemon} /></Container>)
          :
          (<GridPokemons/>)
        }
      </Container>    
    </VStack>
  )
}
