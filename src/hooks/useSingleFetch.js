import { useQuery } from '@tanstack/react-query'
import getRecipes from '../services/getRecipes'

export default function useSingleFetch(foodID) {
    const { data, isLoading, isError, isFetching } = useQuery([`single-recipe`], () => {
        return getRecipes(foodID + "/information?includeNutrition=false")
    }, { refetchOnWindowFocus: false, refetchOnMount: false })

    return { data, isLoading, isError, isFetching }
}
