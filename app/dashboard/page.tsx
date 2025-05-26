"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, User, Bell, Settings, LogOut, Clock, XCircle, FileText, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JobTypeFilter, jobTypeOptions } from "@/components/job-type-filter"
import { allJobs } from "@/lib/data"

export default function UserDashboardPage() {
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const appliedJobs = allJobs.slice(0, 4)
  const savedJobs = allJobs.slice(4, 8)

  // Filter jobs based on selected job types
  const filteredAppliedJobs =
    selectedJobTypes.length > 0 ? appliedJobs.filter((job) => selectedJobTypes.includes(job.type)) : appliedJobs

  const filteredSavedJobs =
    selectedJobTypes.length > 0 ? savedJobs.filter((job) => selectedJobTypes.includes(job.type)) : savedJobs

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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
              <Briefcase className="h-6 w-6 text-primary" />
            </motion.div>
            SnapJobs
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your job applications and saved listings</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 this week</p>
                <Progress value={75} className="mt-2 h-1" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Next: Tomorrow, 10:00 AM</p>
                <Progress value={30} className="mt-2 h-1" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Add work experience to complete</p>
                <Progress value={85} className="mt-2 h-1" />
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="applied" className="w-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <TabsList>
                  <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
                  <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <JobTypeFilter
                    options={jobTypeOptions}
                    selectedOptions={selectedJobTypes}
                    onChange={setSelectedJobTypes}
                    scrollable={false}
                  />
                </div>
              </div>

              <TabsContent value="applied" className="mt-6">
                <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                  {filteredAppliedJobs.map((job) => (
                    <motion.div key={job.id} variants={item}>
                      <Card>
                        <CardContent className="p-0">
                          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                            <div className="relative h-12 w-12 overflow-hidden rounded-md border">
                              <Image
                                src={job.logo || "/placeholder.svg"}
                                alt={job.company}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <div>
                                  <h3 className="font-semibold">{job.title}</h3>
                                  <p className="text-sm text-muted-foreground">{job.company}</p>
                                </div>
                                <Badge
                                  variant={job.id % 3 === 0 ? "default" : job.id % 3 === 1 ? "secondary" : "outline"}
                                >
                                  {job.id % 3 === 0 ? "In Review" : job.id % 3 === 1 ? "Interview" : "Applied"}
                                </Badge>
                              </div>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                <span className="flex items-center text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Applied {job.postedTime}
                                </span>
                                <span className="text-xs">•</span>
                                <span className="text-muted-foreground">{job.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" asChild>
                                <Link href={`/jobs/₹{job.slug}`}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View Job</span>
                                </Link>
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">More</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>View Application</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    <span>Withdraw Application</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                  {filteredSavedJobs.map((job) => (
                    <motion.div key={job.id} variants={item}>
                      <Card>
                        <CardContent className="p-0">
                          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                            <div className="relative h-12 w-12 overflow-hidden rounded-md border">
                              <Image
                                src={job.logo || "/placeholder.svg"}
                                alt={job.company}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <div>
                                  <h3 className="font-semibold">{job.title}</h3>
                                  <p className="text-sm text-muted-foreground">{job.company}</p>
                                </div>
                                <Badge variant="outline">Saved</Badge>
                              </div>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                <span className="flex items-center text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Saved 2 days ago
                                </span>
                                <span className="text-xs">•</span>
                                <span className="text-muted-foreground">{job.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/jobs/₹{job.slug}`}>Apply Now</Link>
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">More</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    <span>View Job</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    <span>Remove from Saved</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
