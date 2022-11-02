import { useParams } from 'react-router-dom'
import useSingleFetch from '../../hooks/useSingleFetch'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import ReadyInMin from '../../components/ReadyInMin'
import CardWrapper from '../../components/CardWrapper'
import Card from '../../components/Card'
import Searchbar from '../../components/Searchbar'
import TagItem from '../../components/TagItem'
import { CheckCircle, ArrowLeft, CaretLeft } from 'phosphor-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useSimilarFetchs from '../../hooks/useSimilarFetchs'

export default function Details() {
    const { foodID } = useParams()
    const { data: food, isLoading, isFetching } = useSingleFetch(foodID)
    const { data: similarRecipes, isLoading: similarRecipesLoading } = useSimilarFetchs(foodID)
    const navigateTo = useNavigate()
    return (
        <main className="pt-20 min-h-screen">
        <span>
          <Link to="../" className="inline-flex items-center gap-1 p-4 font-medium underline"><CaretLeft size={18} className="text-black underline" weight="bold" /> Back to Recipes</Link></span>

        {(isLoading || isFetching) ? <h1>Loading...</h1> :
            <>
                <div className="relative flex flex-col gap-4">
                    <img className="object-cover md:h-96" src={food.image} alt={food.title}/>
                </div>
                <div className="px-3 mt-4">
                    <h1 className="text-3xl font-medium capitalize tracking">{food.title}</h1>
                    <ul className="flex gap-2 flex-wrap my-2">
                        <TagItem tag={ food?.dishTypes } hasMoreTags={true} />
                        <TagItem tag={ food?.diets } hasMoreTags={true} />
                    </ul>
                    <div className="flex items-center justify-between md:w-80 text-neutral-700">
                        <ReadyInMin readyInMinutes={food.readyInMinutes}/>
                        <span className="inline-flex items-center gap-1 p-2 rounded-full "><CheckCircle size={18} className="text-green-500" weight="bold" /> Health Score: {food.healthScore}</span>
                    </div>

                    <div className="mb-2">
                        <h4 className="text-3xl text-neutral-800">Ingredients</h4>
                        <ul className="flex flex-col gap-2 my-2">
                            {food.extendedIngredients.map(ingredient => <li className="list-disc ml-8 tracking-wide text-neutral-700">{ingredient.original}</li>)}
                        </ul>
                    </div>

                    { similarRecipesLoading ? <h1>Loading...</h1> :
                        <div className="my-2">
                            <h4 className="text-3xl mt-2 mb-2 capitalize text-neutral-800">Similar Recipes</h4>
                            <div className="flex flex-wrap gap-4">
                                {
                                    similarRecipes.map(plate =>
                                        <Link to={`../${plate.id}`} key={plate.id} className="relative">
                                        <div className="flex flex-col w-full">
                                          <img
                                            className="h-40 w-96 object-cover"
                                            src={`https://spoonacular.com/recipeImages/${plate.id}-556x370.jpg`}
                                            alt={`A pic of ${plate.title}`}
                                          />
                                          <h4 className="text-black font-semibold py-2 ">{ plate.title }</h4>
                                        </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>

            </>
        }


        </main>
    )

}
