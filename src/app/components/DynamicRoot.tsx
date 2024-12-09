'use client';

import { usePathname } from 'next/navigation';

export default function DynamicRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Logika zmiany klas
  const isDarkPage = pathname === '/contact' || pathname === '/biography';
  const bodyClass = isDarkPage ? 'bg-black' : 'bg-white';
  const htmlClass = isDarkPage
    ? '!scroll-smooth dark overflow-x-hidden bg-black'
    : '!scroll-smooth dark overflow-x-hidden bg-white';

  // Aktualizacja klas HTML i BODY
  if (typeof document !== 'undefined') {
    document.documentElement.className = htmlClass;
    document.body.className = bodyClass;
  }

  return <>{children}</>;
}
