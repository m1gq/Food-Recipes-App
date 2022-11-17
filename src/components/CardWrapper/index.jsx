import { useRef } from 'react'
import { motion } from 'framer-motion'
export default function CardWrapper({ children }) {
    return (
        <>
            <motion.div className="grid-container min-h-screen place-items-center px-3 md:px-6 my-4">
                { children }
            </motion.div>
        </>
    )
}
