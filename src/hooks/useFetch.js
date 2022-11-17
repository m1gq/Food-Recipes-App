import { useCallback } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import throttle from 'just-throttle'
import getRecipes from '../services/getRecipes'

export default function useFetch({ queryName = "", querySort = null, TOTAL_RESULTS, url}) {
    const navigateTo = useNavigate()
    const [search, ] = useSearchParams()
    const { data, isFetchingNextPage, fetchNextPage: fetchNewPage, isError, isLoading, isRefetching, refetch } = useInfiniteQuery([`${queryName || querySort}`], ({ pageParam = 0 }) => {
        return getRecipes(url + `${queryName}&number=${TOTAL_RESULTS}&offset=${TOTAL_RESULTS * pageParam}` + `&sort=${querySort || search.get('sort')}&sortDirection=${search.get('sortDirection')}&diet=${search.get('diet')}` + "&addRecipeInformation=true&limitLicense=true&addMenuItemInformation=true")}, {
        refetchOnWindowFocus: false,
        getNextPageParam: ((lastPage, allPages) => {
            const maxPages = lastPage.totalResults / TOTAL_RESULTS
            const nextPage = allPages.length
            return nextPage <= maxPages ? nextPage : undefined
        }),
        cancelRefetch: false,
    })

    const fetchNextPage = useCallback(throttle(() => {
        fetchNewPage()
    }, 1000), [])

    if (isError) {
        navigateTo('/errorpage')
    }
    return { data, isFetchingNextPage, fetchNextPage, isLoading, isRefetching, refetch }
}
