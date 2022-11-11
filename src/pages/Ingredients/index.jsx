import Searchbar from '../../components/Searchbar'
import { Helmet } from 'react-helmet'
export default function Menu() {
    return (
      <main className="pt-20">
        <Helmet>
          <title>Foodinary · What's in my Fridge?</title>
          <meta name="Food Recipes" content="Discover Recipes based on What You Already Have in Home" />
        </Helmet>
        <div className="grid place-content-center h-[30rem] bg-indigo-400 px-2">
          <h1 className="font-semibold text-black text-center text-3xl tracking-wide mb-4">Find Recipes by Ingredients</h1>
          <Searchbar placeholder="Enter your Ingredients...">
            <button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 text-white font-medium px-4 py-2 text-xl tracking-tight transition duration-300">Find Food</button>
          </Searchbar>
        </div>
      </main>
    )
}
