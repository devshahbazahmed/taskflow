import Link from 'next/link';
import {
  IconAlertTriangle,
  IconCheck,
  IconHeadset,
  IconHome,
} from '@tabler/icons-react';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { footerGroups, quickLinks } from '@/lib/constants';
import Header from '@/components/Header';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#f7f9ff] text-[#32170c]">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-1/2 bg-[radial-gradient(circle_at_center,#dff7ea_0%,rgba(223,247,234,0)_68%)]" />
        <div className="relative mx-auto grid max-w-[1520px] items-center gap-12 px-5 py-16 sm:px-10 lg:min-h-[810px] lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-[#fff0e9] px-5 py-2 text-base font-extrabold text-[#a64000]">
              <IconAlertTriangle className="size-6" strokeWidth={1.8} />
              Error 404
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.16] tracking-normal text-[#08172d] sm:text-6xl lg:text-7xl">
              This task seems to have{' '}
              <span className="text-[#a64000]">vanished</span>.
            </h1>

            <p className="mt-6 max-w-[720px] text-xl leading-9 text-[#3b2116] sm:text-2xl">
              The page you are looking for might have been moved, deleted, or
              never existed in the first place. Don&apos;t worry, even the best
              teams lose track of things occasionally.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-lg bg-[#ff7114] px-9 text-lg font-extrabold text-white shadow-lg shadow-orange-200 transition hover:bg-[#f06108]"
              >
                <IconHome className="size-7" strokeWidth={1.9} />
                Go back home
              </Link>
              <Link
                href="/"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-lg border-2 border-[#00751d] px-9 text-lg font-extrabold text-[#00751d] transition hover:bg-emerald-50"
              >
                <IconHeadset className="size-7" strokeWidth={1.9} />
                Contact Support
              </Link>
            </div>

            <div className="mt-6 h-px max-w-[740px] bg-orange-100" />

            <div className="mt-16">
              <p className="text-lg font-extrabold">Quick Links</p>
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xl font-semibold text-[#00751d] transition hover:text-[#005915]"
                    >
                      <Icon className="size-6" strokeWidth={1.8} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[590px] lg:mr-0">
            <div className="relative rounded-[24px] border-[12px] border-white bg-[#28302f] p-8 shadow-2xl shadow-orange-100">
              <div className="absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_50%_12%,rgba(179,227,202,0.24),transparent_36%),linear-gradient(150deg,#202826_0%,#333c39_58%,#222826_100%)]" />
              <div className="absolute left-20 top-28 size-9 rounded-xl bg-[#b5d7c9] shadow-lg shadow-emerald-900/40 rotate-12" />
              <div className="absolute right-24 top-16 size-11 rounded-full bg-[#b8dfcf] shadow-lg shadow-emerald-900/40 -rotate-12" />
              <div className="absolute left-[39%] top-16 size-1 rounded-full bg-[#d7ad57]" />
              <div className="absolute left-[43%] top-28 size-1 rounded-full bg-[#d7ad57]" />

              <div className="relative flex min-h-[480px] items-center justify-center">
                <div className="absolute left-[12%] top-[30%] h-56 w-72 rotate-[-7deg] rounded-xl border border-[#a66c3c] bg-[#d09d65] shadow-2xl shadow-black/40">
                  <div className="h-9 w-24 rounded-br-xl rounded-tl-xl bg-[#c9945b]" />
                </div>
                <div className="absolute right-[12%] top-[36%] h-48 w-72 rotate-[8deg] rounded-xl bg-[#d7a45f] shadow-xl shadow-black/35" />
                <div className="relative z-10 w-[78%] rotate-[-2deg] rounded-2xl border-t-[7px] border-[#ff7114] bg-[#fffdf9] px-8 py-10 shadow-2xl shadow-black/35">
                  <p className="text-center text-8xl font-light leading-none text-[#a64000] sm:text-[104px]">
                    404
                  </p>
                  <p className="mt-4 text-center text-2xl font-black tracking-normal text-[#08172d]">
                    TASK_NOT_FOUND
                  </p>
                </div>
              </div>

              <div className="absolute -left-10 bottom-28 flex size-16 items-center justify-center rounded-xl bg-white text-3xl font-black text-[#ff7114] shadow-xl shadow-orange-200">
                !
              </div>
              <div className="absolute -right-10 top-28 flex size-16 items-center justify-center rounded-xl bg-white text-[#00751d] shadow-xl shadow-emerald-100">
                <IconCheck className="size-9" strokeWidth={2.4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#edf4ff] text-[#32170c]">
        <div className="mx-auto grid max-w-[1520px] gap-10 px-5 py-12 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[340px] text-xl font-medium leading-7">
              Optimizing team productivity through high-energy focus and
              absolute clarity.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-black text-[#08172d]">
                {group.title}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href="/"
                    className="text-lg font-medium transition hover:text-[#a64000]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </footer>
    </main>
  );
}
