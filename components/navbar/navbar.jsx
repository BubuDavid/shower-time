import Link from "next/link"

import { fixedRoutes } from "@/lib/routes"

import { NavbarLogo } from "./navbar-logo"
import { MobileSidebar } from "./mobile-sidebar"
import { UserButton } from "./user-button"
import { LoginButton } from "@/app/(marketing)/login/_components/login-button"

export const Navbar = ({ session }) => {
  const isLoggedIn = !!session
  return (
    <div className="w-full shadow shadow-primary z-30 relative">
      <nav className="p-4 flex items-center justify-between max-w-screen-xl mx-auto md:h-20">
        <NavbarLogo />
        <MobileSidebar isLoggedIn={isLoggedIn} />
        <div className="hidden md:flex items-center justify-end">
          <ul className="hidden md:flex items-center space-x-6">
            {isLoggedIn &&
              fixedRoutes.map((route) => {
                if (route.type === "main") {
                  return (
                    <li key={route.label}>
                      <Link
                        href={route.href}
                        className="flex items-center text-lg font-semibold hover:text-accent transition-all"
                      >
                        <span>{route.label}</span>
                      </Link>
                    </li>
                  )
                }
              })}
          </ul>
          {isLoggedIn && <UserButton session={session} />}
          {!isLoggedIn && (
            <ul className="flex items-center justify-center space-x-6">
              {fixedRoutes.map((route) => {
                if (route.type === "about") {
                  return (
                    <li key={route.label}>
                      <Link
                        href={route.href}
                        className="flex items-center text-lg font-light hover:text-accent transition-all"
                      >
                        {route.icon()}
                        <span className="ml-2">{route.label}</span>
                      </Link>
                    </li>
                  )
                }
              })}
              <li>
                <LoginButton icon={false} />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}
