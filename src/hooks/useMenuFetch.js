import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import throttle from 'just-throttle'
import getMenuItems from '../services/getMenuItems'

export default function useMenuFetch({ queryName, TOTAL_RESULTS }) {
    const navigateTo = useNavigate()

    const { data, isFetchingNextPage, fetchNextPage: fetchNewPage, isError, isLoading, refetch } = useInfiniteQuery([`${queryName}`], ({ pageParam = 0 }) => {
        return getMenuItems(`search?query=${queryName}&offset=${TOTAL_RESULTS * pageParam}` + "&addMenuItemInformation=true")}, {
        refetchOnWindowFocus: false,
        getNextPageParam: ((lastPage, allPages) => {
            const maxPages = lastPage.totalMenuItems / TOTAL_RESULTS
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
