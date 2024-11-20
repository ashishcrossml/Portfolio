'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' }
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3">
      <ul className="flex justify-center gap-8">
        {navItems.map((item) => (
          <motion.li 
            key={item.href}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href={item.href} 
              className={`transition-colors ${
                pathname === item.href 
                  ? 'text-emerald-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}