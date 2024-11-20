import '@/app/globals.css';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Background from '@/components/Background'
import Navigation from '@/components/Navigation'

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
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Background />
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="text-2xl font-bold text-white mb-4 md:mb-0">
              Ashish Kumar Verma
            </Link>
            <Navigation />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}