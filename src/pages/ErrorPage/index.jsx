import { Link } from 'react-router-dom'
export default function ErrorPage() {
  return (
    <main className="grid place-content-center pt-20 h-screen">
        <h1 className="text-3xl">404 Not Found</h1>
        <Link to="/" className="p-2 bg-black text-white text-center">Back To Homepage</Link>
    </main>
  )
}
