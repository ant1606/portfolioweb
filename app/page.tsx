import Image from 'next/image'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import GoUp from '@/components/GoUp'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6">
      <GoUp />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
