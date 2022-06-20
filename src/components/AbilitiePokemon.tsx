import { Text } from '@chakra-ui/react';
import React from 'react';
import { Ability } from '../types/Pokemon.interface';

interface AbilityPropType {
	abilitie: Ability;
}

const AbilitiePokemon = ({ abilitie }: AbilityPropType) => {
	return (
		<Text py={1} textTransform='uppercase'>
			{abilitie.ability?.name}
		</Text>
	);
};

export default AbilitiePokemon;
