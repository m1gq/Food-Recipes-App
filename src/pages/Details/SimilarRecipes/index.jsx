import useSimilarFetchs from '../../../hooks/useSimilarFetchs'
import { Link } from 'react-router-dom'
export default function SimilarRecipes({ foodID }) {
  const { data, isLoading } = useSimilarFetchs(foodID)
  return (
    <>
      { isLoading ? <h1>Loading...</h1> :
          <div className="w-full">
              <h3 className="text-3xl capitalize text-neutral-800 mb-3">Similar Recipes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  {
                      data?.map(plate =>
                          <Link to={`../${plate.id}`} key={plate.id} className="relative w-full">
                          <div >
                            <img
                              className="block h-40 w-full object-cover rounded"
                              src={`https://spoonacular.com/recipeImages/${plate.id}-556x370.jpg`}
                              alt={`A pic of ${plate.title}`}
                            />
                            <h4 className="text-black font-medium py-2 truncate">{ plate.title }</h4>
                          </div>
                          </Link>
                      )
                  }
              </div>
          </div>
      }
    </>
  )
}
