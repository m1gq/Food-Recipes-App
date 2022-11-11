import { useQuery } from '@tanstack/react-query'
import getRecipes from '../services/getRecipes'
import { useSearchParams } from 'react-router-dom'

export default function useIngredientsFetch(ingredients) {
    const [search, setSearch] = useSearchParams()
    const { data, isLoading, isError, isFetching } = useQuery([`ingredients`], () => {
        return getRecipes(`findByIngredients?ingredients=${ingredients.split(' ').join(',')}&number=30&`)
    }, { refetchOnWindowFocus: false, refetchOnMount: false })

    return { data, isLoading, isError, isFetching }
}
