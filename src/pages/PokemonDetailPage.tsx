import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge, Box, Button, Center, Container, Divider, Heading, Image, Progress, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Pokemon } from "../types/Pokemon.interface";
import { get } from "../utils/httpClient";
import { motion } from "framer-motion"
import { ArrowBackIcon } from "@chakra-ui/icons";
import Loading from "../components/Loading";

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokeDetail, setPokeDetail] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const basicBoxStyles = {
    filter: 'drop-shadow(0.9rem 0.9rem 2rem yellow)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }

  const handleClickBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    setIsLoading(true);
    get(`/pokemon/${id}`).then( (data: Pokemon) => {
      setPokeDetail(data);
      setIsLoading(false);
    }).catch( error => {
      console.error(error);
    });
  }, [id])

  if(isLoading) {
    return <Loading />
  }
  
  return (
    <>
        <Container py={3}>
          
          <Button leftIcon={<ArrowBackIcon />} size="lg" variant='ghost' onClick={handleClickBack} />
          <Heading as="h2" textAlign="center" py={3} textTransform="capitalize" > { pokeDetail?.name } </Heading>
          <Text fontSize="medium" textAlign="center"> {`${pokeDetail?.id}`.padStart(3, '0')} </Text>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Center>
              <Image
                sx={basicBoxStyles}
                boxSize={[300,null,400]} 
                src={pokeDetail?.sprites.front_default} 
                fallback={<Loading />} />
            </Center>
          </motion.div>

          <Stack direction="row" justifyContent="center">
            {pokeDetail?.types?.map((type) => <Badge key={type.type?.name} ml='1' fontSize='0.8em' colorScheme='green'>{type.type?.name}</Badge> )}
          </Stack>

        </Container>
        <Divider/>
        <Container py={3}>
          <Center>
            <Tabs colorScheme="gray" variant="solid-rounded" isLazy>
              <TabList>
                <Tab> Stats </Tab>
                <Tab> Abilities </Tab>
                <Tab> Evolutions </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {pokeDetail?.stats && pokeDetail.stats.map( (stat, index) => (
                    <Box key={index} py={1}>
                      {stat.stat?.name} <Progress value={(stat.base_stat && stat.base_stat / 2)} size='xs' />
                    </Box>
                  ))}
                </TabPanel>
                <TabPanel>
                  {pokeDetail?.abilities?.map(item => (
                    <Text key={item.ability?.name} py={1}>{ item.ability?.name }</Text>
                  ))}
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Container> 
    </>
  )
}
