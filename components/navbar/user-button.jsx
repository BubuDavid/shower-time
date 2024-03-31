import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { fixedRoutes } from "@/lib/routes"
import { NavbarLogoutButton } from "./navbar-logout-button"

export const UserButton = ({ session }) => {
  const initials = session?.user?.name?.slice(0, 2)?.toUpperCase()
  const profileImage = session?.user?.image || null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-8 hidden md:block" asChild>
        <Button
          variant="icon"
          size="sm"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Avatar size="sm">
            {profileImage ? (
              <AvatarImage src={profileImage} alt="Profile image" />
            ) : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {fixedRoutes.map((route) => {
            if (route.type === "settings" && route.href !== "/account/logout") {
              return (
                <Link
                  href={route.href}
                  key={route.label}
                  className="flex items-center cursor-pointer"
                >
                  <DropdownMenuItem
                    key={route.label}
                    className="w-full cursor-pointer"
                  >
                    <DropdownMenuLabel className="w-full cursor-pointer">
                      {route.label}
                    </DropdownMenuLabel>
                  </DropdownMenuItem>
                </Link>
              )
            }
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full cursor-pointer">
            <NavbarLogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
