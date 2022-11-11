import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import Slider from '../Slider'

const urls = {
    menu: "food/menuItems/search",
    recipes: "recipes/complexSearch"
  }
export default function SliderContainer() {
    const { history } = useLocalStorage()
    const title = history.includes('=') ? history.slice((history.indexOf("=") + 1)) : history.slice(history.lastIndexOf('/') + 1)
    return (
        <div className="bg-gray-100">
            { history.length > 0 &&
                <Slider
                  title="Based on Your Last Search"
                  query={history[0][1]}
                  sort="popular"
                  urlParam={urls[history[0].slice(history[0].indexOf('/') + 1, history[0].indexOf('/', 1))]}
                />
            }
            <Slider title={"Taste Something New"} sort={"random"} />
            <Slider title={"Healthy Food"} sort={"healthiness"} />
            <Slider title={"Popular Among People"} sort={"popularity"} />
        </div>
    )
}
