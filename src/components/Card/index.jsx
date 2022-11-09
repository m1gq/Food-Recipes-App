import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25,
            ease: [.6, .01, -.05, .95],
        }
     }
}

export default function Card({ image, title, readyInMinutes, diets, dishTypes, isDragging, id }) {
    const navigateTo = useNavigate()
    const handleClick = event => {
        if (!isDragging) {
            navigateTo(`/recipes/${id}`)
        }
    }

    return (
        <div className="p-2">
            <motion.div
                className="relative w-80 md:w-96 cursor-pointer overflow-hidden"
                variants={cardVariants}
                onClick={handleClick}
            >
                <div className="overflow-hidden">
                    <motion.img
                            className="h-32 min-w-full object-cover "
                            src={image}
                            alt={`A pic of ${title}`}
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: .280, ease: "linear" }}
                            draggable="false"
                    />
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-x text-black font-semibold capitalize truncate select-none leading-loose">{title}</h3>
                    <div className="flex items-center gap-2">
                      { children }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
