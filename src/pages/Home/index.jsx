import Filter from '../../components/Filter'
import Card from '../../components/Card'
import CardWrapper from '../../components/CardWrapper'
import Slider from '../../components/Slider'
import { useQuery } from '@tanstack/react-query'
import getRecipes from '../../services/getRecipes'
export default function Home() {
    // const { data: food, isLoading } = useQuery(["food-recipes"], () => {
    //     return getRecipes("random?number=10")
    // }, { refetchOnWindowFocus: false })
    //
    // if (isLoading) {
    //     return  <h1>Loading...</h1>
    // }
    //
    // <Slider>
    //     {food.recipes.map(plate => <Card key={plate.id} {...plate} />)}
    // </Slider>
    return (
        <>
            <div className="relative min-h-screen">
                <div
                    className="hero-bg absolute h-screen w-full bg-top-right bg-cover -z-index-1"
                />
                <div className="flex flex-col pt-64 pl-8 md:pl-16">
                    <h1 className="hero-title text-white text-3xl md:text-6xl font-bold pb-4 tracking-wide">A Way to Eat Something <span className="text-green-400">New!</span></h1>
                    <Filter />
                </div>
            </div>


        </>
    )
}
