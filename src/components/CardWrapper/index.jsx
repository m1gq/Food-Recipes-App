import { useRef } from 'react'
import { motion } from 'framer-motion'
export default function CardWrapper({ children }) {
    return (
        <>
            <motion.div className="grid-container min-h-screen px-4 mt-4">
                { children }
            </motion.div>
        </>
    )
}
