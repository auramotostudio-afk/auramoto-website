import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { PageIntro } from '@/components/layout/PageIntro';
const inter = Inter({ subsets:['latin'], variable:'--font-body' });
const manrope = Manrope({ subsets:['latin'], variable:'--font-heading' });
export const metadata: Metadata = {
  title: 'AuraMoto Detailing Studio',
  description:
    'Restore. Protect. Elevate. Premium automotive detailing, paint correction and ceramic coating studio.',
  icons:{
    icon:'/brand/auramoto-logo.png'
  }
};
export const viewport: Viewport = { width:'device-width', initialScale:1, maximumScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body><PageIntro/><Header/><main>{children}</main></body></html> }
