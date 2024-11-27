import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charlotte Tomaszewska',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth dark overflow-x-hidden' suppressHydrationWarning={true}>
      <body className="bg-white" >
  {children}
</body>
    </html>
  )
}
