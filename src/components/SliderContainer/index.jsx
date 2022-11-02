import useFetch from '../../hooks/useFetch'
import Slider from '../Slider'

export default function SliderContainer() {
    return (
        <>
            <Slider title={"Taste Something New"} sort={"random"} />
            <Slider title={"Popular Among People"} sort={"popular"}  />
            <Slider title={"Healthy Food"} sort={"healthiness"} />
        </>
    )
}
