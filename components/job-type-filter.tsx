"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Briefcase, MapPin, Clock, GraduationCapIcon as Graduation } from "lucide-react"
import { cn } from "@/lib/utils"

export type FilterOption = {
  id: string
  label: string
  icon?: React.ReactNode
}

interface JobTypeFilterProps {
  options: FilterOption[]
  selectedOptions: string[]
  onChange: (selectedOptions: string[]) => void
  className?: string
  scrollable?: boolean
}

export function JobTypeFilter({
  options,
  selectedOptions,
  onChange,
  className,
  scrollable = true,
}: JobTypeFilterProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      onChange(selectedOptions.filter((id) => id !== optionId))
    } else {
      onChange([...selectedOptions, optionId])
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={cn("w-full", scrollable && "overflow-x-auto pb-2 hide-scrollbar", className)}>
      <div className={cn("flex gap-2", scrollable && "min-w-max")}>
        {options.map((option) => (
          <FilterButton
            key={option.id}
            selected={selectedOptions.includes(option.id)}
            onClick={() => toggleOption(option.id)}
            icon={option.icon}
          >
            {option.label}
          </FilterButton>
        ))}
      </div>
    </div>
  )
}

interface FilterButtonProps {
  children: React.ReactNode
  selected: boolean
  onClick: () => void
  icon?: React.ReactNode
}

function FilterButton({ children, selected, onClick, icon }: FilterButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "shadow-sm hover:shadow",
        selected
          ? "bg-primary text-primary-foreground"
          : "bg-background text-muted-foreground hover:bg-muted/50 border border-border",
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={selected}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      {children}
      {selected && (
        <motion.span
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground shadow-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <Check className="h-3 w-3" />
        </motion.span>
      )}
    </motion.button>
  )
}

// Predefined job type options
export const jobTypeOptions: FilterOption[] = [
  { id: "remote", label: "Remote", icon: <MapPin className="h-3.5 w-3.5" /> },
  { id: "full-time", label: "Full-time", icon: <Briefcase className="h-3.5 w-3.5" /> },
  { id: "part-time", label: "Part-time", icon: <Clock className="h-3.5 w-3.5" /> },
  { id: "contract", label: "Contract", icon: <Briefcase className="h-3.5 w-3.5" /> },
  { id: "internship", label: "Internship", icon: <Graduation className="h-3.5 w-3.5" /> },
]

// Helper style to hide scrollbar but keep functionality
export const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`
