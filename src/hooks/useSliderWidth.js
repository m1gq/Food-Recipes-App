import { useState, useEffect } from 'react'
export default function useSliderWidth({ externalRef }) {
    const [sliderWidth, setSliderWidth] = useState(3000)
    useEffect(() => {
        if (externalRef) setSliderWidth(externalRef.scrollWidth - externalRef.offsetWidth)
    })

    return { sliderWidth }
}
