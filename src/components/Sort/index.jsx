import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SortAscending, SortDescending } from 'phosphor-react'
export default function Sort({ refetch }) {
  const [search, setSearch] = useSearchParams()
  const [isDescending, setIsDescending] = useState(false)
  function toggleSort() {
    if (isDescending) {
      search.set("sortDirection", 'desc')
    } else {
      search.set("sortDirection", 'asc')
    }

    setIsDescending(!isDescending)
    setTimeout(() => {
      setSearch(search)
      refetch()
    }, 100)
  }

  return (
    <button
      className="flex flex-col items-center gap-1 text-black text-sm p-2 w-20 font-regular capitalize hover:underline underline-offset-2 cursor-pointer"
      onClick={toggleSort}
    >
      { isDescending ?
        <SortDescending className="text-black h-6 w-6" /> :
        <SortAscending className="text-black h-6 w-6" />
      }
      <p className="hidden md:inline">{isDescending ? 'Asc' : 'Desc'}</p>
    </button>
  )
}
