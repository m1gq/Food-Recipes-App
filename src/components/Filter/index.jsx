import Searchbar from '../Searchbar'
import { motion } from 'framer-motion'
export default function Filter({ containerChildrens }) {
    return (
        <motion.div
            className="flex"
            variants={containerChildrens}
        >
            <Searchbar />
        </motion.div>
    )
}
