import { Image } from '@chakra-ui/react';
import React from 'react';

const NotFoundPokemon = () => {
	return (
		<div>
			<Image src={process.env.PUBLIC_URL + '/img/404.png'}></Image>
		</div>
	);
};

export default NotFoundPokemon;
