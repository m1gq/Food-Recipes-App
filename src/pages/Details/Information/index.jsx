export default function Information({ title, arr }) {
  return (
    <div className="w-full">
      <h2 className="text-3xl text-neutral-800">{title ?? ''}</h2>
      <ul className="flex flex-col gap-2 my-2 pr-2 ">
          {arr?.map(element => <li key={element?.original} className="list-disc ml-8 tracking-wide text-neutral-700 ">{element?.original}</li>)}
      </ul>
    </div>
  )
}
