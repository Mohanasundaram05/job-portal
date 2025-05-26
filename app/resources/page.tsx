"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { ResourceCard } from "@/components/resource-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { resources, resourceCategories } from "@/lib/resources-data"

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter resources based on category and search query
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container py-8 md:py-12">
      <motion.div
        className="space-y-2 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Career Resources</h1>
        <p className="text-muted-foreground text-lg">Tips, guides, and insights to help you land your dream job.</p>
      </motion.div>

      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button variant="outline" onClick={() => setSearchQuery("")} disabled={!searchQuery}>
            Clear
          </Button>
        </div>

        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="w-full h-auto flex flex-wrap justify-start gap-2 bg-transparent">
            {resourceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={resource.id} resource={resource} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No resources found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
            }}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
