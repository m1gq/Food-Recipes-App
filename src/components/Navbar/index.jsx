import { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink'
import { List, CaretRight, GithubLogo, DiscordLogo, LinkedinLogo, X } from 'phosphor-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function openMenu() {
        setIsOpen(true)
    }

    function closeMenu() {
        setIsOpen(false)
    }

    return (
        <header>
            <nav
                className="flex fixed w-screen items-center gap-8 h-16 w-11/12 px-8 py-12 z-50"
            >
                <List size={32} weight="bold" className="text-white cursor-pointer" onClick={openMenu}/>
                <Link to="/" className="text-3xl text-green-400 font-bold">Food Recipes</Link>
                <AnimatePresence>
                    { isOpen && <motion.div
                                className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0}}
                                transition={{ transition: "linear", duration: .350}}
                                />
                    }
                </AnimatePresence>
                <AnimatePresence>
                    { isOpen && <motion.div
                        className="absolute flex flex-col gap-8 min-h-screen top-0 left-0 w-96 bg-white pt-8 px-8 pb-16 shadow before:absolute block min-h-screen min-w-screen bg-white z-index-10"
                        initial={{x: -500}}
                        animate={{x: 0}}
                        exit={{x: -1000 }}
                        transition={
                            { transition: "linear", duration: .350}
                        }
                    >
                        <div className="flex align-center gap-8">
                            <X size={32} color="#000" weight="bold" className="cursor-pointer" onClick={closeMenu}/>
                            <Link to="/" className="text-3xl text-green-400 font-bold">Food Recipes</Link>
                        </div>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link to="/details" className="flex text-xl items-center gap-1">
                                    Menu <CaretRight size={12} color="#000" weight="bold" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/details" className="flex text-xl items-center gap-1">
                                    Contact <CaretRight size={12} color="#000" weight="bold" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/details" className="flex text-xl items-center gap-1">
                                    About <CaretRight size={12} color="#000" weight="bold" />
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <ul className="flex gap-8 justify-center">
                                <li className="flex"><Link><GithubLogo size={28} color="#000" weight="bold" className="mx-auto"/> Github</Link></li>
                                <li className="flex"><Link><DiscordLogo size={28} color="#000" weight="bold" className="mx-auto"/> Discord</Link></li>
                                <li className="flex"><Link><LinkedinLogo size={28} color="#000" weight="bold" className="mx-auto"/> LinkedIn</Link></li>
                            </ul>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </nav>
        </header>
    )
}
