"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-white/90">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-transparent transition-all",
          error && "border-red-400 focus:ring-red-400",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
