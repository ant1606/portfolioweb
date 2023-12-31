import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Script from 'next/script'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  variable: '--font-kanit'
})

export const metadata: Metadata = {
  title: 'Anthony Tasayco Pachas',
  description: 'Portafolio Web de Anthony Tasayco Pachas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kanit.className} relative no-scrollbar `}>
        <Navbar />
        <section>
          {children}
        </section>
        <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      </body>
    </html>
  )
}
