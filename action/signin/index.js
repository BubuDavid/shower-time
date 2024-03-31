"use server"

import { signIn } from "@/lib/auth"

export const signin = async () => {
  await signIn("spotify")
}
