import { useState } from 'react'
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

export default function Card({ image, title, children }) {
    const navigateTo = useNavigate()

    return (
        <div className="p-3">
            <motion.div
                className="relative w-80 md:w-96 cursor-pointer overflow-hidden"
                variants={cardVariants}

            >
                <div className="group relative overflow-hidden rounded bg-slate-800 mb-4">
                    <div className={`absolute w-full h-[14rem] group-hover:bg-slate-800/50 transition-all duration-300 z-10 text-black font-semibold tracking-wider before:opacity-0 hover:before:opacity-100 before:content-['View_Details'] before:block before:w-max before:p-4 before:absolute hover:before:bg-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20 before:transition-all before:duration-300`} />
                    <img
                            className="h-[13rem] min-w-full object-cover object-center aspect-square group-hover:scale-105 transition-all duration-500"
                            src={image}
                            alt={`A pic of ${title}`}
                            draggable="false"
                            lazy="loading"
                    />

                </div>
                <div className="overflow-hidden">
                    <h3 className="text-x text-black font-semibold capitalize truncate select-none tracking-wider">{title}</h3>
                    <div className="flex items-center gap-2 text-neutral-700 tracking-wider">
                      { children }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
