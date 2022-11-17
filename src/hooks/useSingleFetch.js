import { useQuery } from '@tanstack/react-query'
import getRecipes from '../services/getRecipes'

export default function useSingleFetch(foodID) {
    const { data, isLoading, isFetching } = useQuery([`${foodID}`], () => {
        return getRecipes('recipes/' + foodID + "/information?includeNutrition=false")
    }, { refetchOnWindowFocus: false })
    return { data, isLoading, isFetching }
}
