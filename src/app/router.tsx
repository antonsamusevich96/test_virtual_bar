import React, { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from '../components/layout/layout'
import { COCKTAIL_CODES } from '../types'
import NotFoundPage from '../pages/notFoundPage/notFoundPage'

const CocktailPage = lazy(() => import('../pages/cocktailPage/cocktailPage'))

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={COCKTAIL_CODES.MARGARITA} />} />
          {Object
            .values(COCKTAIL_CODES)
            .map((el) => (
              <Route key={el} path={el} element={<CocktailPage />} />
            ))
          }
        </Route>
        <Route path={'*'} element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
