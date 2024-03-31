import { MdAccountCircle } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"
import { IoLogOut } from "react-icons/io5"
import { LuInfo } from "react-icons/lu"
import { FaGithubAlt } from "react-icons/fa"

export const publicRoutes = ["/", "/about"]

export const authRoutes = ["/login"]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_REDIRECT = "/dashboard"

export const fixedRoutes = [
  {
    href: "/",
    label: "Inicio",
    type: "main",
  },
  {
    href: "/dashboard/shower",
    label: "Bañarse",
    type: "main",
  },
  {
    href: "/stats",
    label: "Estadísticas",
    type: "main",
  },
  {
    href: "/account",
    label: "Mi cuenta",
    type: "settings",
    icon: () => <MdAccountCircle className="text-2xl" />,
  },
  {
    href: "/account/settings",
    label: "Ajustes",
    type: "settings",
    icon: () => <IoMdSettings className="text-2xl" />,
  },
  {
    href: "/account/logout",
    label: "Salir",
    type: "settings",
    icon: () => <IoLogOut className="text-2xl" />,
  },
  {
    href: "/about",
    label: "Acerca de",
    type: "about",
    icon: () => <LuInfo className="text-2xl" />,
  },
  {
    href: "https://github.com/BubuDavid/",
    label: "GitHub",
    type: "about",
    icon: () => <FaGithubAlt className="text-2xl" />,
  },
]
