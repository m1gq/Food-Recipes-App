import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

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

export default function Card({ image, title, id, isDragging, children }) {
    const { pathname } = useLocation()
    return (
          <Link to={!isDragging && `${id}`} state={{ from: pathname }} className="w-full" draggable="false">
            <motion.div
                  className="cursor-pointer overflow-hidden mb-2"
                  variants={cardVariants}

              >
                  <div className="group relative overflow-hidden rounded mb-3 ">
                      <div className={`absolute w-full h-[14rem] group-hover:bg-black/50 transition-all duration-300 z-10 text-black font-semibold tracking-wider before:opacity-0 hover:before:opacity-100 before:content-['View_Details'] before:block before:w-max before:py-2 before:px-4 text-sm before:absolute hover:before:bg-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-20 before:transition-all before:duration-300`} />
                      <img
                              className="h-[13rem] min-w-full object-cover object-center aspect-square group-hover:scale-105 transition-all duration-500"
                              src={image}
                              alt={`A pic of ${title}`}
                              draggable="false"
                              lazy="loading"
                      />

                  </div>
                  <div className="truncate">
                      <h3 className="text-black font-medium capitalize select-none tracking-wider" title={title}>{title}</h3>
                      <div className="flex items-center gap-1 text-neutral-600 text-sm font-regular">
                        { children }
                      </div>
                  </div>
              </motion.div>
            </Link>
    )
}
