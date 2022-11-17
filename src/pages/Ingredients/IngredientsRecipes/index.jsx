import Card from '../../../components/Card'
import Visor from '../../../components/Visor'
import TagItem from '../../../components/TagItem'
import CardWrapper from '../../../components/CardWrapper'
import DropdownItem from '../../../components/DropdownItem'
import Dropdown from '../../../components/Dropdown'
import Sort from '../../../components/Sort'
import useFetch from '../../../hooks/useFetch'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { Link, useParams } from 'react-router-dom'
import { FunnelSimple } from 'phosphor-react'
import { BarLoader } from 'react-spinners'
import { Helmet } from 'react-helmet'
export default function IngredientsRecipes() {
  const { ingredientQuery } = useParams()
  const { data, isLoading, refetch, isRefetching } = useFetch({
    queryName: ingredientQuery,
    url: 'recipes/findByIngredients?ingredients=',
    TOTAL_RESULTS: 30 })
    console.log();
  useLocalStorage(data)

  return (
    <main className="pt-20">
      <Helmet>
        <title>Foodinary · Results for Best {ingredientQuery?.slice(0, 1).toUpperCase().concat(ingredientQuery?.slice(1))} Recipes</title>
        <meta name="Ingredients" content={"Results for" + ingredientQuery} />
        </Helmet>
      <Dropdown refetch={refetch}>
        <DropdownItem
          refetch={refetch}
          title='sort'
          arr={['max-used-ingredients', 'min-used-ingredients']}
          icon={ <FunnelSimple className="text-black h-5 w-5" /> }
        />
      </Dropdown>

      { isLoading ?
        <BarLoader height={4} width="100%" color="rgb(33, 34, 37)" className="top-0 z-30" cssOverride={{ position: "fixed "}}/>
        :
        <CardWrapper>
          {
              data.pages.flatMap(page =>
                  page.map(plate =>
                    <Card key={plate?.id} title={plate?.title} image={plate?.image} id={plate?.id}>
                      <p>Used Ingredients: {plate?.usedIngredientCount}</p>
                      <span className="font-bold">·</span>
                      <p>Missing Ingredients: {plate?.missedIngredientCount}</p>
                    </Card>
                  )
              )
          }
      </CardWrapper>
    }
    </main>
  )
}
