import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PokemonDetailPage } from '../pages/PokemonDetailPage';
import { PokemonSearchPage } from '../pages/PokemonSearchPage';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='search' element={<PokemonSearchPage />} />
				<Route path='detail/:id' element={<PokemonDetailPage />} />
				<Route path='/' element={<Navigate to='/search' />} />
			</Routes>
		</>
	);
};
