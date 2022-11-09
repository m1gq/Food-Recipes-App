import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'
import { nanoid } from 'nanoid'
export default function SubMenu({ arr })  {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen() {
    setIsOpen(!isOpen)
  }
  return (
    <ul onClick={handleOpen} className="cursor-pointer text-neutral-900">
      <span className="group flex text-xl items-center gap-1">Recipes <CaretRight size={12} weight="bold" className={`${isOpen ? 'rotate-90' : null} transition-all duration-300`}/></span>
      { isOpen &&
        arr.map(element =>
          <li key={nanoid()} className="capitalize ml-1 mb-1" >
            Find by <Link to={`/recipes/s/sort=${element}`}>{element}</Link>
          </li>)
      }
    </ul>

  )
}
