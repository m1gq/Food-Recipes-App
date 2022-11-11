import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import Slider from '../../components/Slider'
import { Helmet } from 'react-helmet'
import '../../index.css'
export default function Recipes() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Foodinary · Food Recipes</title>
        <meta name="Food Recipes" content="Discover Recipes based on What You Searched" />
      </Helmet>
      <div className="grid place-content-center h-[30rem] bg-amber-400 px-2">
        <h1 className="font-semibold text-black text-center text-3xl tracking-wide mb-4">Find Food that Matches Your Needs</h1>
        <Searchbar placeholder="I'm Looking for a ...">
          <button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 text-white font-medium px-4 py-2 text-xl tracking-tight transition duration-300">Find Food</button>
        </Searchbar>
      </div>
      <div>

        <div className="py-4 px-10">
            <h2 className="text-3xl font-semibold">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4 ">
              { ['healthiness', 'meta-score', 'random', 'max-used-ingredients', 'min-missing-ingredients', 'energy', 'caffeine', 'calories', 'price'].map(element => {
                const text = element.split('-').join(' ')
                return (
                  <Link to={`/recipes/s/sort=${element}`} className="capitalize hover:underline">
                    {text}
                  </Link>
                )
              })}
            </div>
              <h2 className="text-3xl font-semibold">Diets</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
                {
                  ['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescetarian'].map(element => {
                    const text = element.split('-').join(' ')
                    return (
                      <Link to={`/recipes/s/diets=${element}`} className="capitalize hover:underline">
                        {text}
                      </Link>
                    )
                })}
            </div>
        </div>
      </div>
    </main>
  )
}
