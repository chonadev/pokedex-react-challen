import { Box, Progress, Text } from '@chakra-ui/react';
import React from 'react';
import { Stat } from '../types/Pokemon.interface';

interface statPropType {
	stat: Stat;
}

const StatPokemon = ({ stat }: statPropType) => {
	const name = stat.stat ? stat.stat?.name : '';
	return (
		<Box py={1}>
			<Text textTransform='uppercase'>{name}</Text>
			<Progress value={stat.base_stat && stat.base_stat / 2} size='xs' />
		</Box>
	);
};

export default StatPokemon;
