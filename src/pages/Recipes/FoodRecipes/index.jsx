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
import Sort from '../../../components/Sort'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { SortAscending, FunnelSimple, ForkKnife, Recycle } from 'phosphor-react'
import { Helmet } from 'react-helmet'
import { BarLoader } from 'react-spinners';
export default function FoodRecipes() {
    const { plates } = useParams()
    const query = plates.slice((plates.indexOf("=") + 1))
    const requestedQuery = plates.includes("sort")
    const { data, isLoading, isRefetching, refetch, fetchNextPage, isFetchingNextPage } = useFetch({
      queryName: requestedQuery ? `` : query,
      querySort: requestedQuery ? `sort=${query}` : null,
      url: 'recipes/complexSearch?query=',
      TOTAL_RESULTS: 10
    })
    useLocalStorage(data)
    return (
        <main className="pt-20">
          <Helmet>
            <title>Foodinary · Results for Best {query.slice(0, 1).toUpperCase().concat(query.slice(1))} Recipes</title>
            <meta name="Food Recipes" content={"Results for" + query} />
          </Helmet>
          <Dropdown refetch={refetch}>
            <DropdownItem refetch={refetch} title='sort' arr={['popularity', 'healthiness', 'meta-score', 'time', 'random', 'max used ingredients']} icon={ <FunnelSimple className="text-black h-6 w-6" /> }/>
            <DropdownItem refetch={refetch} title='diet' arr={['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian']} icon={ <ForkKnife className="text-black h-6 w-6" /> }/>
            <Sort refetch={refetch} />
          </Dropdown>
          { (isLoading || isRefetching ) && <BarLoader height={4} width="100%" color="rgb(33, 34, 37)" className="top-0 z-50" cssOverride={{ position: "fixed "}}/> }
          <CardWrapper>
              {
                  data?.pages?.flatMap(page =>
                      page?.results?.map(plate =>
                          <Card key={plate.id} title={plate.title} image={plate.image} id={plate.id}>
                            <div className="flex items-center gap-2">
                              <p>{plate.readyInMinutes} Minutes</p>
                              <span className="font-bold">·</span>
                              <TagItem tag={plate.dishTypes[0] ?? plate.diets[0] ?? ''} className="capitalize"/>
                            </div>
                          </Card>
                      ))
              }
          </CardWrapper>
          <Visor fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage}/>

        </main>
    )
}
