import Link from "next/link"

import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect"
import { optionCards } from "./data/options"

async function DashboardPage() {
  return (
    <div className="w-full flex flex-col ">
      <h1 className="mb-8 text-lg">
        Escoge lo que quieras hacer para tu próxima ducha o ve directamente a{" "}
        <Link href="/dashboard/shower" className="font-semibold underline">
          Bañarse
        </Link>{" "}
        para trackear tu baño.
      </h1>

      <div className="max-w-5xl mx-auto px-4">
        <HoverEffect items={optionCards} className={"lg:grid-cols-2"} />
      </div>
    </div>
  )
}

export default DashboardPage
