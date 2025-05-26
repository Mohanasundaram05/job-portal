"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { companies } from "@/lib/data"

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")

  // Get unique industries
  const industries = ["all", ...new Set(companies.map((company) => company.industry.toLowerCase()))]

  // Filter companies based on search and industry
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === "all" || company.industry.toLowerCase() === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Companies</h1>
        <p className="text-muted-foreground">Discover top companies hiring now and explore their open positions</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant={selectedIndustry === industry ? "default" : "outline"}
              className="cursor-pointer capitalize"
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="featured">
        <TabsList>
          <TabsTrigger value="featured">Featured Companies</TabsTrigger>
          <TabsTrigger value="all">All Companies</TabsTrigger>
        </TabsList>
        <TabsContent value="featured" className="pt-6">
          <CompanyGrid companies={filteredCompanies.filter((company) => company.verified)} />
        </TabsContent>
        <TabsContent value="all" className="pt-6">
          <CompanyGrid companies={filteredCompanies} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CompanyGrid({ companies }: { companies: typeof import("@/lib/data").companies }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No companies found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {companies.map((company) => (
        <motion.div key={company.id} variants={item}>
          <Link href={`/companies/₹{company.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="relative h-16 w-16 rounded-lg overflow-hidden border bg-background">
                  <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.industry}</p>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {company.jobCount} open positions
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View Company
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
