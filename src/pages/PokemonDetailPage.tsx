import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Badge,
	Button,
	Center,
	Container,
	Divider,
	Heading,
	Image,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { Pokemon } from '../types/Pokemon.interface';
import { motion } from 'framer-motion';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Loading from '../components/Loading';
import { apiGetPokemonByIdOrName } from '../utils/httpClient';
import StatPokemon from '../components/StatPokemon';
import AbilitiePokemon from '../components/AbilitiePokemon';
import NotFoundPokemon from '../components/NotFoundPokemon';

export const PokemonDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [pokeDetail, setPokeDetail] = useState<Pokemon>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const toast = useToast();

	const basicBoxStyles = {
		filter: 'drop-shadow(0.9rem 0.9rem 2rem yellow)',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	};

	const handleClickBack = () => {
		navigate(-1);
	};

	function showToast() {
		toast({
			title: '404',
			description: 'Not Found Pokemon.',
			status: 'warning',
			duration: 4000,
			isClosable: true,
		});
	}

	useEffect(() => {
		setIsLoading(true);
		if (id) {
			const fetchData = async () => {
				const data = await apiGetPokemonByIdOrName(id).catch(() => {
					setIsLoading(false);
					showToast();
				});
				setPokeDetail(data);
				setIsLoading(false);
			};

			fetchData();
		}
	}, [id]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<VStack>
			<Container py={3}>
				<Button leftIcon={<ArrowBackIcon />} size='lg' variant='ghost' onClick={handleClickBack} />
				<Heading as='h2' textAlign='center' py={3} textTransform='capitalize'>
					{pokeDetail?.name}
				</Heading>
				<Text fontSize='medium' textAlign='center'>
					{`${pokeDetail?.id}`.padStart(3, '0')}
				</Text>

				<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Center>
						<Image
							sx={basicBoxStyles}
							boxSize={[300, null, 400]}
							src={pokeDetail?.sprites.front_default}
							fallback={<NotFoundPokemon />}
						/>
					</Center>
				</motion.div>

				<Stack direction='row' justifyContent='center'>
					{pokeDetail?.types?.map(type => (
						<Badge key={type.type?.name} ml='1' fontSize='0.8em' colorScheme='green'>
							{type.type?.name}
						</Badge>
					))}
				</Stack>
			</Container>
			<Divider />
			<Container>
				<Center>
					<Tabs colorScheme='gray' variant='solid-rounded' isLazy>
						<TabList>
							<Tab> Stats </Tab>
							<Tab> Abilities </Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								{pokeDetail?.stats &&
									pokeDetail.stats.map(item => <StatPokemon key={item.stat?.name} stat={item} />)}
							</TabPanel>
							<TabPanel>
								{pokeDetail?.abilities?.map(item => (
									<AbilitiePokemon key={item.ability?.name} abilitie={item} />
								))}
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Center>
			</Container>
		</VStack>
	);
};
