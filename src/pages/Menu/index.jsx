import Searchbar from '../../components/Searchbar'
import { Helmet } from 'react-helmet'
export default function Menu() {
    return (
      <main className="pt-20">
        <Helmet>
          <title>Foodinary · Menu Recipes</title>
          <meta name="Food Menu Items" content="Discover Menu Offered by Fast Food Restaurants & Food Chains " />
        </Helmet>
        <div className="grid place-content-center h-[30rem] bg-red-400 px-2">
          <h1 className="font-semibold text-black text-center text-3xl tracking-wide mb-4">See What Food Restaurants Offers</h1>
          <Searchbar placeholder="I'm Looking for a ...">
            <button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 text-white font-medium px-4 py-2 text-xl tracking-tight transition duration-300">Find Food</button>
          </Searchbar>
        </div>
      </main>
    )
}
