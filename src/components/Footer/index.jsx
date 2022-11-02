import { Link } from 'react-router-dom'
import { List, CaretRight, GithubLogo, DiscordLogo, LinkedinLogo, X } from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-40 bg-neutral-900 text-white p-4">
      <h3 className="w-full text-center mb-2">Page made by Me</h3>
      <ul className="flex gap-8 justify-center">
        <li className="flex"><Link><GithubLogo size={28} color="#fff" weight="bold" className="mx-auto"/> Github</Link></li>
        <li className="flex"><Link><DiscordLogo size={28} color="#fff" weight="bold" className="mx-auto"/> Discord</Link></li>
        <li className="flex"><Link><LinkedinLogo size={28} color="#fff" weight="bold" className="mx-auto"/> LinkedIn</Link></li>
      </ul>
    </footer>
  )
}
