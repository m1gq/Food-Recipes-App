export default function SectionCard(props) {
  return (
    <figure>
      <img
        className="object-cover object-bottom aspect-square h-64 w-full mb-1 shadow rounded-sm"
        src={props.img} alt="Image from Unsplash" />
      <p className="text-2xl font-bold">{props.title}</p>
      <p className="underline underline-offset-2">{props.subtitle}</p>
    </figure>
  )
}
