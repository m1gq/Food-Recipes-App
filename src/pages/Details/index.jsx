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
import { Helmet } from 'react-helmet'
import useSimilarFetchs from '../../hooks/useSimilarFetchs'
import { BarLoader } from 'react-spinners';

export default function Details() {
    const { foodID } = useParams()
    const { data: food, isLoading, isFetching } = useSingleFetch(foodID)
    const { data: similarRecipes, isLoading: similarRecipesLoading } = useSimilarFetchs(foodID)
    const navigateTo = useNavigate()
    return (
        <main className="pt-20 min-h-screen">
        <Helmet>
          <title>Foodinary · { ` ${food?.title ?? "Loading"}` }</title>
          <meta name="description" content={`More information about ${food?.title} Recipe`} />
        </Helmet>
        {(isLoading || isFetching) ? <BarLoader height={4} width="100%" color="rgb(72, 127, 251)" className="top-20" cssOverride={{ position: "fixed "}}/> :
            <>

                <div className="relative flex flex-col gap-4 bg-black/30 mix-blend-darken">
                    <img className="object-cover md:h-96 mix-blend-darken bg-fixed" src={food.image} alt={food.title}/>
                </div>
                <div className="px-3 mt-3">
                  <span>
                    <Link to="../" className="inline-flex items-center gap-1 font-medium text-sm text-neutral-600 underline underline-offset-2"><CaretLeft className="underline underline-offset-2" weight="bold" /> Back to Recipes</Link>
                  </span>
                    <h1 className="text-3xl font-medium capitalize tracking">{food.title}</h1>
                    <ul className="flex gap-2 flex-wrap my-2">
                        <TagItem tag={ food?.dishTypes } hasMoreTags={true} />
                        <TagItem tag={ food?.diets } hasMoreTags={true} />
                    </ul>
                    <div className="flex items-center justify-between md:w-80 text-neutral-700">
                        <ReadyInMin readyInMinutes={food.readyInMinutes}/>
                        <span className="inline-flex items-center gap-1 p-2 rounded-full "><CheckCircle className="text-green-500" weight="bold" /> Health Score: {food.healthScore}</span>
                    </div>

                    <div className="flex flex-col md:flex-row mb-2">
                        <div className="w-[50rem]">
                          <h2 className="text-3xl text-neutral-800">Ingredients</h2>
                          <ul className="flex flex-col gap-2 my-2">
                              {food.extendedIngredients.map(ingredient => <li key={ingredient.original} className="list-disc ml-8 tracking-wide text-neutral-700">{ingredient.original}</li>)}
                          </ul>
                        </div>
                        { similarRecipesLoading ? <h1>Loading...</h1> :
                            <div>
                                <h3 className="text-3xl capitalize text-neutral-800 mb-3">Similar Recipes</h3>
                                <div className="flex flex-wrap gap-4 ">
                                    {
                                        similarRecipes.map(plate =>
                                            <Link to={`../${plate.id}`} key={plate.id} className="relative">
                                            <div className="flex flex-col w-96 overflow-hidden">
                                              <img
                                                className="h-40 w-96 object-cover rounded-sm"
                                                src={`https://spoonacular.com/recipeImages/${plate.id}-556x370.jpg`}
                                                alt={`A pic of ${plate.title}`}
                                              />
                                              <h4 className="text-black font-semibold py-2 truncate">{ plate.title }</h4>
                                            </div>
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </>
        }


        </main>
    )

}
