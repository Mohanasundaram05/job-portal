"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Filter, X, ChevronDown, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JobCard from "@/components/job-card"
import { JobTypeFilter, jobTypeOptions } from "@/components/job-type-filter"
import { allJobs, categories, jobTypes, experienceLevels } from "@/lib/data"

export default function JobsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [salaryRange, setSalaryRange] = useState([50, 150])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 9

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleJobType = (typeId: string) => {
    setSelectedJobTypes((prev) => (prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId]))
  }

  const toggleExperience = (experienceId: string) => {
    setSelectedExperience((prev) =>
      prev.includes(experienceId) ? prev.filter((id) => id !== experienceId) : [...prev, experienceId],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedJobTypes([])
    setSelectedExperience([])
    setSalaryRange([50, 150])
    setSearchQuery("")
    setLocationQuery("")
  }

  const filteredJobs = allJobs.filter((job) => {
    // Search query filter
    if (
      searchQuery &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Location filter
    if (locationQuery && !job.location.toLowerCase().includes(locationQuery.toLowerCase())) {
      return false
    }

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(job.categoryId)) {
      return false
    }

    // Job type filter
    if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(job.type)) {
      return false
    }

    // Experience level filter
    if (selectedExperience.length > 0 && !selectedExperience.includes(job.experienceLevel)) {
      return false
    }

    // Salary range filter
    const minSalary = Number.parseInt(job.salary.replace(/[^0-9]/g, "")) / 1000
    if (minSalary < salaryRange[0] || minSalary > salaryRange[1]) {
      return false
    }

    return true
  })

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const activeFiltersCount =
    (selectedCategories.length > 0 ? 1 : 0) +
    (selectedJobTypes.length > 0 ? 1 : 0) +
    (selectedExperience.length > 0 ? 1 : 0) +
    (salaryRange[0] !== 50 || salaryRange[1] !== 150 ? 1 : 0)

  return (
    <div className="py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Job</h1>
          <p className="text-muted-foreground">Browse thousands of job opportunities across all industries</p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Job title, keyword, or company"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Location"
              className="pl-9"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
          </div>
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2 sm:w-auto">
                <Filter className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Jobs</SheetTitle>
                <SheetDescription>Narrow down your job search with filters</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                    <span>Categories</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-₹{category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label htmlFor={`category-₹{category.id}`} className="flex-1 cursor-pointer">
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                    <span>Job Type</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    {jobTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-₹{type.id}`}
                          checked={selectedJobTypes.includes(type.id)}
                          onCheckedChange={() => toggleJobType(type.id)}
                        />
                        <Label htmlFor={`type-₹{type.id}`} className="flex-1 cursor-pointer">
                          {type.name}
                        </Label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                    <span>Experience Level</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2">
                    {experienceLevels.map((level) => (
                      <div key={level.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`level-₹{level.id}`}
                          checked={selectedExperience.includes(level.id)}
                          onCheckedChange={() => toggleExperience(level.id)}
                        />
                        <Label htmlFor={`level-₹{level.id}`} className="flex-1 cursor-pointer">
                          {level.name}
                        </Label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                    <span>Salary Range (K)</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 px-2">
                    <Slider
                      defaultValue={[50, 150]}
                      max={200}
                      min={0}
                      step={5}
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                    />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>₹{salaryRange[0]}K</span>
                      <span>₹{salaryRange[1]}K</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                  <Button className="flex-1" onClick={() => setIsFilterOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Job Type Filter Component Integration */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">Quick Filters</h2>
          <JobTypeFilter options={jobTypeOptions} selectedOptions={selectedJobTypes} onChange={setSelectedJobTypes} />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {selectedCategories.length > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Categories ({selectedCategories.length})
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategories([])} />
            </Badge>
          )}
          {selectedJobTypes.length > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Job Types ({selectedJobTypes.length})
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedJobTypes([])} />
            </Badge>
          )}
          {selectedExperience.length > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Experience ({selectedExperience.length})
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedExperience([])} />
            </Badge>
          )}
          {(salaryRange[0] !== 50 || salaryRange[1] !== 150) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Salary: ₹{salaryRange[0]}K - ₹{salaryRange[1]}K
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSalaryRange([50, 150])} />
            </Badge>
          )}
          {(searchQuery || locationQuery || activeFiltersCount > 0) && (
            <Button variant="ghost" size="sm" className="h-7" onClick={clearFilters}>
              Clear all
            </Button>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredJobs.length}</span> jobs
          </p>
          <div className="flex items-center gap-4">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="salary-high">Highest salary</SelectItem>
                <SelectItem value="salary-low">Lowest salary</SelectItem>
              </SelectContent>
            </Select>

            <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
              <TabsList className="grid w-[100px] grid-cols-2">
                <TabsTrigger value="grid">
                  <LayoutGrid className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <>
            <motion.div
              className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-4"}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {currentJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  variant={viewMode === "list" ? "horizontal" : "vertical"}
                />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Load More Button Alternative */}
            {totalPages > 1 && currentPage < totalPages && (
              <div className="mt-8 text-center">
                <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                  Load More Jobs
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-muted p-6">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-xl font-medium">No jobs found</h3>
            <p className="mt-2 text-center text-muted-foreground">
              We couldn't find any jobs matching your search criteria. Try adjusting your filters.
            </p>
            <Button className="mt-6" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
