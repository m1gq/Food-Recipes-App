import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function useLocalStorage(data) {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history-search')) || [])
  const { pathname } = useLocation()
  useEffect(() => {
    // Check if the requested query exist to prevent saving bad queries
    if (data) {
      localStorage.setItem('history-search', JSON.stringify([...new Set([pathname, ...history ])]))
    }
  }, [data, pathname])
  return { history }
}
