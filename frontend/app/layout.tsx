// app/layout.tsx
import Link from 'next/link';
import './globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';

export const metadata = {
  title: 'CAT Auction',
  description: 'CSC309 Week 12 Code Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
