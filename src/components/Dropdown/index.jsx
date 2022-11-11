import Searchbar from '../Searchbar'
import { useSearchParams } from 'react-router-dom'
export default function Dropdown({ children, refetch }) {
  const [, setSearch] = useSearchParams()
  function removeFilters() {
    setSearch('')
    setTimeout(() => {
      refetch()
    }, 100)
  }
  return (
    <div className="sticky top-20 left-0 flex items-center justify-around flex-wrap mb-4 p-2 z-30 bg-neutral-50 shadow cursor-pointer">
      <Searchbar size={32}/>
      <div className="flex gap-4">
        { children }
        <button onClick={removeFilters}>Clear filter</button>
      </div>

    </div>
  )
}
