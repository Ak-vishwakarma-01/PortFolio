import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 bg-pink-600 text-white hover:bg-pink-700 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button