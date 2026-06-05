'use client';
import { IconCirclePlus } from '@tabler/icons-react';
import { sideNaveItems } from '@/lib/constants';
import Logo from './Logo';
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-80 border-r border-orange-200 bg-[#edf4ff] px-5 py-6 lg:flex lg:flex-col">
      <div className="flex items-start gap-4 flex-col justify-center">
        <div className="">
          <Logo />
        </div>
        <div>
          <p className="text-sm font-medium text-[#392317]">Team Workspace</p>
        </div>
      </div>

      {pathname !== '/tasks/create' ? (
        <Button
          onClick={() => router.push('/tasks/create')}
          className="mt-8 flex h-15 w-full items-center justify-center gap-3 rounded-xl bg-[#ff7114] text-lg font-semibold text-[#2d1508] shadow-sm transition hover:bg-[#f06108] cursor-pointer"
        >
          <IconCirclePlus className="size-6" />
          New Task
        </Button>
      ) : (
        ''
      )}

      <nav className="mt-8 space-y-3">
        {sideNaveItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href) && item.href !== '/';

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`flex h-12 w-full items-center gap-3 rounded-lg px-6 text-left text-lg font-semibold transition ${
                isActive
                  ? 'bg-[#ff7114] text-[#291308]'
                  : 'text-[#3b2116] hover:bg-white/70 bg-[#edf4ff]'
              }`}
            >
              <Icon className="size-6" strokeWidth={1.9} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
