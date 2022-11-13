import { useQuery } from '@tanstack/react-query'
import getRecipes from '../services/getRecipes'

export default function useSimilarFetchs(foodID) {
    const { data, isLoading } = useQuery([`similar-recipes`], () => {
        return getRecipes('recipes/' + foodID + "/similar?number=4")
    }, { refetchOnWindowFocus: false })

    return { data, isLoading }
}
