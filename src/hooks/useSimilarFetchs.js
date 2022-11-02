import { useQuery } from '@tanstack/react-query'
import getRecipes from '../services/getRecipes'

export default function useSimilarFetchs(foodID) {
    const { data, isLoading, isError, refetch } = useQuery([`similar-recipes`], () => {
        return getRecipes(foodID + "/similar?number=2")
    }, { refetchOnWindowFocus: false })

    return { data, isLoading, isError }
}
