import '@/app/globals.css';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ashish Kumar Verma - Portfolio',
  description: 'Software Engineer | Python & Django Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-700 via-blue-500 to-teal-400 text-white`}>
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 relative">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Ashish Kumar Verma
            </h1>
            <p className="text-2xl mb-6 text-gray-200">
              Software Engineer | Python & Django Specialist
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="secondary" size="icon" asChild>
                <Link href="mailto:ashish20301@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/ashish-kumar-verma/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://github.com/ASHISH20301/ASHISH20301" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="https://drive.google.com/file/d/1csjvSXbYmBZiwM5AQT9xF9gRIZurJ2BN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
            <nav>
              <ul className="flex justify-center space-x-4">
                <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
                <li><Link href="/experience" className="hover:text-yellow-300">Experience</Link></li>
                <li><Link href="/projects" className="hover:text-yellow-300">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-yellow-300">Skills</Link></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}