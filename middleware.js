import {
  DEFAULT_REDIRECT,
  authRoutes,
  publicRoutes,
  apiAuthPrefix,
} from "@/lib/routes"
import { auth } from "@/lib/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isAapiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isLogOutRoute = nextUrl.pathname === "/account/logout"

  if (isLoggedIn && isPublicRoute) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
  }

  if (isAapiAuthRoute) {
    return null
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl))
  }

  if (isLoggedIn && !isLogOutRoute) {
    if (req.auth.expires) {
      const expiration = new Date(req.auth.expires * 1000)
      const now = new Date()
      const isExpired = expiration < now
      if (isExpired) {
        return Response.redirect(new URL("/account/logout", nextUrl))
      }
    }
  }

  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
