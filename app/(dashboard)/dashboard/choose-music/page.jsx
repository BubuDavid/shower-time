import Link from "next/link"
import { RxPlusCircled } from "react-icons/rx"
import { FaHeart } from "react-icons/fa"

import { getUserPlaylists } from "@/action/get-users-playlist"

import { ItemsList } from "@/components/music/items-list"
import { Suspense } from "react"
import { SearchMusic } from "@/components/music/searchMusic"

async function ChooseMusicPage(request) {
  const songQuery = request?.searchParams?.songQuery || ""
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <h1 className="mb-8">
        Escoge las canciones que quieras escuchar en tu próximo baño y luego
        administralas en la sección de{" "}
        <Link href="/dashboard/music" className="font-semibold underline">
          Sesión de baño
        </Link>
        .
      </h1>
      <h1 className="text-lg font-semibold mb-2">Tus playlists</h1>
      <Suspense fallback={<ItemsList.Skeleton />}>
        <ItemsList
          path="/dashboard/playlists"
          action={getUserPlaylists}
          first={
            <Link
              href="/dashboard/saved"
              className="font-semibold w-fit h-fit hover:bg-muted px-4 py-2 rounded-md transition-all flex flex-col items-start justify-start"
            >
              <div className="w-fit min-w-[175px] h-[200px] mb-2">
                <div className="w-[175px] h-[175px] mb-2 md:w-full md:mb-0 flex items-center justify-center rounded-md transition-all bg-gradient-to-br from-[#4304F5] to-[#BBE2D9]">
                  <FaHeart className="w-8 h-8 text-primary text-xl" />
                </div>
                {"Favoritas"}
              </div>
            </Link>
          }
          last={
            <Link
              href="/dashboard/playlists/all"
              className="font-semibold w-fit h-fit hover:bg-muted px-4 py-2 rounded-md transition-all flex flex-col items-start justify-start"
            >
              <div className="w-fit min-w-[175px] h-[200px] mb-2">
                <div className="w-[175px] h-[175px] mb-2 md:w-full md:mb-0 flex items-center justify-center rounded-md transition-all bg-gradient-to-br from-[#006450] to-[#BBE2D9]">
                  <RxPlusCircled className="w-8 h-8 text-primary text-xl" />
                </div>
                {"Mostras todas"}
              </div>
            </Link>
          }
        />
      </Suspense>
      <h1 className="text-lg font-semibold mb-2 mt-8">¿Buscas algo más?</h1>
      <Suspense fallback={<ItemsList.Skeleton />}>
        <SearchMusic songQuery={songQuery} />
      </Suspense>
    </div>
  )
}

export default ChooseMusicPage
