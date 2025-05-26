"use client"

import { motion } from "framer-motion"
import {
  Laptop,
  PenTool,
  TrendingUp,
  DollarSign,
  Heart,
  BookOpen,
  Headphones,
  BarChart,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  count: number
  icon: string
  index: number
}

export default function CategoryCard({ title, count, icon, index }: CategoryCardProps) {
  const icons: Record<string, LucideIcon> = {
    Laptop,
    PenTool,
    TrendingUp,
    DollarSign,
    Heart,
    BookOpen,
    Headphones,
    BarChart,
  }

  const IconComponent = icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden transition-colors hover:bg-muted/50">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-full bg-primary/10 p-3">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{count} jobs available</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
