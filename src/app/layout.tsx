import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - Portfolio`,
  description: personalInfo.tagline,
  keywords: [
    'Rahnuma Rued',
    'Computer Science',
    'BRAC University',
    'Software Developer',
    'Database Management',
    'Leadership',
    'Bangladesh',
    'Tech Portfolio'
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${personalInfo.name} - Portfolio`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
