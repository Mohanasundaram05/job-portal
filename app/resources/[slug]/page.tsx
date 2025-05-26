import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getResourceBySlug, getResourcesByCategory, resourceCategories } from "@/lib/resources-data"

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug)

  if (!resource) {
    notFound()
  }

  // Find the category object to get the icon
  const category = resourceCategories.find((cat) => cat.id === resource.category)
  const CategoryIcon = category?.icon

  // Format the date
  const formattedDate = format(parseISO(resource.publishedDate), "MMMM d, yyyy")

  // Get related resources
  const relatedResources = getResourcesByCategory(resource.category)
    .filter((r) => r.id !== resource.id)
    .slice(0, 3)

  return (
    <div className="container py-8">
      <Link
        href="/resources"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Resources
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {CategoryIcon && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <CategoryIcon className="h-3 w-3" />
                  <span className="capitalize">{resource.category}</span>
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{resource.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{resource.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{resource.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
              aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.</li>
              <li>Eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia.</li>
              <li>Nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
              aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
            <h2>Conclusion</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
              aliquam nisl, eu aliquam nisl nisl eu nisl.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Related Resources</h3>
              <div className="space-y-4">
                {relatedResources.map((related) => (
                  <Link key={related.id} href={`/resources/₹{related.slug}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary line-clamp-2">{related.title}</h4>
                        <p className="text-xs text-muted-foreground">{related.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Separator className="my-4" />
              <Button asChild className="w-full">
                <Link href="/resources">View All Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {resourceCategories
                  .filter((cat) => cat.id !== "all")
                  .map((cat) => (
                    <Link key={cat.id} href={`/resources?category=₹{cat.id}`}>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <cat.icon className="h-3 w-3" />
                        <span className="capitalize">{cat.name}</span>
                      </Badge>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
