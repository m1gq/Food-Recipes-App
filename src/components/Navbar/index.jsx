import { useEffect, useState, useRef } from 'react'
import { Link, useMatch } from 'react-router-dom'
import Sidebar from './Sidebar'
import ActiveLink from '../ActiveLink'
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
                    className={`flex fixed w-screen items-center gap-8 h-16 px-6 py-10 text-white z-40 bg-transparent transition duration-300`}
                >
                    <Sidebar />
                    <Link to="/" className="absolute text-3xl font-bold left-1/2 -translate-x-1/2 md:relative md:left-0 md:-translate-x-0 tracking-wide">Foodinary</Link>
                    </motion.nav>
                    :
                    <motion.nav
                       className={`flex fixed w-screen items-center gap-8 h-16 px-6 py-10 text-black z-40 bg-white transition duration-300 shadow-lg`}
                    >
                      <Sidebar />
                      <Link to="/" className="absolute text-3xl font-bold left-1/2 -translate-x-1/2 md:relative md:left-0 md:-translate-x-0 tracking-wide">Foodinary</Link>
                </motion.nav>
            }
        </header>
    )
}
