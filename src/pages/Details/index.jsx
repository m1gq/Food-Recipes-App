import { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useSingleFetch from '../../hooks/useSingleFetch'
import SimilarRecipes from './SimilarRecipes'
import Information from './Information'
import { ArrowLeft, CheckCircle, Clock } from 'phosphor-react'
import ReadyInMin from '../../components/ReadyInMin'
import CardWrapper from '../../components/CardWrapper'
import Card from '../../components/Card'
import Searchbar from '../../components/Searchbar'
import TagItem from '../../components/TagItem'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { BarLoader } from 'react-spinners';

export default function Details() {
    const { state } = useLocation()
    const { foodID } = useParams()
    const { data: food, isLoading, isFetching } = useSingleFetch(foodID)
    return (
        <main className="pt-20 min-h-screen">
        <Helmet>
          <title>Foodinary · { ` ${food?.title ?? "Loading"}` }</title>
          <meta name="description" content={`More information about ${food?.title} Recipe`} />
        </Helmet>
        {(isLoading || isFetching) ? <BarLoader height={4} width="100%" color="rgb(33, 34, 37)" className="top-20" cssOverride={{ position: "fixed "}}/> :
            <>

                <div className="relative flex flex-col gap-4 bg-black/30 mix-blend-darken">
                    <img className="object-cover md:h-96 mix-blend-darken bg-fixed" src={food.image} alt={food.title} />
                    <Link to={state.from} className="absolute top-4 left-4 inline-flex items-center gap-1 font-medium text-2xl text-white"><ArrowLeft className="underline underline-offset-2" weight="bold" /></Link>
                    <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black/70 px-4 pt-8 pb-4 min-w-full">

                      <ul className="flex justify-center md:justify-start gap-2 flex-wrap mt-auto">
                          { food.dishTypes && food.diets &&
                            <>
                              <TagItem tag={ food?.dishTypes[0]} className="py-1 px-3 bg-white rounded-full capitalize text-black font-medium" />
                              <TagItem tag={ food?.diets[0] } className="py-1 px-3 bg-white rounded-full capitalize text-black font-medium" />
                            </>
                          }
                      </ul>
                    </div>
                </div>
                <div className="px-6 mt-4">
                    <h1 className="text-3xl font-medium capitalize tracking">{food.title}</h1>
                    <div className="flex items-center gap-8 md:w-80 text-neutral-700 py-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="text-black" weight="regular" />
                      <ReadyInMin readyInMinutes={food?.readyInMinutes}/>
                    </span>
                    <span className="inline-flex items-center gap-1"><CheckCircle className="text-green-500" weight="regular" /> Health Score: {food?.healthScore}</span>
                    </div>


                    <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-2">
                        <Information title="Ingredients" arr={food?.extendedIngredients} />
                        <SimilarRecipes foodID={foodID}/>
                    </div>

                </div>

            </>
        }


        </main>
    )

}
