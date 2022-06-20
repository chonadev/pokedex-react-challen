import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: false,
	colors: {
		brand: {
			100: '#f7fafc',
			// ...
			900: '#1a202c',
		},
	},
});
