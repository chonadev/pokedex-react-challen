import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
	return (
		<Center h='auto'>
			<Spinner />
		</Center>
	);
};

export default Loading;
