import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'


const poppins = Poppins({ weight: ['600', '400'], subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to My Course',
  description: 'Created by George Chang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-slate-700'>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
