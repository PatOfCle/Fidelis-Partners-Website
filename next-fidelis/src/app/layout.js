import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fidelis Partners ERP',
  description: "Your ERP system should fit your processes. Not vice versa. Take control of your manufacturing today with the premier unified, flexible, comprehensive ERP system.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Header />
        <div className='app-container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
