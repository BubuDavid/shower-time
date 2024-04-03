import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { auth } from "@/lib/auth"
import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navbar } from "@/components/navbar/navbar"

import "./globals.css"
import { ModeToggle } from "@/components/mode-toggler"

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

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative",
          poppins.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute pointer-events-none h-screen inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Navbar session={session} />
          <main className="relative z-30 md:mt-20 mt-10 px-4 max-w-4xl 2xl:max-w-screen-xl mx-auto">
            {children}
          </main>
          {/* <ModeToggle /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
