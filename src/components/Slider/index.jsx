import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Card from '../../components/Card'
import ReadyInMin from '../ReadyInMin'
import TagItem from '../TagItem'
import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import useSliderWidth from '../../hooks/useSliderWidth'
import { motion } from 'framer-motion'

const sliderVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1,
        transition: {
            duration: .5,
            ease: [.6, .01, -.05, .95],
            staggerChildren: 0.1,
        }}
}

export default function Slider({ title, query, sort, urlParam }) {
    const sliderContainer = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const { data, isFetchingNextPage, fetchNextPage, isLoading } = useFetch({ queryName: query, querySort: sort, TOTAL_RESULTS: 5, url: urlParam })
    const { sliderWidth } = useSliderWidth({ externalRef: sliderContainer ? sliderContainer.current : null})
    const { history } = useLocalStorage()
    const handleDragEnd = event => {
        setTimeout(() => setIsDragging(false), 100)
    }
    const handleDragStart = event => {
        setIsDragging(true)
    }

    return (
        <div className="px-4 py-2">

          <h3 className="my-4 pl-4 font-bold text-3xl text-neutral-900 text-center md:text-left rounded tracking-wide">{title}</h3>
            { isLoading ? <h1>Loading...</h1> :
              <motion.div layout className="flex items-center overflow-hidden min-w-screen p-2 rounded" ref={sliderContainer}>
                <motion.div
                    className="flex gap-2 items-center min-w-screen "
                    drag='x'
                    dragConstraints={{ right: 0, left: -sliderWidth}}
                    whileTap={{ cursor: "grabbing" }}
                    dragElastic={0.125}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {data?.pages?.map(page =>
                        page?.results || page.menuItems.map(plate =>
                          <Link to={!isDragging && `recipes/${plate.id}`} draggable="false">
                            <Card key={plate.id} {...plate} />
                          </Link>
                        ))
                    }
                    <Link to={query ? `${history[0]}` : `/recipes/s/sort=${sort}`} className="w-max p-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white ml-4">Load More</Link>

                </motion.div>
              </motion.div>
            }
            <hr className="border-gray-200 border-1"/>
        </div>
    )
}
