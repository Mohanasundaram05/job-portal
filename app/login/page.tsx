"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("jobseeker")

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-primary/10 lg:block">
        <div className="relative flex h-full items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-grid-pattern opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
          />
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
          <div className="relative z-10 max-w-md p-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="mb-4 text-3xl font-bold">Find Your Dream Job Today</h2>
              <p className="mb-8 text-muted-foreground">
                Join thousands of job seekers who have found their perfect career match through our platform.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="rounded-lg bg-background/80 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Easy Application Process</h3>
                    <p className="text-sm text-muted-foreground">Apply to multiple jobs with just a few clicks</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background/80 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Personalized Job Matches</h3>
                    <p className="text-sm text-muted-foreground">
                      Get recommendations based on your skills and preferences
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background/80 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Career Growth Tools</h3>
                    <p className="text-sm text-muted-foreground">Access resources to help advance your career</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                <Briefcase className="h-6 w-6 text-primary" />
              </motion.div>
              SnapJobs
            </Link>
          </div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-center text-2xl font-bold tracking-tight lg:text-left">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground lg:text-left">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6">
              <RadioGroup defaultValue="jobseeker" className="flex gap-4" onValueChange={setUserType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jobseeker" id="jobseeker" />
                  <Label htmlFor="jobseeker">Job Seeker</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recruiter" id="recruiter" />
                  <Label htmlFor="recruiter">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="mt-4">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="name@example.com" className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-9 pr-9"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me for 30 days
                    </Label>
                  </div>
                  <Button type="submit" className="w-full">
                    Sign in as {userType === "jobseeker" ? "Job Seeker" : "Recruiter"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="phone" className="mt-4">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Continue with Phone
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
