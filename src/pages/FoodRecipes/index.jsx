import { useInfiniteQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import getRecipes from '../../services/getRecipes'
import useFetch from '../../hooks/useFetch'
import CardWrapper from '../../components/CardWrapper'
import Dropdown from '../../components/Dropdown'
import DropdownItem from '../../components/DropdownItem'
import Card from '../../components/Card'
import Visor from '../../components/Visor'

export default function FoodRecipes() {
    const { plates } = useParams()
    const query = plates.slice((plates.indexOf("=") + 1))
    const requestedQuery = !plates.includes("sort")
    const { data, isFetchingNextPage, fetchNextPage, refetch} = useFetch({ queryName: query, queryType: requestedQuery ? "query" : "sort",TOTAL_RESULTS: 10 })
    return (
        <main className="pt-20">
          <Dropdown>
            <DropdownItem refetch={refetch} title='sort' arr={['popularity', 'healthiness', 'meta-score', 'time', 'random', 'max used ingredients']} />
            <DropdownItem refetch={refetch} title='direction' arr={['asc', 'desc']} />
            <DropdownItem refetch={refetch} title='diet' arr={['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian']} />
          </Dropdown>
          <CardWrapper>
              {
                  data?.pages.flatMap(page =>
                      page.results.map(plate =>
                          <Link to={`${plate.id}`} key={plate.id}>
                              <Card key={plate.id} {...plate}/>
                          </Link>
                      ))
              }
          </CardWrapper>
          <Visor fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage}/>
        </main>
    )
}
