import { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import Recipes from './pages/Recipes'
import FoodRecipes from './pages/Recipes/FoodRecipes'
import Menu from './pages/Menu'
import MenuRecipes from './pages/Menu/MenuRecipes'
import Ingredients from './pages/Ingredients'
import IngredientsRecipes from './pages/Ingredients/IngredientsRecipes'
import ErrorPage from './pages/ErrorPage'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
    const client = new QueryClient()
    useScrollToTop()
    return (
        <QueryClientProvider client={client}>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route path="*" element={ <ErrorPage /> } />
                    <Route index element={ <Home /> } />
                    <Route exact path="/recipes" element={ <Outlet /> } >
                        <Route path=":foodID" element={ <Details /> } />
                        <Route index element={ <Recipes /> } />
                        <Route exact path="s/:plates" element={ <Outlet /> } >
                            <Route index element={ <FoodRecipes /> } />
                            <Route exact path=":foodID" element={ <Details /> } />
                        </Route>
                    </Route>
                    <Route exact path="/menu" element={ <Outlet /> } >
                        <Route index element={ <Menu /> } />
                        <Route exact path="s/:menuQuery" element={ <Outlet /> } >
                          <Route index element={ <MenuRecipes /> } />
                          <Route exact path=":foodID" element={ <Details /> } />
                        </Route>
                    </Route>
                    <Route exact path="/ingredients" element={ <Outlet /> } >
                        <Route index element={ <Ingredients /> } />
                        <Route exact path="s/:ingredientQuery" element={ <Outlet /> } >
                          <Route index element={ <IngredientsRecipes /> } />
                          <Route exact path=":foodID" element={ <Details /> } />
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </QueryClientProvider>
    )
}

export default App
