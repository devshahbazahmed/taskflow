'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { navLinks } from '../lib/constants';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-[#f7f9ff]/95 backdrop-blur">
      <nav className="mx-auto flex h-[62px] max-w-[1480px] items-center justify-between px-4 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-7 text-sm font-medium text-[#2f251f] md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`border-b py-2 transition hover:text-[#a64000] ${
                  active
                    ? 'border-[#a64000] text-[#a64000]'
                    : 'border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden text-sm font-semibold text-[#32170c] transition hover:text-[#a64000] sm:block"
          >
            Login
          </Link>
          <Button
            asChild
            className="h-9 rounded-[6px] bg-[#ff7114] px-5 text-sm font-extrabold text-white hover:bg-[#f06108]"
          >
            <Link href="/tasks">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
