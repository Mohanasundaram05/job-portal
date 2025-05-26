"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin, Briefcase, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import JobCard from "@/components/job-card"
import JobCategoryGrid from "@/components/job-category-grid"
import { JobTypeFilter, jobTypeOptions } from "@/components/job-type-filter"
import { featuredJobs, categories } from "@/lib/data"

export default function HomePage() {
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
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {mounted && (
          <>
            <motion.div
              className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              animate={{
                x: [0, 10, 0],
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              animate={{
                x: [0, -10, 0],
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        )}
        <div className="container relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4">Over 10,000+ jobs available</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Dream Job <span className="text-primary">Today</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover thousands of job opportunities with all the information you need. Find your dream job in one
              place.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-8 max-w-2xl"
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex flex-col gap-4 rounded-xl bg-background/80 p-4 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center md:p-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Job title, keyword, or company" className="pl-9" />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Location" className="pl-9" />
              </div>
              <Button className="sm:w-auto" size="lg">
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portal Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Your Career Journey Starts Here</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SnapJobs connects talented professionals with leading companies worldwide. Whether you're looking for
              your first job or taking the next step in your career, we provide the tools, resources, and opportunities
              to help you succeed.
            </p>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Find Opportunities</h3>
                <p className="text-muted-foreground">Search thousands of jobs across all industries and locations</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Apply with Ease</h3>
                <p className="text-muted-foreground">One-click applications and profile management tools</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Grow Your Career</h3>
                <p className="text-muted-foreground">Access resources and insights to advance professionally</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter by Job Type */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Filter by Job Type</h2>
            <p className="text-muted-foreground">Find the perfect work arrangement that fits your lifestyle</p>
          </div>
          <JobTypeFilter options={jobTypeOptions} selectedOptions={[]} onChange={() => {}} className="mb-6" />
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/jobs">Browse All Job Types</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Jobs</h2>
              <p className="mt-2 text-muted-foreground">
                Discover your next career move with our handpicked selection of top opportunities
              </p>
            </div>
            <Link href="/jobs" className="flex items-center text-sm font-medium text-primary">
              View all jobs <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial={mounted ? "hidden" : false}
            animate={mounted ? "show" : false}
          >
            {featuredJobs.slice(0, 6).map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Browse by Category */}
      <JobCategoryGrid categories={categories} className="bg-muted/50" animationEnabled={mounted} />

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {mounted && (
              <motion.div
                className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
            )}
            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight">Ready to Find Your Next Opportunity?</h2>
                <p className="mt-4 text-muted-foreground">
                  Join thousands of job seekers who have found their dream jobs through our platform
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="group" asChild>
                    <Link href="/jobs">
                      Search Jobs
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/signup?type=recruiter">For Employers</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
