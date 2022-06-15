import { Box, Button, ButtonGroup, Container, Flex, Heading, HStack, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react"

export const SearchPage = () => {
  
  return (
    <VStack>
      <Container maxW="container.sm" centerContent>
        <Heading color="gray.500" py={6}> Pokedex </Heading>
        <Text color="gray.500" pb={6}>Search for a pokemon by name.</Text>

        <ButtonGroup gap="2" paddingY={6}>
          <Input placeholder="type the name" variant="filled"/>
          <Button 
            colorScheme="blackAlpha" 
            rightIcon={
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 16C0.447715 16 0 16.4477 0 17C0 17.5523 0.447715 18 1 18L1 16ZM4.33333 18L14.3333 22.7735L14.3333 11.2265L4.33333 16V18ZM1 18H5.33333V16L1 16L1 18Z" fill="#F5F5F5"/>
              <path d="M11 5L1 0.226497L1 11.7735L11 7L11 5ZM14.3333 7C14.8856 7 15.3333 6.55229 15.3333 6C15.3333 5.44772 14.8856 5 14.3333 5L14.3333 7ZM10 7L14.3333 7L14.3333 5L10 5L10 7Z" fill="#F5F5F5"/>
            </svg>
            }> Filtrar </Button>
        </ButtonGroup>

        <SimpleGrid columns={4} spacing={3} pt={6}>
          <Box  bg="gray.300">
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"></Image>
            <Text></Text>
          </Box>
          <Box bg="gray.300">
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png"></Image>
          </Box>
          <Box bg="gray.300">
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png"></Image>
          </Box>
          <Box bg="gray.300">
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png"></Image>
          </Box>
        </SimpleGrid>
      </Container>    
    </VStack>
  )
}
