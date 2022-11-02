import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import throttle from 'just-throttle'
import getRecipes from '../services/getRecipes'

export default function useFetch({ queryName, queryType, TOTAL_RESULTS }) {
    const navigateTo = useNavigate()
    const [search, ] = useSearchParams()

    const url = {
        sort: `sort=${queryName}`,
        query: `query=${queryName}`
    }

    const { data, isFetchingNextPage, fetchNextPage: fetchNewPage, isError, isLoading, refetch } = useInfiniteQuery([`${queryName}`], ({ pageParam = 0 }) => {
        return getRecipes("complexSearch?" + url[queryType] + `&sort=${search.get('sort')}&diet=${search.get('diet')}&sortDirection=${search.get('direction')}&number=${TOTAL_RESULTS}&offset=${TOTAL_RESULTS * pageParam}` + "&addRecipeInformation=true&limitLicense=true")}, {
        refetchOnWindowFocus: false,
        getNextPageParam: ((lastPage, allPages) => {
            const maxPages = lastPage.totalResults / TOTAL_RESULTS
            const nextPage = allPages.length
            return nextPage <= maxPages ? nextPage : undefined
        }),
        cancelRefetch: false
    })

    const fetchNextPage = throttle(() => {
        fetchNewPage()
    }, 1000)

    if (isError) {
        navigateTo('/errorpage')
    }
    return { data, isFetchingNextPage, fetchNextPage, isLoading, refetch }
}
