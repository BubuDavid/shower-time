"use client"

import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MdErrorOutline } from "react-icons/md"
import { useRouter } from "next/navigation"

export const ErrorCard = ({ errorMessage }) => {
  const router = useRouter()
  return (
    <Card className="bg-red-100 border-red-500 text-red-900">
      <CardHeader>
        <CardTitle className="flex items-center justify-start">
          <MdErrorOutline className="text-red-500 text-xl mr-2" />
          Error
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Hubo un error con esta página:</p>
        <p className="font-bold">{errorMessage}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          className="bg-red-500 hover:bg-red-600 text-white"
          onClick={() => router.refresh()}
        >
          Recargar
        </Button>
        <span className="text-xs mt-2 text-red-500">
          {" "}
          Tal vez tu sesión expiró, intenta iniciar sesión de nuevo.
        </span>
      </CardFooter>
    </Card>
  )
}
