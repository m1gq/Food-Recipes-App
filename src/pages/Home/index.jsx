import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import Card from '../../components/Card'
import CardWrapper from '../../components/CardWrapper'
import Slider from '../../components/Slider'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
            staggerChildren: .4,
        }
    }
}

const containerChildrens = {
    hidden: {
        opacity: 0,
        y: 150
    },
    show: {
        opacity: 1,
         y: 0,
         transition: {
             ease: [.6, .01, -.05, .95]
         }
    }
}

const MotionSearchbar = motion(Searchbar)

export default function Home() {
    return (
        <>
            <div className="relative min-h-screen bg-neutral-900">
                <motion.div className="hero-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, ease: [.6, .01, -.05, .95] }}
                >
                    <motion.div
                            className="relative top-1/2 -translate-y-1/2 inline-block pl-8 md:pl-16"
                            variants={container}
                            initial="hidden"
                            animate="show"
                    >
                        <motion.h1
                            className="text-white text-3xl md:text-6xl font-bold pb-4 tracking-wide"
                            variants={ containerChildrens }
                        >
                            Homemade Recipes For You
                        </motion.h1>
                        <MotionSearchbar variants={ containerChildrens }><button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 text-white font-medium px-4 py-2 text-xl tracking-tight transition duration-300">Find Food</button></MotionSearchbar>
                    </motion.div>
                </motion.div>
            </div>
            <div className="grid grid-cols-3">
              <Link to='/recipes'>
                <div>
                  <p className="text-2xl">Discover New Food</p>
                  <p className="underline">Search Categories</p>
                </div>
              </Link>
              <Link to='/31231'>
                <div>
                  <p className="text-2xl">What's In My Fridge?</p>
                  <p className="underline">Find Food based on What is in Your Fridge</p>
                </div>
              </Link>
              <Link to='/31231'>
                <div>
                  <p className="text-2xl">Food Menu</p>
                  <p className="underline">Discover Fast Food Restaurants & Food Chains Menu Items</p>
                </div>
              </Link>
            </div>
        </>
    )
}
