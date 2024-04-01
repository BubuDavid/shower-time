import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LoginButton } from "./_components/login-button"

async function LoginPage(request) {
  const expired = request.searchParams.expired || false

  return (
    <div className="w-full flex justify-center">
      <Card className="w-[500px] min-h-96 text-center relative from-[#121212] to-primary-foreground bg-gradient-to-b">
        <CardHeader>
          <CardTitle>Bienvenid@</CardTitle>
          <CardDescription>Inicia sesión con Spotify</CardDescription>
          <Separator className="my-4 w-full" />
        </CardHeader>
        <CardContent className="flex items-center justify-center h-52 flex-col">
          <LoginButton icon={true} />
          {expired && (
            <div className="text-xs font-light text-red-600 mt-3">
              Tu sesión ha expirado, vuelve a iniciar sesión.
            </div>
          )}
        </CardContent>
        <CardFooter className="absolute bottom-2 flex-col items-center justify-center">
          <span className="text-xs font-light">
            Lee nuestros{" "}
            <Link href="/terms" className="underline">
              términos y condiciones
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
