import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
const Layout = lazy(() => import('./pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Details = lazy(() => import('./pages/Details'))
const Recipes = lazy(() => import('./pages/Recipes'))
const FoodRecipes = lazy(() => import('./pages/Recipes/FoodRecipes'))
const Menu = lazy(() => import('./pages/Menu'))
const MenuRecipes = lazy(() => import('./pages/Menu/MenuRecipes'))
const Ingredients = lazy(() => import('./pages/Ingredients'))
const IngredientsRecipes = lazy(() => import('./pages/Ingredients/IngredientsRecipes'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BarLoader } from 'react-spinners'

function App() {
    const client = new QueryClient()
    useScrollToTop()
    return (
        <QueryClientProvider client={client}>
            <Suspense fallback={<BarLoader height={4} width="100%" color="rgb(33, 34, 37)" className="top-0 z-30" cssOverride={{ position: "fixed"}}/>}>
              <Routes>
                  <Route path="/" element={ <Layout /> }>
                      <Route path="*" element={ <ErrorPage /> } />
                      <Route path=":foodID" element={ <Details /> } />
                      <Route index element={ <Home /> } />
                      <Route exact path="/recipes" element={ <Outlet /> } >
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
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
