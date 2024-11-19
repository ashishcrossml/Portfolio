import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Hi, I&apos;m <span className="text-blue-500">Ashish Kumar Verma</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        A Software Engineer specializing in Python & Django development, focused on building efficient and scalable backend solutions.
      </p>
      <div className="flex space-x-4">
        <Link href="https://github.com/ASHISH20301">
          <Button variant="outline" size="lg" className="bg-transparent border-gray-700 hover:border-blue-500 hover:text-blue-500">
            <Github className="mr-2" />
            GitHub
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/ashish-kumar-verma/">
          <Button variant="outline" size="lg" className="bg-transparent border-gray-700 hover:border-blue-500 hover:text-blue-500">
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
        </Link>
        <Link href="mailto:ashish20301@gmail.com">
          <Button variant="outline" size="lg" className="bg-transparent border-gray-700 hover:border-blue-500 hover:text-blue-500">
            <Mail className="mr-2" />
            Email
          </Button>
        </Link>
      </div>
    </div>
  )
}