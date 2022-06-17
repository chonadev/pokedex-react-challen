import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AppRouter } from './router/AppRouter';
import theme from './theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<HashRouter>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<AppRouter />
		</ChakraProvider>
	</HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
