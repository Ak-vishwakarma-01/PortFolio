import React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "outline"
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  let base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors";
  let variants = {
    default: "bg-pink-500 text-white",
    secondary: "bg-purple-600/50 text-white",
    outline: "border border-pink-400/50 text-pink-300 bg-transparent",
  }
  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge