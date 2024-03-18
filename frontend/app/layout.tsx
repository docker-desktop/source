import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AppHeader from './components/layouts/AppHeader'
import AppSidebar from './components/layouts/AppSidebar'
import AppLayout from './components/layouts/AppLayout'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docker Desktop',
  description: 'Docker Desktop for Windows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} flex`}>
        <AppHeader />
        <AppSidebar />
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  )
}
