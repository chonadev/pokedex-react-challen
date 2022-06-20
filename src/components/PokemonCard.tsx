import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Pokemon } from '../types/Pokemon.interface';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

interface PokemonProps {
	pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonProps) => {
	const navigate = useNavigate();

	if (!pokemon.id) {
		return null;
	}

	const handleClickCard = () => {
		navigate(`/detail/${pokemon.id}`);
	};

	return (
		<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			<Box shadow='md' borderWidth='1px' borderRadius='md' onClick={handleClickCard}>
				<Image width='100%' src={pokemon.sprites.front_default} fallback={<Loading />} />
				<Text textAlign='center' fontSize='md'>
					{`${pokemon.id}`.padStart(4, '0')}
				</Text>
				<Text textAlign='center' fontSize='lg' px='4' py='2' textTransform='capitalize'>
					{pokemon.name}
				</Text>
			</Box>
		</motion.div>
	);
};

export default PokemonCard;
