import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Visor({ fetchNextPage, isFetchingNextPage }) {
  const [once, setOnce] = useState(false)
  function handleFetch() {
    if (isFetchingNextPage) {
      setOnce(true)
    }
    if (!once) {
      fetchNextPage()
    }
    setOnce(false)
  }
  return (
    <motion.div
        className="flex text-center border-top-2 py-2 text-bold"
        whileInView={() => handleFetch()}
        >
            {isFetchingNextPage && "Loading..."}
    </motion.div>
  )
}
