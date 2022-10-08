import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import FoodRecipes from './pages/FoodRecipes'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path="/recipes" element={ <FoodRecipes /> } />
                    <Route path="/:foodID" element={ <Details /> } />
                </Route>
            </Routes>
        </QueryClientProvider>
    )
}

export default App
