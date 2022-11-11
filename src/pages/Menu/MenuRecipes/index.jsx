import { useInfiniteQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import useFetch from '../../../hooks/useFetch'
import useLocalStorage from '../../../hooks/useLocalStorage'
import CardWrapper from '../../../components/CardWrapper'
import Dropdown from '../../../components/Dropdown'
import DropdownItem from '../../../components/DropdownItem'
import Card from '../../../components/Card'
import Visor from '../../../components/Visor'
import TagItem from '../../../components/TagItem'

export default function MenuRecipes() {
    const { menuQuery } = useParams()
    const { data, isFetchingNextPage, fetchNextPage, refetch} = useFetch({ queryName: menuQuery, TOTAL_RESULTS: 10, url: 'food/menuItems/search' })
    useLocalStorage(data)
    return (
        <main className="pt-20">
          <CardWrapper>
              {
                  data?.pages.flatMap(page =>
                      page.menuItems.map(plate =>
                          <Card key={plate.id} title={plate.title} image={plate.image}>
                              <div className="flex items-center gap-2">
                              <p>{plate.restaurantChain}</p>
                              <span className="font-bold">·</span>
                              <TagItem tag={plate.breadcrumbs[0] ?? "Unclassified"}/>
                            </div>
                          </Card>
                      ))
              }
          </CardWrapper>
          <Visor fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage}/>
        </main>
    )
}
