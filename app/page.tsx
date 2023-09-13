import Image from 'next/image'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6">
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}
