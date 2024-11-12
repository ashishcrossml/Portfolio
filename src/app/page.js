import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6">Welcome to My Portfolio</h2>
      <p className="text-xl mb-8">
        Explore my work, skills, and experiences through the navigation above.
      </p>
      <Card className="bg-white bg-opacity-10 border-none text-white">
        <CardContent className="flex flex-col sm:flex-row justify-between items-center p-6">
          <p className="text-lg mb-4 sm:mb-0">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="mailto:ashish20301@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}