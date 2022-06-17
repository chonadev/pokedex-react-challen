import React from 'react';
import { Switch, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<header>
			<Switch onChange={toggleColorMode}>
				{/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
			</Switch>
		</header>
	);
};
