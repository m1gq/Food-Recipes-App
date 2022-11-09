import Searchbar from '../Searchbar'
export default function Dropdown({ children }) {
  return (
    <div className="sticky top-20 left-0 flex items-center justify-around flex-wrap mb-4 p-2 z-30 bg-neutral-50 shadow cursor-pointer">
      <Searchbar size={32}/>
      <div className="flex gap-4">
        { children }
      </div>

    </div>
  )
}
