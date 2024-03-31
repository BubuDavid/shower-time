"use client"

import { useState } from "react"
import { FaSpotify } from "react-icons/fa"
import { ImSpinner2 } from "react-icons/im"

import { signin } from "@/action/signin"
import { Button } from "@/components/ui/button"

export const LoginButton = ({ icon }) => {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)

    try {
      await signin()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant="default"
      className="flex items-center justify-center w-11/12"
      onClick={handleLogin}
      disabled={loading}
    >
      {loading && icon ? (
        <ImSpinner2 className="animate-spin mr-2 text-2xl" />
      ) : (
        icon && <FaSpotify className="mr-2 text-2xl" />
      )}
      <span className="text-lg">
        {loading ? "Cargando..." : "Iniciar sesión"}
      </span>
    </Button>
  )
}
