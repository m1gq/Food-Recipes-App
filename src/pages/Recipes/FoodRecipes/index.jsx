import { useInfiniteQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import getRecipes from '../../../services/getRecipes'
import useFetch from '../../../hooks/useFetch'
import CardWrapper from '../../../components/CardWrapper'
import Dropdown from '../../../components/Dropdown'
import DropdownItem from '../../../components/DropdownItem'
import Card from '../../../components/Card'
import Visor from '../../../components/Visor'
import ReadyInMin from '../../../components/ReadyInMin'
import TagItem from '../../../components/TagItem'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { Helmet } from 'react-helmet'
import { BarLoader } from 'react-spinners';
export default function FoodRecipes() {
    const { plates } = useParams()
    const query = plates.slice((plates.indexOf("=") + 1))
    const requestedQuery = plates.includes("sort")
    const { data, isFetchingNextPage, fetchNextPage, isLoading, isRefetching, refetch} = useFetch({ queryName: requestedQuery ? "" : query , querySort: requestedQuery ? query : "", TOTAL_RESULTS: 10, url: 'recipes/complexSearch' })
    useLocalStorage(data)
    return (
        <main className="pt-20">
          <Helmet>
            <title>Foodinary · {query.slice(0, 1).toUpperCase().concat(query.slice(1))}</title>
            <meta name="Food Recipes" content={"Results for" + query} />
          </Helmet>
          <Dropdown refetch={refetch}>
            <DropdownItem refetch={refetch} title='sort' arr={['popularity', 'healthiness', 'meta-score', 'time', 'random', 'max used ingredients']} />
            <DropdownItem refetch={refetch} title='direction' arr={['asc', 'desc']} />
            <DropdownItem refetch={refetch} title='diet' arr={['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian']} />
          </Dropdown>
          <CardWrapper>
              {(isLoading || isRefetching ) ? <BarLoader height={4} width="100%" color="rgb(72, 127, 251)" className="top-20 z-30" cssOverride={{ position: "fixed "}}/> :
                  data?.pages.flatMap(page =>
                      page.results.map(plate =>
                          <Link to={`${plate.id}`} key={plate.id}>
                              <Card key={plate.id} title={plate.title} image={plate.image}>
                                <ReadyInMin readyInMinutes={plate.readyInMinutes}/>
                                <span className="font-bold">·</span>
                                <TagItem tag={plate.diets[0] ?? plate.dishTypes[0] ?? "Unknown"}/>
                              </Card>
                          </Link>
                      ))
              }
          </CardWrapper>
          <Visor fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage}/>
        </main>
    )
}
