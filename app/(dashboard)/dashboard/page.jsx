import { cn } from "@/lib/utils"

import { OptionButton } from "./_components/option-button"
import { optionCards } from "./data/options"

async function DashboardPage() {
  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-0 gap-0 md:gap-6 items-start justify-center">
      {optionCards.map((option, index) => (
        <OptionButton
          optionParams={option}
          key={index}
          className={`justify-self-center self-start ${index === 1 ? "mb-10 md:mb-0" : ""}`}
        />
      ))}
    </div>
  )
}

export default DashboardPage
