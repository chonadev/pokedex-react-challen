import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';

interface propsType {
	children: React.ReactNode;
}

export const HeaderColored = ({ children }: propsType) => {
	return (
		<HStack spacing={6}>
			<Heading
				color='gray.500'
				py={3}
				bgGradient='linear(to-l, #7928CA, #FF0080)'
				bgClip='text'
				fontSize='6xl'
				fontWeight='extrabold'
			>
				{children}
			</Heading>
		</HStack>
	);
};
