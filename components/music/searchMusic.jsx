import { searchItems } from "@/action/searchItem"

import { SearchMusicForm } from "./searchMusicForm"
import { ItemsList } from "./items-list"

export async function SearchMusic({ songQuery }) {
  const handleSearchItems = async (songQuery) => {
    const response = await searchItems({ songQuery })
    if (response.error) return response
    const items = response.data.tracks.items
    console.log(items)
    return { data: { items } }
  }

  return (
    <section className="w-full min-h-[70vh] md:min-h-[50vh]" id="#search">
      <SearchMusicForm initialQuery={songQuery} />
      {songQuery && (
        <ItemsList
          action={() => handleSearchItems(songQuery)}
          path="/dashboard/track"
        />
      )}
    </section>
  )
}
