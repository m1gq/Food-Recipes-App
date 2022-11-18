import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import Slider from '../Slider'

const urls = {
    ingredients: "recipes/findByIngredients?ingredients=",
    recipes: "recipes/complexSearch?query="
  }

export default function SliderContainer() {
    const { history } = useLocalStorage()
    const title = history[0]?.includes('=') ? history[0]?.slice((history[0]?.indexOf("=") + 1)) : history[0]?.slice(history[0]?.lastIndexOf('/') + 1)
    return (
        <div>
          { history.length > 0 &&
              <Slider
                title="Based on Your Last Search"
                query={title}
                sort={null}
                urlParam={urls[history[0].slice(history[0].indexOf('/') + 1, history[0].indexOf('/', 1))]}
              />
          }
          <Slider
            title="Taste Something New"
            query=""
            sort="random"
            urlParam={urls["recipes"]}
          />
          <Slider
            title="Healthy Food"
            query=""
            sort="healthiness"
            urlParam={urls["recipes"]}
          />
        </div>
    )
}
