import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretRight } from 'phosphor-react'
export default function DropdownItem({ refetch, title, arr }) {
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
  }  return (
    <div onClick={handleOpen} className="relative flex z-30 justify-center my-4">
      <span className="inline-flex items-center justify-center gap-1 bg-neutral-100 text-neutral-500 w-28 py-1 rounded-full shadow-sm font-medium capitalize">{title} <CaretRight size={16} className={`${isOpen ? 'rotate-90' : null} transition-all duration-300 `} weight="bold"/></span>
      <AnimatePresence>
        { isOpen &&
          <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 bg-neutral-100 text-neutral-500 px-2 rounded overflow-hidden shadow"
              >
              {arr.map(element => <li onClick={handleSort} className="capitalize cursor-pointer hover:bg-neutral-50 text-center py-1 px-2 ">{element}</li>)}
          </motion.ul>
        }
      </AnimatePresence>
    </div>
  )
}
