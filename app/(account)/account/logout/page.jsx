"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { signout } from "@/action/signout"

function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    signout()
  }, [])

  return (
    <div className="text-xl font-light">
      Tu sesión ha expirado, serás redirigido a la página de inicio de sesión.
    </div>
  )
}

export default LogoutPage
