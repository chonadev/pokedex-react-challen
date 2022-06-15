import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import { AppRouter } from './router/AppRouter';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
