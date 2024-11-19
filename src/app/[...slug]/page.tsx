'use client'; 

import { usePathname } from 'next/navigation';
import About from '../about/page';
import Experience from '../experience/page';
import Projects from '../projects/page';
import Skills from '../skills/page';
import Contact from '../contact/page';

export default function DynamicPage() {
  const pathname = usePathname();
  const page = pathname.split('/').pop(); // Gets the last segment of the path

  switch (page) {
    case 'about':
      return <About />;
    case 'experience':
      return <Experience />;
    case 'projects':
      return <Projects />;
    case 'skills':
      return <Skills />;
    case 'contact':
      return <Contact />;
    default:
      return <div>Page not found</div>;
  }
}
