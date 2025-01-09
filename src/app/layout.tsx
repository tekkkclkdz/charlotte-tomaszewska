import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DynamicClassProvider from './components/DynamicClassProvider'; // Importujemy komponent klienta
import CustomCursor from './components/CustomCursor';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Charlotte Tomaszewska',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

        <body className=''>
       
        {/* Dynamiczna zmiana klas */}
        <DynamicClassProvider>{children}</DynamicClassProvider>
      </body>

      
    </html>
  );
}