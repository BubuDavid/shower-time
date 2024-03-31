import Link from "next/link"
import Image from "next/image"
import Logo from "/public/images/navbar-logo.png"

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center hover:opacity-75 transition-opacity"
    >
      <Image
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
        className="w-8 h-8 md:w-[50px] md:h-[50px]"
      />
      <h1 className="text-primary text-sm font-semibold ml-2 md:text-2xl">
        Shower Time
      </h1>
    </Link>
  )
}
