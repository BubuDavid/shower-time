"use client"

import { signout } from "@/action/signout"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IoLogOut } from "react-icons/io5"

export const NavbarLogoutButton = ({ className, icon }) => {
  const handleSignout = async () => {
    await signout()
  }

  return (
    <Button
      onClick={handleSignout}
      variant="ghost"
      size="sm"
      className={cn("w-full", className)}
    >
      {icon && <IoLogOut className="text-2xl mr-2" />}
      Cerrar sesión
    </Button>
  )
}
