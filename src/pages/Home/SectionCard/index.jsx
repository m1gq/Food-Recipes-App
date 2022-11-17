import { NavigationArrow  } from 'phosphor-react'
export default function SectionCard(props) {
  return (
    <figure className="group relative overflow-hidden rounded-lg">
      <img
        className="object-cover object-center aspect-[16:9] h-96 w-full shadow  transition-all isolate"
        src={props.img} alt="Image from Unsplash" />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/80 to-transparent overflow-hidden" />
        <div className="absolute bottom-4 px-4 flex justify-between items-center w-full">
          <div>
            <p className="text-2xl text-white font-semibold">{props.title}</p>
            <p className="underline underline-offset-2 text-base text-white/95">{props.subtitle}</p>
          </div>
          <div className="translate-y-20 uppercase group-hover:translate-y-0 flex items-center gap-2 h-8 px-4 bg-white text-black text-sm rounded-full tracking-wider transition">
            <NavigationArrow  className="text-xl" weight="light"/>
            Explore
          </div>
        </div>

    </figure>
  )
}
