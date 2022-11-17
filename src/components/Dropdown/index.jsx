import Searchbar from '../Searchbar'
import ClearFilter from '../ClearFilter'
import Sort from '../Sort'
import { useSearchParams } from 'react-router-dom'
export default function Dropdown({ children, refetch }) {
  const [, setSearch] = useSearchParams()
  return (
    <div className="fixed top-20 left-0 w-full md:sticky md:top-20 z-30 bg-zinc-50/90 backdrop-blur">
      <div className="flex justify-center items-center p-2">
        { children }

        <ClearFilter refetch={refetch}/>
      </div>
    </div>
  )
}
