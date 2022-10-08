import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
export default function Slider({ children }) {
    const [sliderWidth, setSliderWidth] = useState(null)
    const sliderContainer = useRef()
    useEffect(() => {
        if (sliderContainer.current) setSliderWidth(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth)
    }, [sliderContainer])
    return (
        <>
            <h3 className="my-4 font-bold text-3xl text-green-300 uppercase">Taste Something New</h3>
            <motion.div className="flex overflow-x-hidden overflow-y-visible w-screen p-0" ref={sliderContainer}>
                <motion.div
                    className="flex gap-6 items-center"
                    drag='x'
                    dragConstraints={{ right: 0, left: -sliderWidth}}
                    whileTap={{cursor: "grabbing"}}
                    dragElastic={0.125}
                >
                    { children }
                    <button className="h-40 w-40 bg-green-300 rounded-full text-xl">See More</button>
                </motion.div>
            </motion.div>
        </>
    )
}
