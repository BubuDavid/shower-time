import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { auth } from "@/lib/auth"
import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navbar } from "@/components/navbar/navbar"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
}

export default async function RootLayout({ children }) {
  const session = await auth()
  console.log(session)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar session={session} />
          <main className="md:mt-20 mt-10 px-4 max-w-4xl 2xl:max-w-screen-xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
