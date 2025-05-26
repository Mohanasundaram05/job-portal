"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ThumbsUp, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCompanyReviews } from "@/lib/data"

export function CompanyReviews({ companyId }: { companyId: string }) {
  const [sortBy, setSortBy] = useState("recent")

  const reviews = getCompanyReviews(companyId)

  // Sort reviews based on selected option
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "highest") {
      return b.rating - a.rating
    } else {
      return a.rating - b.rating
    }
  })

  // Calculate average ratings
  const avgOverall = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const avgWorkLife = reviews.reduce((sum, review) => sum + review.workLifeBalance, 0) / reviews.length
  const avgCompensation = reviews.reduce((sum, review) => sum + review.compensation, 0) / reviews.length
  const avgCulture = reviews.reduce((sum, review) => sum + review.culture, 0) / reviews.length

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
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <h3 className="text-lg font-medium">Review Summary</h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold">{avgOverall.toFixed(1)}</div>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ₹{
                      star <= Math.round(avgOverall) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Based on {reviews.length} reviews</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Work-Life Balance</span>
                  <span className="font-medium">{avgWorkLife.toFixed(1)}</span>
                </div>
                <Progress value={avgWorkLife * 20} className="h-2" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Compensation</span>
                  <span className="font-medium">{avgCompensation.toFixed(1)}</span>
                </div>
                <Progress value={avgCompensation * 20} className="h-2" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Company Culture</span>
                  <span className="font-medium">{avgCulture.toFixed(1)}</span>
                </div>
                <Progress value={avgCulture * 20} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Write a Review</Button>
          </CardFooter>
        </Card>

        {/* Reviews list */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Employee Reviews</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Reviews</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="negative">Critical</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <ReviewsList reviews={sortedReviews} />
            </TabsContent>

            <TabsContent value="positive" className="mt-4">
              <ReviewsList reviews={sortedReviews.filter((review) => review.rating >= 4)} />
            </TabsContent>

            <TabsContent value="negative" className="mt-4">
              <ReviewsList reviews={sortedReviews.filter((review) => review.rating <= 2)} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function ReviewsList({ reviews }: { reviews: any[] }) {
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

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No reviews found</h3>
        <p className="text-muted-foreground mt-2">There are no reviews in this category</p>
      </div>
    )
  }

  return (
    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
      {reviews.map((review) => (
        <motion.div key={review.id} variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{review.author}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ₹{
                        star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <h5 className="font-medium">{review.title}</h5>
              <p className="text-sm text-muted-foreground">{review.content}</p>

              <div className="pt-2">
                <h6 className="text-sm font-medium mb-2">Pros & Cons</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-green-600">Pros</p>
                    <p className="text-sm text-muted-foreground">{review.pros}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-red-600">Cons</p>
                    <p className="text-sm text-muted-foreground">{review.cons}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <span>{review.date}</span>
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4" />
                Helpful ({review.helpfulCount})
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
