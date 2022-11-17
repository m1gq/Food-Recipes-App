import { Link } from 'react-router-dom'
import { List, CaretRight, GithubLogo, DiscordLogo, LinkedinLogo, X } from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="relative bottom-0 mt-auto flex items-center justify-center  bg-neutral-900 text-white p-4">
      <Link to="/" className="text-3xl font-bold tracking-wide">Foodinary</Link>
    </footer>
  )
}
