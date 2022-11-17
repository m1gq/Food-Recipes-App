import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretRight, SortAscending } from 'phosphor-react'
export default function DropdownItem({ refetch, title, arr, icon }) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useSearchParams()
  function handleOpen() {
    setIsOpen(!isOpen)
  }
  function handleSort(event) {
    search.set(title, event.target.textContent)
    setSearch(search)
    setTimeout(() => {
      refetch()
    }, 100)
  }
  return (
    <div>
      <div onClick={handleOpen} className="relative z-30">
          <div className="flex flex-col items-center gap-1 text-black py-2 font-regular w-20 capitalize text-sm hover:underline underline-offset-2 cursor-pointer">
            { icon }
            <p className="hidden md:inline">{ title }</p>
          </div>
        </div>
        <AnimatePresence>
          { isOpen &&
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 z-50 bg-neutral-100 text-gray-900 text-sm px-2 rounded  shadow min-w-[11rem]"
                >
                {arr.map(element => <li onClick={handleSort} className="capitalize cursor-pointer hover:underline py-1  ">{element}</li>)}

            </motion.ul>
          }
        </AnimatePresence>
      </div>
  )
}
