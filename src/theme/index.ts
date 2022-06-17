import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: false,
	colors: {
		primary: theme.colors.twitter,
	},
});
