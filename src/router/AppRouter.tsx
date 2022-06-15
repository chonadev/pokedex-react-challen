import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DetailPage } from '../pokemons/pages/DetailPage'
import { SearchPage } from '../pokemons/pages/SearchPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='search' element={<SearchPage />}/>
        <Route path='detail' element={<DetailPage />}/>
        <Route path='/' element={<Navigate to="/search"/>} />
      </Routes>
    </>
  )
}
