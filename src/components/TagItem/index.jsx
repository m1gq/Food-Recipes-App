export default function TagItem({ tag, hasMoreTags = false, className }) {
    const reducedArr = tag.slice(0, 2)
    if (hasMoreTags) {
      const tagsElement = reducedArr.map(element => <li key={element} className="py-1 px-3 bg-white rounded-full capitalize text-black font-medium">{element}</li>)
      return [ tagsElement ]
    }
    else {
      return (
          <span className={`${className}`}>{tag}</span>
      )
    }

}
