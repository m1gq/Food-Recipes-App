import Card from '../../../components/Card'
import Visor from '../../../components/Visor'
import TagItem from '../../../components/TagItem'
import CardWrapper from '../../../components/CardWrapper'
import useIngredientsFetch from '../../../hooks/useIngredientsFetch'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { Link, useParams } from 'react-router-dom'

export default function IngredientsRecipes() {
  const { ingredientQuery } = useParams()
  const { data } = useIngredientsFetch(ingredientQuery)
  useLocalStorage(data)
  return (
    <main className="pt-20">
      <CardWrapper>
          {
              data?.map(plate =>
                <Link to={`${plate.id}`} key={plate.id}>
                  <Card title={plate.title} image={plate.image} >
                    <div className="flex items-center gap-2">
                    <p>Used Ingredients: {plate.usedIngredientCount}</p>
                    <span className="font-bold">·</span>
                    <p>Missing Ingredients: {plate.missedIngredientCount}</p>
                    </div>
                  </Card>
                </Link>
              )
          }
      </CardWrapper>
    </main>
  )
}
