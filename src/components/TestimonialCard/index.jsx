import { motion } from 'framer-motion'
const testimonial = [
  {
    name: 'Quinn',
    age: 24,
    quote: "I am lazy at cooking but thanks to Foodinary I've found a lot of Easy and Fast to Cook Recipes"
  },
  {
    name: 'Amanda',
    age: 38,
    quote: "Foodinary offers you an Easy Way to expand your Cooking Recipes"
  },
  {
    name: 'Josh',
    age: 22,
    quote: "As a Cooking Enthusiast I like to prepare new things and Foodinary offers me new cooking recipes in an easy and simple way."
  },
  {
    name: 'Dennis',
    age: 28,
    quote: "This App is now part of my Daily Meals"
  }
]

export default function TestimonialCard() {
  return (
    <>
    { testimonial.map(person =>
        <div
          className="flex flex-col relative h-[20rem] min-w-[21rem] rounded-lg p-4 mx-auto select-none bg-zinc-800"
          key={person.quote}
        >
          <blockquote className="relative text-center text-2xl text-neutral-50 font-medium italic my-auto">
            <svg aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 w-20 h-20 text-gray-400/60 dark:text-gray-600/60" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <p className="z-20 isolate">{person.quote}</p>
          </blockquote>
          <div className="flex items-center gap-4">
            <h2 className="italic font-regular text-blue-500">{person.name} <span className="text-gray-400">| {person.age} Years Old</span> </h2>
          </div>
        </div>
    )}
    </>
  )
}
