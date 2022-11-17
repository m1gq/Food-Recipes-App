import { useSearchParams } from 'react-router-dom'
import { Eraser } from 'phosphor-react'
export default function ClearFilter({ refetch }) {
  const [, setSearch] = useSearchParams()
  function removeFilters() {
    setSearch('')
    setTimeout(() => {
      refetch()
    }, 100)
  }

  return (
    <button
      className="flex flex-col items-center gap-1 text-black text-sm p-2 font-regular w-20 capitalize hover:underline underline-offset-2 cursor-pointer"
      onClick={removeFilters}
    >
      <Eraser className="text-black h-6 w-6" />
      <p className="hidden md:inline">Clear</p>
    </button>
  )
}
