import { useState } from 'react'
import SubMenu from './SubMenu'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { List, CaretRight, GithubLogo, DiscordLogo, LinkedinLogo, X } from 'phosphor-react'
import { nanoid } from 'nanoid'
import Searchbar from '../../Searchbar'
const nav = [
  {
    title: "What's in my Fridge?",
    path: '/ingredients'
  },
  {
    title: "About",
    path: '/about'
  }
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)

    return (

        <>
            <List size={24} weight="bold" className="cursor-pointer" onClick={openMenu}/>
            <AnimatePresence>
                { isOpen && <motion.div
                                className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0}}
                                transition={{ transition: { ease: [.6, .01, -.05, .95], duration: .350 }}}
                                />
                }
            </AnimatePresence>
            <AnimatePresence>
                { isOpen && <motion.div
                    className="absolute flex flex-col gap-8 min-h-screen top-0 left-0 w-96 bg-white pt-6 px-8 pb-16 shadow-lg z-50"
                    initial={{x: -500}}
                    animate={{x: 0}}
                    exit={{x: -1000 }}
                    transition={
                        { transition: "linear", duration: .350 }
                    }
                >

                    <div className="flex items-center gap-8 ">
                        <X size={24} weight="bold" className="cursor-pointer text-neutral-900" onClick={closeMenu}/>
                        <Link to="/" className="text-3xl text-neutral-900 font-bold tracking-wide" onClick={closeMenu}>Foodinary</Link>
                    </div>
                    <Searchbar />
                    <ul className="flex flex-col gap-4">
                        <SubMenu arr={ ['popularity', 'healthiness', 'meta-score', 'time', 'random', 'max-used-ingredients'] }/>
                        {nav.map(({ title, path }) => <li>
                            <Link key={path} to={path} className="flex text-xl items-center gap-1 text-neutral-900" onClick={closeMenu}>
                                {title} <CaretRight size={12} color="#000" weight="bold" />
                            </Link>
                        </li>)}
                    </ul>

                    <div className="mt-auto">
                        <ul className="flex gap-8 justify-center">
                            <li className="flex text-neutral-900"><Link><GithubLogo size={28} color="#000" weight="bold" className="mx-auto "/> Github</Link></li>
                            <li className="flex text-neutral-900"><Link><DiscordLogo size={28} color="#000" weight="bold" className="mx-auto "/> Discord</Link></li>
                            <li className="flex text-neutral-900"><Link><LinkedinLogo size={28} color="#000" weight="bold" className="mx-auto "/> LinkedIn</Link></li>
                        </ul>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
