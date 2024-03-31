"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

import { IoMenuSharp } from "react-icons/io5"
import { PiSpinnerGapBold } from "react-icons/pi"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"

import { fixedRoutes } from "@/lib/routes"
import { NavbarLogoutButton } from "./navbar-logout-button"

export const MobileSidebar = ({ isLoggedIn }) => {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  const onOpen = useMobileSidebar((state) => state.onOpen)
  const onClose = useMobileSidebar((state) => state.onClose)
  const isOpen = useMobileSidebar((state) => state.isOpen)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!isMounted)
    return (
      <PiSpinnerGapBold className="text-white text-2xl animate-spin md:hidden" />
    )

  return (
    <>
      <Button className="block md:hidden" variant="icon" onClick={onOpen}>
        <IoMenuSharp className="text-white text-2xl" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="flex flex-col justify-between items-start">
          <ul className="flex flex-col items-start space-y-6 w-full">
            {isLoggedIn && (
              <>
                {fixedRoutes.map((route) => {
                  if (route.type === "main") {
                    return (
                      <li key={route.label}>
                        <Link
                          href={route.href}
                          className="flex items-center text-3xl font-light"
                        >
                          <span>{route.label}</span>
                        </Link>
                      </li>
                    )
                  }
                })}
                <Separator className="w-full" />
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="w-full">
                  <Link href="/login" className="flex items-center text-3xl">
                    <span>Iniciar sesión</span>
                  </Link>
                </li>
                <li className="w-full">
                  <Link href="/" className="flex items-center text-3xl">
                    <span>Inicio</span>
                  </Link>
                </li>
                <Separator className="w-full my-4" />
              </>
            )}
          </ul>
          {isLoggedIn && (
            <ul className="flex flex-col items-start space-y-4">
              {fixedRoutes.map((route) => {
                if (
                  route.type === "settings" &&
                  route.href !== "/account/logout"
                ) {
                  return (
                    <li key={route.label}>
                      <Link
                        href={route.href}
                        className="flex items-center text-lg"
                      >
                        {route.icon()}
                        <span className="ml-2">{route.label}</span>
                      </Link>
                    </li>
                  )
                }
              })}
              <li>
                <NavbarLogoutButton
                  icon={true}
                  className="text-lg w-auto p-0 m-0 hover:bg-primary-foreground"
                />
              </li>
            </ul>
          )}
          {!isLoggedIn && (
            <ul className="flex flex-col items-start space-y-4">
              {fixedRoutes.map((route) => {
                if (route.type === "about") {
                  return (
                    <li key={route.label}>
                      <Link
                        href={route.href}
                        className="flex items-center text-sm"
                      >
                        {route.icon()}
                        <span className="ml-2">{route.label}</span>
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
