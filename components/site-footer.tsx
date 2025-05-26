import Link from "next/link"
import { Briefcase } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12 bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-bold">
          <Briefcase className="h-5 w-5 text-primary" />
          SnapJobs
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} SnapJobs. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
