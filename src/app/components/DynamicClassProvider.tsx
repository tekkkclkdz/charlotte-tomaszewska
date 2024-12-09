'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function DynamicClassProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const isDarkPage = pathname === '/contact' || pathname === '/biography';
  
    // Pobranie referencji do tagów <html> i <body>
    const html = document.documentElement;
    const body = document.body;
  
    // Ustawienie klas dla <html> i <body> w zależności od trybu
    if (isDarkPage) {
      html.className = '!scroll-smooth dark overflow-x-hidden bg-black';
      body.className = 'bg-black';
    } else {
      html.className = '!scroll-smooth dark overflow-x-hidden bg-white';
      body.className = 'bg-white';
    }
  }, [pathname]);

  return <>{children}</>;
}