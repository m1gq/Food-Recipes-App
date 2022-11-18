import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import SectionCard from './SectionCard'
import useLocalStorage from '../../hooks/useLocalStorage'
import SectionCardWrapper from '../../components/CardWrapper'
import SliderContainer from '../../components/SliderContainer'
import Slider from '../../components/Slider'
import TestimonialCard from '../../components/TestimonialCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
            when: "beforeChildren",
            staggerChildren: .125,
        },
    }
}

const containerChildrens = {
    hidden: {
        opacity: 0,
        y: 100
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
    const { history, title } = useLocalStorage()
    const { pathname } = useLocation()

    return (
        <>
        <Helmet>
          <title>Foodinary · Food Recipes with Love for Cooking</title>
          <meta name="description" content="Foodinary is App that helps you Find Recipes, Search what Fast Food Restaurants & Food Chains offers as their menus, Or search Recipes based on What You already have in home" />
          <meta name="keywords" content="Food, Ingredients, Fast Food, Food Restaurants, Food Chains, Homemade, Healthiness, What's in My Fridge?, React, Tailwind" />
          <meta name="author" content="Miguel Quintero" />
          <link rel="author" href="https://github.com/m1gq" />
        </Helmet>
            <div className="relative min-h-screen bg-neutral-900">
                <motion.div className="hero-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: .5,
                      ease: [.6, .01, -.05, .95],
                    }}
                >
                    <motion.div
                            className="relative top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:-translate-x-0 sm:top-1/2 sm:-translate-y-1/2 inline-block p-2 sm:p-16"
                            variants={container}
                            initial="hidden"
                            animate="show"
                    >
                        <motion.h1
                            className="text-white text-4xl text-center md:text-left md:text-6xl font-bold pb-4 tracking-wide"
                            variants={ containerChildrens }
                        >
                            Homemade Recipes For You
                        </motion.h1>

                        <MotionSearchbar variants={ containerChildrens } path='recipes/s/'><button className="bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 text-white font-medium px-4 py-2 text-xl tracking-tight transition duration-300">Find Food</button></MotionSearchbar>
                        { history.length > 0 &&
                          <motion.p
                            className="text-white text-center md:text-left font-regular mt-1 space-x-2 truncate"
                            variants={ containerChildrens }
                            >Recent Searches {history.map(search => {
                              const title = search.includes('=') ? search.slice((search.indexOf("=") + 1)) : search.slice(search.lastIndexOf('/') + 1)
                              return (
                                  <Link to={search} key={search} className="underline underline-offset-2">{title}</Link>)}
                              )
                            }
                            </motion.p>
                        }
                    </motion.div>
                </motion.div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 gap-4 px-4 py-4">
                <Link to='/recipes' state={{ from: pathname }}>
                  <SectionCard title="Discover New Food" subtitle="Search Categories" img="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </Link>
                <Link to='/ingredients'>
                  <SectionCard title="What's In My Fridge?" subtitle="Search by Ingredients" img="https://images.unsplash.com/photo-1580116270858-8a0d62b15426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"/>
                </Link>
              </div>
              <SliderContainer />
            </div>
        </>
    )
}
