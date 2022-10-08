import { MagnifyingGlass } from 'phosphor-react'

function Form({ children }) {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-2 ">
            { children }
        </form>
    )
}

export default function Searchbar() {
    return (
        <Form>
            <label className="group flex colitems-center gap-2 bg-white hover:cursor-pointer focus-within:border-yellow-500 hover:border-yellow-500 p-3 w-90 md:w-96 font-xl border-2 rounded-lg transition-all duration-500" role="input">
                <MagnifyingGlass size={22} className="text-gray-300 group-hover:text-yellow-500 group-focus-within:text-yellow-500 transition-all duration-500" weight="bold" />
                <div>
                    <input className="outline-none text-gray-800 bg-transparent w-full font-medium pl-4 hover:cursor-pointer focus:cursor-auto" placeholder="Search Food Recipes..."/>
                </div>
            </label>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium px-4 py-2 rounded-lg tracking-wide transition duration-500">Search</button>
        </Form>
    )
}
