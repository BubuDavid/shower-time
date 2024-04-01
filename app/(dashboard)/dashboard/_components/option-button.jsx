import Link from "next/link"

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const OptionButton = ({ optionParams, className }) => {
  const { title, content, gradient, href } = optionParams
  return (
    <Link href={href} className={cn("", className)}>
      <Card className="w-full min-h-[200px] pb-4 md:min-w-[400px] md:min-h-[300px] transition-all relative overflow-hidden cursor-pointer">
        <CardHeader>
          <CardTitle className="z-20 relative pointer-events-none">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="z-20 relative pointer-events-none">
          {content()}
        </CardContent>
        <div
          className={cn(
            `absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[${gradient[0]}] via-[${gradient[1]}] to-[${gradient[2]}] from-50% via-80% z-10 opacity-0 hover:opacity-100 transition-opacity duration-500`,
          )}
        />
      </Card>
    </Link>
  )
}
