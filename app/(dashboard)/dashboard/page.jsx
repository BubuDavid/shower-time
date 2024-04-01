import Link from "next/link"

import { OptionButton } from "./_components/option-button"
import { optionCards } from "./data/options"

async function DashboardPage() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="mb-8">
        Escoge lo que quieras hacer para tu próxima ducha o ve directamente a{" "}
        <Link href="/dashboard/shower" className="font-semibold underline">
          Bañarse
        </Link>{" "}
        para trackear tu baño.
      </h1>
      <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-0 gap-0 md:gap-6 items-start justify-center">
        {optionCards.map((option, index) => (
          <OptionButton
            optionParams={option}
            key={index}
            className={`justify-self-center self-start ${index === 1 ? "mb-10 md:mb-0" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
