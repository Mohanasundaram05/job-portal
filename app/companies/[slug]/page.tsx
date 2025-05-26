import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Briefcase, Building2, Calendar, Globe, MapPin, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanyJobList } from "@/components/company-job-list"
import { CompanyReviews } from "@/components/company-reviews"
import { getCompanyBySlug } from "@/lib/data"

export default function CompanyProfilePage({ params }: { params: { slug: string } }) {
  const company = getCompanyBySlug(params.slug)

  if (!company) {
    notFound()
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Back button */}
      <Link href="/companies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Companies
      </Link>

      {/* Company header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative h-24 w-24 rounded-lg overflow-hidden border bg-background">
          <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-cover" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {company.industry}
              </Badge>
              {company.verified && <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {company.location}
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {company.size} employees
            </div>
            <div className="flex items-center">
              <Building2 className="mr-1 h-4 w-4" />
              {company.type}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              Founded {company.founded}
            </div>
            {company.website && (
              <Link
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary"
              >
                <Globe className="mr-1 h-4 w-4" />
                Website
              </Link>
            )}
          </div>
        </div>
        <div className="flex gap-2 self-start">
          <Button>Follow</Button>
          <Button variant="outline">Share</Button>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="jobs">Jobs ({company.jobCount})</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-8 pt-6">
          {/* Company description */}
          <Card>
            <CardHeader>
              <CardTitle>About {company.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {company.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Company culture */}
          <Card>
            <CardHeader>
              <CardTitle>Our Culture</CardTitle>
              <CardDescription>What makes {company.name} unique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {company.culture.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Company Size</CardDescription>
                <CardTitle className="text-2xl">{company.size} employees</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Founded</CardDescription>
                <CardTitle className="text-2xl">{company.founded}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Revenue</CardDescription>
                <CardTitle className="text-2xl">{company.revenue}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Industry</CardDescription>
                <CardTitle className="text-2xl">{company.industry}</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>{company.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Map view would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="pt-6">
          <CompanyJobList companyId={company.id} />
        </TabsContent>

        <TabsContent value="reviews" className="pt-6">
          <CompanyReviews companyId={company.id} />
        </TabsContent>

        <TabsContent value="benefits" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Benefits & Perks</CardTitle>
              <CardDescription>What {company.name} offers to employees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {company.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator />

      {/* Similar companies */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Similar Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.similarCompanies.map((similarCompany) => (
            <Link href={`/companies/₹{similarCompany.slug}`} key={similarCompany.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="relative h-12 w-12 rounded overflow-hidden border bg-background">
                    <Image
                      src={similarCompany.logo || "/placeholder.svg"}
                      alt={similarCompany.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">{similarCompany.name}</CardTitle>
                    <CardDescription>{similarCompany.industry}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {similarCompany.jobCount} open positions
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
