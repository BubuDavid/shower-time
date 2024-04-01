"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const SearchMusicForm = ({ initialQuery }) => {
  const [songQuery, setSongQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/dashboard/choose-music/?songQuery=${songQuery}`)
  }

  return (
    <form className="flex items-center justify-start" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Buscar canciones..."
        value={songQuery}
        className="w-full md:w-1/4 bg-muted md:ml-6"
        id="songQuery"
        name="songQuery"
        onChange={(e) => setSongQuery(e.target.value)}
      />
      <Button type="submit" className="bg-primary  ml-2 md:hidden">
        Buscar
      </Button>
    </form>
  )
}
