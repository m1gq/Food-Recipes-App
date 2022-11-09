import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import Slider from '../Slider'

const urls = {
    menu: "food/menuItems/search",
    recipes: "recipes/complexSearch"
  }
export default function SliderContainer() {
    const { history } = useLocalStorage()
    // <Slider title={"Taste Something New"} sort={"random"} />
    // <Slider title={"Popular Among People"} sort={"popular"}  />
    // <Slider title={"Healthy Food"} sort={"healthiness"} />
    // { history &&
    //     <Slider
    //       title="Based on Your Last Search"
    //       query={history[0].slice(history[0].lastIndexOf('/') + 1)}
    //       sort="popular"
    //       urlParam={urls[history[0].slice(history[0].indexOf('/') + 1, history[0].indexOf('/', 3))]}
    //     />
    // }
    return (
        <>

        </>
    )
}
