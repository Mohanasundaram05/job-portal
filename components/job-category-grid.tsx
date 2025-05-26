"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Category } from "@/lib/data"

interface JobCategoryGridProps {
  categories: Category[]
  title?: string
  description?: string
  className?: string
  animationEnabled?: boolean
  onCategoryClick?: (categoryId: string) => void
}

export function JobCategoryGrid({
  categories,
  title = "Browse by Category",
  description = "Explore opportunities across various industries and specializations",
  className,
  animationEnabled = true,
  onCategoryClick,
}: JobCategoryGridProps) {
  const [mounted, setMounted] = useState(false)

  // Only enable animations after client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  // Determine if animations should be applied
  const shouldAnimate = mounted && animationEnabled

  return (
    <section className={cn("py-12", className)}>
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={shouldAnimate ? container : undefined}
          initial={shouldAnimate ? "hidden" : undefined}
          animate={shouldAnimate ? "show" : undefined}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              animationEnabled={shouldAnimate}
              onClick={() => onCategoryClick?.(category.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: Category
  index: number
  animationEnabled: boolean
  onClick?: () => void
}

function CategoryCard({ category, index, animationEnabled, onClick }: CategoryCardProps) {
  const CategoryIcon = category.icon

  const cardContent = (
    <div className="relative p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <CategoryIcon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-1 font-medium">{category.name}</h3>
      <p className="text-sm text-muted-foreground">{category.count} jobs available</p>
    </div>
  )

  const card = (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-background/80 shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
      variants={animationEnabled ? { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } } : undefined}
      initial={animationEnabled ? { opacity: 0, y: 20 } : undefined}
      animate={animationEnabled ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4, delay: animationEnabled ? index * 0.1 : 0 }}
      whileHover={animationEnabled ? { y: -5 } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
      {cardContent}
      <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
    </motion.div>
  )

  if (onClick) {
    return (
      <button className="text-left" onClick={onClick}>
        {card}
      </button>
    )
  }

  return (
    <Link href={`/jobs?category=₹{category.id}`} className="block">
      {card}
    </Link>
  )
}

export default JobCategoryGrid
