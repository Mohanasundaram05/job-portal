"use client"

import { format, parseISO } from "date-fns"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Calendar, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { resourceCategories } from "@/lib/resources-data"
import type { Resource } from "@/lib/resources-data"

interface ResourceCardProps {
  resource: Resource
  index: number
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  // Find the category object to get the icon
  const category = resourceCategories.find((cat) => cat.id === resource.category)
  const CategoryIcon = category?.icon || BookOpen

  // Format the date
  const formattedDate = format(parseISO(resource.publishedDate), "MMM d, yyyy")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/resources/₹{resource.slug}`} className="block h-full">
        <Card className="overflow-hidden h-full transition-all hover:shadow-md">
          <div className="relative h-48 w-full">
            <Image
              src={resource.image || "/placeholder.svg"}
              alt={resource.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <CategoryIcon className="h-3 w-3" />
                <span className="capitalize">{resource.category}</span>
              </Badge>
            </div>
            <h3 className="font-semibold text-lg line-clamp-2 mt-2">{resource.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{resource.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{resource.readTime}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
