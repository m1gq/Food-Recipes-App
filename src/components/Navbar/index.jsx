import { useEffect, useState, useRef } from 'react'
import { Link, useMatch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Searchbar from '../Searchbar'
import useScrollObserver from '../../hooks/useScrollObserver'

import { motion, AnimatePresence } from 'framer-motion'

const navVariants = {
    "initial": { y: -400 },
    "animate": { y: 0 },
    "exit": { y: -400 }
}

export default function Navbar() {
    const { scrollHeight, itMatch } = useScrollObserver()
    const SCROLL_HEIGHT = 250
    return (
        <header >
            { itMatch && scrollHeight < SCROLL_HEIGHT ?
                <motion.nav
                    className={`flex fixed w-screen items-center justify-between gap-8 h-16 py-10 px-4 md:px-8 text-white z-40 bg-transparent transition duration-300`}
                >
                    <div className="flex justify-center items-center gap-4">
                      <Sidebar />
                      <Link to="/" className="text-2xl md:text-3xl font-bold md:relative md:left-0 md:-translate-x-0 tracking-wide">Foodinary</Link>
                    </div>
                    <Link to="/recipes" className="py-2 px-4 bg-white text-black text-lg rounded-full transition-all duration-300">Find Food</Link>
                    </motion.nav>

                    :

                    <motion.nav
                       className={`flex fixed w-screen items-center justify-between gap-8 h-16 py-10 px-4 md:px-8 text-black z-40 bg-zinc-50 transition duration-300`}
                    >
                      <div className="flex justify-center items-center gap-4">
                        <Sidebar />
                        <Link to="/" className="text-2xl md:text-3xl font-bold md:relative md:left-0 md:-translate-x-0 tracking-wide ">Foodinary</Link>
                      </div>
                      <Link to="/recipes" className="py-2 px-4 bg-black text-white text-lg rounded-full transition-all duration-300">Find Food</Link>
                </motion.nav>
            }
        </header>
    )
}
