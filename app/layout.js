import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './globals.css'
import "./assets/scss/index.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
          <Header />
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
