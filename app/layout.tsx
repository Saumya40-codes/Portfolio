import type { Metadata } from 'next'
import './globals.css'
import {Providers} from './providers'

export const metadata: Metadata = {
  title: 'Saumya\'s portfolio',
  description: 'Saumya\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en">
      <body>{children}</body>
    </html>
    </Providers>
  )
}
