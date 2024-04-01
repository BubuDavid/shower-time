import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ErrorCard } from "../errorCard"
import { Item } from "./item"

export const ItemsList = async ({ first, last, action, path }) => {
  const response = await action()
  if (response.error) {
    return <ErrorCard errorMessage={response.error} />
  }
  const items = response.data.items

  return (
    <ScrollArea className="flex w-[90vw] md:w-full">
      <div className="flex items-center justify-start p-4">
        {first}
        {items.map((item) => {
          const data = {
            id: item.id,
            imageURL:
              item.images && item.images.length > 0
                ? item?.images[0]?.url
                : item?.album?.images[0]?.url,
            href: `${path}/${item.id}`,
            name: item.name,
          }
          return <Item data={data} key={item.id} />
        })}
        {last}
      </div>

      <ScrollBar orientation="horizontal" className="mt-4" />
    </ScrollArea>
  )
}
ItemsList.displayName = "ItemsList"

ItemsList.Skeleton = () => {
  return (
    <div className="grid w-[300vw] md:w-full grid-cols-6 grid-rows-1 md:grid-cols-3 md:grid-rows-2 overflow-hidden gap-4">
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <Skeleton className="w-[175px] h-[175px] mb-2 md:w-full md:h-[100px] md:mb-0" />
        <Skeleton className="w-[175px] h-[30px] mb-4 md:hidden" />
      </div>
    </div>
  )
}

ItemsList.Skeleton.displayName = "ItemsListSkeleton"
