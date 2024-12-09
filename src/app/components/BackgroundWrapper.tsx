'use client';

import { usePathname } from 'next/navigation';

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Sprawdzenie, czy jesteśmy na podstronach contact/biography
  const isDarkPage = pathname === '/contact' || pathname === '/biography';

  // Dynamiczna klasa tła
  const backgroundClass = isDarkPage ? 'bg-black text-white' : 'bg-white text-black';

  return <div className={backgroundClass}>{children}</div>;
}