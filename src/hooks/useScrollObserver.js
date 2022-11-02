import { useState, useEffect } from 'react'
import { useMatch } from 'react-router-dom'

export default function useScrollObserver() {
    const [scrollHeight, setScrollHeight] = useState(0)
    const itMatch = useMatch("/") ?? false
    const setHeight = () => setScrollHeight(scrollY);
    useEffect(() => {
        addEventListener("scroll", setHeight)
    })
    return { scrollHeight, itMatch }
}
