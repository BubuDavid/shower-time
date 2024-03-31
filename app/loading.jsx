import { PiSpinnerGapBold } from "react-icons/pi"

function LoadingGeneralPage() {
  return (
    <div className="w-full h-full">
      <PiSpinnerGapBold className="text-white text-2xl animate-spin" />
    </div>
  )
}

export default LoadingGeneralPage
