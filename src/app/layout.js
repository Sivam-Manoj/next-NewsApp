import { Inter } from 'next/font/google'
import './globals.css'
import { ContextProvider } from '@/Context/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News App',
  description: 'A news app built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider><body className={inter.className}>{children}</body></ContextProvider>
    </html>
  )
}
