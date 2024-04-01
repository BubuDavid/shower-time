import Link from "next/link"
import Image from "next/image"

export const Item = ({ data }) => {
  const { id, imageURL, href, name } = data
  return (
    <Link
      href={href}
      className="font-semibold w-fit h-fit hover:bg-muted px-4 py-4 rounded-md transition-all flex flex-col items-start justify-start"
      key={id}
    >
      <div className="w-fit min-w-[175px] h-[220px] mb-2">
        {imageURL ? (
          <Image
            src={imageURL}
            alt={name}
            width={175}
            height={175}
            className="mb-2 w-[175px] h-[175px] rounded-sm"
          />
        ) : (
          <div className="w-[175px] h-[175px] bg-gray-300 mb-2" />
        )}
        {name.length < 30 ? name : name.slice(0, 30) + "..."}
      </div>
    </Link>
  )
}
