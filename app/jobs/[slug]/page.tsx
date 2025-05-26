"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  GraduationCap,
  Share2,
  Bookmark,
  Building,
  CheckCircle2,
  FileText,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { allJobs, categories, jobTypes, experienceLevels } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function JobDetailPage() {
  const { slug } = useParams()

  // Find the job by slug
  const job = allJobs.find((job) => job.slug === slug) || allJobs[0]

  // Find category, job type and experience level
  const category = categories.find((cat) => cat.id === job.categoryId)
  const jobType = jobTypes.find((type) => type.id === job.type)
  const experienceLevel = experienceLevels.find((level) => level.id === job.experienceLevel)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/jobs" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to jobs
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Save</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                    <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-muted-foreground">{job.company}</span>
                      <span className="text-xs">•</span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="text-xs">•</span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {job.postedTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {job.isRemote && <Badge>Remote</Badge>}
                  <Badge variant="outline">{jobType?.name}</Badge>
                  <Badge variant="outline">{category?.name}</Badge>
                  <Badge variant="outline">{experienceLevel?.name}</Badge>
                </div>

                <Tabs defaultValue="description">
                  <TabsList className="w-full">
                    <TabsTrigger value="description" className="flex-1">
                      Description
                    </TabsTrigger>
                    <TabsTrigger value="company" className="flex-1">
                      Company
                    </TabsTrigger>
                    <TabsTrigger value="apply" className="flex-1">
                      Apply
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="mb-3 text-lg font-medium">About the role</h2>
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            We are looking for a {job.title} to join our team. In this role, you will be responsible for
                            designing and implementing new features and functionality, building reusable components, and
                            optimizing application performance.
                          </p>
                          <p>
                            You will work closely with our product and design teams to ensure the technical feasibility
                            of UI/UX designs and optimize applications for maximum speed and scalability.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h2 className="mb-3 text-lg font-medium">Responsibilities</h2>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Develop new user-facing features using React.js</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Build reusable components and libraries for future use</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Translate designs and wireframes into high-quality code</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Optimize components for maximum performance across devices and browsers</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="mb-3 text-lg font-medium">Requirements</h2>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>
                              Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object
                              model
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Thorough understanding of React.js and its core principles</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Experience with popular React.js workflows (such as Flux or Redux)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Familiarity with newer specifications of ECMAScript</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="mb-3 text-lg font-medium">Nice to have</h2>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Experience with data structure libraries (e.g., Immutable.js)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Knowledge of isomorphic React is a plus</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Familiarity with modern front-end build pipelines and tools</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="mb-3 text-lg font-medium">Benefits</h2>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Competitive salary: {job.salary}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Health, dental, and vision insurance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>401(k) with company match</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Flexible work hours and remote work options</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <span>Professional development and learning opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="company" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                          <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{job.company}</h2>
                          <p className="text-sm text-muted-foreground">
                            Technology • 500-1000 employees • Established 2010
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-medium">About the company</h3>
                        <p className="text-muted-foreground">
                          {job.company} is a leading technology company specializing in innovative solutions for
                          businesses. We are dedicated to creating cutting-edge products that help our clients succeed
                          in the digital age. Our team consists of talented professionals who are passionate about
                          technology and committed to excellence.
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-medium">Company culture</h3>
                        <p className="text-muted-foreground">
                          At {job.company}, we foster a collaborative and inclusive work environment where creativity
                          and innovation thrive. We value diversity of thought and background, and we believe that our
                          differences make us stronger. Our culture is built on trust, respect, and a shared commitment
                          to delivering exceptional results.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Building className="h-5 w-5 text-primary" />
                              <h4 className="font-medium">Company Size</h4>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">500-1000 employees</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-primary" />
                              <h4 className="font-medium">Headquarters</h4>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{job.location}</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-primary" />
                              <h4 className="font-medium">Founded</h4>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">2010</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-primary" />
                              <h4 className="font-medium">Industry</h4>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">Technology</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="apply" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="mb-3 text-lg font-medium">Apply for this position</h2>
                        <p className="text-muted-foreground">
                          Please fill out the form below to apply for the {job.title} position at {job.company}.
                        </p>
                      </div>

                      <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="resume">Resume</Label>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" className="w-full">
                              <FileText className="mr-2 h-4 w-4" />
                              Upload Resume
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">PDF, DOCX or RTF (Max 5MB)</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                          <Textarea
                            id="cover-letter"
                            rows={5}
                            placeholder="Tell us why you're a good fit for this role"
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Submit Application
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Job Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Salary</h4>
                        <p className="text-sm text-muted-foreground">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Job Type</h4>
                        <p className="text-sm text-muted-foreground">{jobType?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Experience</h4>
                        <p className="text-sm text-muted-foreground">{experienceLevel?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Posted</h4>
                        <p className="text-sm text-muted-foreground">{job.postedTime}</p>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Similar Jobs</h3>
                  <div className="space-y-4">
                    {allJobs.slice(0, 3).map((similarJob) => (
                      <Link href={`/jobs/₹{similarJob.slug}`} key={similarJob.id}>
                        <div className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted">
                          <div className="relative h-10 w-10 overflow-hidden rounded-md border">
                            <Image
                              src={similarJob.logo || "/placeholder.svg"}
                              alt={similarJob.company}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary">{similarJob.title}</h4>
                            <p className="text-xs text-muted-foreground">{similarJob.company}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="flex items-center text-xs text-muted-foreground">
                                <MapPin className="mr-1 h-3 w-3" />
                                {similarJob.location}
                              </span>
                              <span className="text-xs">•</span>
                              <span className="text-xs text-muted-foreground">{similarJob.postedTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
