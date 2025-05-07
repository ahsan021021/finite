import type { ReactNode } from "react"

export default function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-glow">
      {children}
    </span>
  )
}
