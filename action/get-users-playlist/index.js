"use  server"

import { auth } from "@/lib/auth"

export const getUserPlaylists = async (accessToken) => {
  const session = await auth()
  if (!session) {
    return {
      statusCode: 401,
      error: "Unauthorized, maybe the token is invalid or expired",
    }
  }

  const token = session.accessToken

  const response = await fetch(
    "https://api.spotify.com/v1/me/playlists?limit=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      cache: "no-store",
      // next: {
      //   revalidate: 60 * 10,
      // },
    },
  )

  if (!response.ok) {
    return {
      statusCode: response.status,
      error: response.statusText,
    }
  }

  const data = await response.json()

  return {
    statusCode: 200,
    data: data,
  }
}
