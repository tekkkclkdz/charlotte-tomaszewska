'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const isDarkPage = pathname === '/contact' || pathname === '/biography';
    const body = document.body;

    // Ustawienie odpowiednich klas
    if (isDarkPage) {
      body.classList.add('bg-black', 'text-white');
      body.classList.remove('bg-white', 'text-black');
    } else {
      body.classList.add('bg-white', 'text-black');
      body.classList.remove('bg-black', 'text-white');
    }
  }, [pathname]);

  return <>{children}</>;
}