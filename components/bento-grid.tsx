import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[18rem]", className)}>{children}</div>
}

export function BentoCard({
  title,
  description,
  header,
  className,
}: {
  title: string
  description: string
  header?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        {header}
        <h3 className="font-semibold text-lg mt-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  )
}
