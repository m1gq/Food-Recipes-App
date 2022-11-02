import { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import FoodRecipes from './pages/FoodRecipes'
import Recipes from './pages/Recipes'
import ErrorPage from './pages/ErrorPage'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
    const client = new QueryClient()
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
                </Route>

            </Routes>
        </QueryClientProvider>
    )
}

export default App
