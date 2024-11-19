import '@/app/globals.css';
import { Inter } from 'next/font/google'
import Link from 'next/link'
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
      <body className={`${inter.className} min-h-screen bg-[#0f172a] text-gray-300`}>
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="text-2xl font-bold text-white mb-4 md:mb-0">
              Ashish Kumar Verma
            </Link>
            <nav>
              <ul className="flex justify-center space-x-4">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/experience" className="hover:text-white transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}