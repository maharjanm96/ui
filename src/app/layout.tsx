import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Variable.woff',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: 'Das Grüne',
  description: 'Digital agency portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${clashDisplay.variable} antialiased`}>
      <body className="bg-gray-900 overflow-x-hidden">{children}</body>
    </html>
  )
}