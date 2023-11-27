import { Inter } from 'next/font/google'
import Header from './components/header'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieApp',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  )
}
