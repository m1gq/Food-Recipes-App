import { motion } from 'framer-motion'
export default function Card(props) {
    return (
        <motion.div
            className="relative h-84 w-96 overflow-hidden rounded-lg cursor-pointer shadow-md"
        >
            <motion.img
                className="min-w-full object-cover "
                src={props.image}
                alt={props.title}
                whileHover={{ scale: 1.1}}
                transition={{ duration: .35 }}
            />
            <div className="absolute p-2 bottom-0 left-1/2 -translate-x-1/2">
                <h3 className="text-sm py-1 px-2 bg-white w-max text-gray-900 font-medium rounded-md">{props.title}</h3>
            </div>
        </motion.div>
    )
}
