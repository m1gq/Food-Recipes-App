import { NavLink } from 'react-router-dom'

export default function ActiveLink({ to, children }) {
    const activeStyles = 'text-white text-green-300 border-b-2 border-green-300 transition pointer-events-none'
    const defaultStyles = 'hover:text-green-200 hover:border-green-200 hover:border-b-2 transition'

    function handleActiveLink({ isActive }) {
        return isActive ? activeStyles : defaultStyles
    }
    return <NavLink to={to} className={handleActiveLink}>{children}</NavLink>
}
