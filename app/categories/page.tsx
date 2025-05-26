"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import JobCategoryGrid from "@/components/job-category-grid"
import { categories, allJobs } from "@/lib/data"

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter jobs by selected category
  const filteredJobs = selectedCategory ? allJobs.filter((job) => job.categoryId === selectedCategory) : []

  // Find the selected category object
  const selectedCategoryObj = selectedCategory ? categories.find((cat) => cat.id === selectedCategory) : null

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
              <Briefcase className="h-6 w-6 text-primary" />
            </motion.div>
            SnapJobs
          </Link>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container">
          {selectedCategory ? (
            <>
              <div className="mb-8">
                <Button
                  variant="ghost"
                  className="mb-4 flex items-center gap-2"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Categories
                </Button>

                <h1 className="text-3xl font-bold">{selectedCategoryObj?.name} Jobs</h1>
                <p className="text-muted-foreground">
                  Browse {filteredJobs.length} available jobs in {selectedCategoryObj?.name}
                </p>
              </div>

              {filteredJobs.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.company}</p>
                        <p className="mt-2">{job.location}</p>
                        <p className="mt-1 font-medium">{job.salary}</p>
                        <div className="mt-4">
                          <Button asChild>
                            <Link href={`/jobs/₹{job.slug}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <p className="text-muted-foreground">No jobs found in this category.</p>
                </div>
              )}
            </>
          ) : (
            <JobCategoryGrid
              categories={categories}
              title="Explore Job Categories"
              description="Find your perfect role by browsing our comprehensive list of job categories"
              onCategoryClick={(categoryId) => setSelectedCategory(categoryId)}
            />
          )}
        </div>
      </main>
    </div>
  )
}
