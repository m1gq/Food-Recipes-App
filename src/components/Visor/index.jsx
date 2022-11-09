import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarLoader } from 'react-spinners'
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
            {isFetchingNextPage && <BarLoader height={4} width="100%" color="rgb(72, 127, 251)" className="top-20 z-30" cssOverride={{ position: "fixed"}}/>}
    </motion.div>
  )
}
