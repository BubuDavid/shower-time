"use server"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function searchItems(data) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }
  const { accessToken } = session

  const { songQuery: query } = data
  if (query.length < 3) {
    return {
      statusCode: 400,
      fieldErrors: "Query must be at least 3 characters long",
    }
  }

  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "GET",
  })

  if (!response.ok) {
    return {
      status: response.status,
      error: response.statusText,
    }
  }

  const jsonData = await response.json()
  return {
    statusCode: 200,
    data: jsonData,
  }
}
