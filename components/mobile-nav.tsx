"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close the mobile menu when the route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when the mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Find Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <div suppressHydrationWarning>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  SnapJobs
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-foreground",
                        pathname === item.href ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Switch theme</span>
                    <ThemeToggle />
                  </div>
                  <Link href="/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
