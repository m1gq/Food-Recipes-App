export default function TagItem({ tag, hasMoreTags = false }) {
    if (hasMoreTags) {
      const tagsElement = tag.map(element => <li key={element} className="py-1 px-3 bg-neutral-200 rounded-full capitalize text-neutral-900">{element}</li>)
      return [ tagsElement ]
    }
    else {
      return (
          <span className="capitalize text-black">{tag}</span>
      )
    }

}
