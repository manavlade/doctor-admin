import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doctor Admin panel',
  description: 'Created with next.js and Tailwind CSS',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
