"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Bookmark, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Job } from "@/lib/data"

interface JobCardProps {
  job: Job
  index: number
  variant?: "vertical" | "horizontal"
}

export default function JobCard({ job, index, variant = "vertical" }: JobCardProps) {
  const [mounted, setMounted] = useState(false)

  // Only enable animations after client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.div variants={mounted ? item : undefined} whileHover={mounted ? { y: -5 } : undefined}>
      <Card className="overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="flex items-start gap-4 p-6">
            <div className="relative h-12 w-12 overflow-hidden rounded-md border">
              <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{job.title}</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                  <span className="sr-only">Save job</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
                  {job.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Briefcase className="mr-1 h-3 w-3" />
                  {job.type}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {job.postedTime}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 bg-muted/40 px-6 py-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{job.salary}</p>
              {job.isRemote && <Badge variant="secondary">Remote</Badge>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <Button variant="ghost" size="sm">
            Quick Apply
          </Button>
          <Link href={`/jobs/₹{job.slug}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
