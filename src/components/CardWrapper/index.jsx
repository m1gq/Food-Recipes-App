export default function CardWrapper({ children }) {
    return (
        <>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 auto-cols-fr min-h-screen gap-8">
                { children }
            </div>
        </>
    )
}
