import { useState, forwardRef, ref } from 'react'
import { useNavigate } from 'react-router-dom'

import { MagnifyingGlass } from 'phosphor-react'

const Searchbar = forwardRef(({ children, size = 50, placeholder = "Search Food Recipes..."}, ref) => {
    const [searchQuery, setSearchQuery] = useState("")
    const navigateTo = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        navigateTo(`/recipes/s/${searchQuery.toLowerCase()}`)
    }

    function handleInput(event) {
        const userInput = event.target.value
        setSearchQuery(userInput)
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2" ref={ref}>
            <label className={`group flex items-center gap-2 bg-white hover:cursor-pointer focus-within:border-b-neutral-900 hover:border-b-neutral-900 p-3 w-90 md:w-96 font-xl border-b-2 border-t-2 border-transparent transition-all duration-100`} role="input">
                <MagnifyingGlass size={22} className="text-neutral-900 " weight="bold" />
                <input className="outline-none text-gray-800 bg-transparent w-full font-medium pl-4 hover:cursor-pointer focus:cursor-auto tracking-wider" placeholder={placeholder} value={searchQuery} onChange={handleInput}/>
            </label>
            { children }
        </form>
    )

})

export default Searchbar
