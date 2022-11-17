import Searchbar from '../../components/Searchbar'
import { Helmet } from 'react-helmet'
import useIngredientsList from '../../hooks/useIngredientsList'
export default function Menu() {
    const { ingredient, setIngredient, ingredients, handleSubmit, deleteIngredient, sendIngredients } = useIngredientsList()
    return (
      <main className="pt-20">
        <Helmet>
          <title>Foodinary · What's in my Fridge?</title>
          <meta name="Food Recipes" content="Discover Recipes based on What You Already Have in Home" />
        </Helmet>
        <div className="flex justify-center items-center h-[78.7vh] p-4">
          <div className="border-2 p-4 bg-white">
            <h1 className="font-semibold text-black text-center text-3xl tracking-wide mb-2">Find Recipes by Ingredients</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center ">
              <input placeholder="Enter an Ingredient" className="w-full h-12 pl-4 border-2 border-black" value={ingredient} onChange={(event) => setIngredient(event.target.value)}/>
              <button type="button" onClick={() => sendIngredients()} className="bg-black text-white py-2 mt-1 mb-2 ">Search</button>
            </form>
            <div className="flex flex-wrap gap-2">
              { ingredients.map(ingredient =>
                <div
                  key={ingredient}
                  className="inline-flex items-center gap-1 px-2 max-w-max border-[1px] border-stone-400 text-black bg-white font-medium uppercase tracking-wide mt-1 rounded-full cursor-pointer after:content-['☓']"
                  onClick={deleteIngredient}
                >

                  {ingredient}
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    )
}
