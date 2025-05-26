"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only run on client-side after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render animations until client-side
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{
              opacity: theme === "dark" ? 1 : 0,
              scale: theme === "dark" ? 1 : 0.5,
              rotate: theme === "dark" ? 0 : -30,
            }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-4 w-4" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
            animate={{
              opacity: theme === "light" ? 1 : 0,
              scale: theme === "light" ? 1 : 0.5,
              rotate: theme === "light" ? 0 : 30,
            }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-4 w-4" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <span className="mr-2 h-4 w-4">💻</span>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
