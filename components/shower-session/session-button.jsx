import Images from "next/image"
import Logo from "/public/images/navbar-logo.png"
import { AnimatedTooltip } from "../ui/aceternity/animated-tooltip"

export const SessionButton = () => {
  return (
    <AnimatedTooltip
      message="Aquí puedes ver:"
      submessage="Las canciones, la duración y más detalles de tu sesión de baño."
    >
      <button className="fixed bottom-8 left-8 inline-flex h-12 animate-shimmer hover:rotate-6 rotate-0 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <Images src={Logo} alt="Logo" width={24} height={24} className="mr-3" />
        Sessión de Baño
      </button>
    </AnimatedTooltip>
  )
}
