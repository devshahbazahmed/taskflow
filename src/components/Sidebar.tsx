import { IconCirclePlus, IconLogout } from '@tabler/icons-react';
import { navItems } from '@/lib/constants';
import Logo from './Logo';
import { Button } from './ui/button';

export default function Sidebar() {
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

      <Button className="mt-8 flex h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-[#ff7114] text-lg font-semibold text-[#2d1508] shadow-sm transition hover:bg-[#f06108] cursor-pointer">
        <IconCirclePlus className="size-6" />
        New Task
      </Button>

      <nav className="mt-8 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex h-12 w-full items-center gap-3 rounded-lg px-6 text-left text-lg font-semibold transition ${
                item.active
                  ? 'bg-[#ff7114] text-[#291308]'
                  : 'text-[#3b2116] hover:bg-white/70 bg-[#edf4ff]'
              }`}
            >
              <Icon className="size-6" strokeWidth={1.9} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-orange-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full border-2 border-[#ff7114] bg-gradient-to-br from-sky-200 via-slate-700 to-orange-500 text-sm font-bold text-white">
            AR
          </div>
          <div>
            <p className="font-bold text-[#1f110b]">Alex Rivers</p>
            <p className="text-sm text-[#3b2116]">Admin</p>
          </div>
        </div>
        <button className="mt-6 flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#a43700] transition hover:text-[#732400]">
          <IconLogout className="size-4" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
