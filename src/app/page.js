'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import TypewriterText from '@/components/TypewriterText'
import aboutData from '@/data/about.json'

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-black/20 p-8 rounded-xl border border-white/10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I&apos;m{' '}
          <TypewriterText 
            text={aboutData.name}
            className="text-emerald-400"
          />
        </h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {aboutData.title}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Link href={aboutData.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/5 border-emerald-500/50 hover:border-emerald-400 hover:text-emerald-400 backdrop-blur-lg">
              <Github className="mr-2" />
              GitHub
            </Button>
          </Link>
          <Link href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/5 border-emerald-500/50 hover:border-emerald-400 hover:text-emerald-400 backdrop-blur-lg">
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
          </Link>
          <Link href={`mailto:${aboutData.email}`}>
            <Button variant="outline" size="lg" className="bg-white/5 border-emerald-500/50 hover:border-emerald-400 hover:text-emerald-400 backdrop-blur-lg">
              <Mail className="mr-2" />
              Email
            </Button>
          </Link>
          <Link href={aboutData.cvLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/5 border-emerald-500/50 hover:border-emerald-400 hover:text-emerald-400 backdrop-blur-lg">
              <Download className="mr-2" />
              Download CV
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}