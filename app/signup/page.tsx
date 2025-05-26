"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight, Mail, Lock, Eye, EyeOff, User, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
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
              <h2 className="mb-4 text-3xl font-bold">Join Our Job Portal Today</h2>
              <p className="mb-8 text-muted-foreground">
                Create an account to access thousands of job opportunities or find the perfect candidates.
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
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">For Job Seekers</h3>
                    <p className="text-sm text-muted-foreground">Find your dream job and apply with one click</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background/80 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">For Recruiters</h3>
                    <p className="text-sm text-muted-foreground">
                      Post jobs and find the perfect candidates for your company
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
                    <h3 className="font-medium">Get Started in Minutes</h3>
                    <p className="text-sm text-muted-foreground">Quick and easy signup process</p>
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
            <h2 className="text-center text-2xl font-bold tracking-tight lg:text-left">Create your account</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground lg:text-left">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign in
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
                  <RadioGroupItem value="jobseeker" id="jobseeker-signup" />
                  <Label htmlFor="jobseeker-signup">Job Seeker</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recruiter" id="recruiter-signup" />
                  <Label htmlFor="recruiter-signup">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
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
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="name@example.com" className="pl-9" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
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

              {userType === "recruiter" && (
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="company" placeholder="Your company" className="pl-9" required />
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Create account as {userType === "jobseeker" ? "Job Seeker" : "Recruiter"}
              </Button>
            </form>

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
