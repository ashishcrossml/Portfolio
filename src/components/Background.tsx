'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#0a192f]" />
      <motion.div 
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-blue-900/30 to-purple-900/30" />
      </motion.div>
      <div className="fixed inset-0 -z-10 opacity-10 bg-[url('/grid.svg')] bg-repeat" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>
    </>
  )
}