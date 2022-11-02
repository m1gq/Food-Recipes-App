import { Timer } from 'phosphor-react'
export default function ReadyInMin({ readyInMinutes }) {
    const readyInMin = readyInMinutes >= 90 ? "text-red-500" : readyInMinutes >= 60 ? "text-yellow-500" : "text-green-500"
    return (
        <p
            className="inline-flex items-center gap-2">
                
                {readyInMinutes} Minutes
        </p>
    )
}
