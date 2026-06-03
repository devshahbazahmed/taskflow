import Link from 'next/link';
import {
  IconArrowNarrowRight,
  IconBolt,
  IconCheck,
  IconMessage,
  IconRefresh,
  IconSparkles,
  IconWorld,
} from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { milestones } from '@/lib/constants';

export default function Features() {
  return (
    <main className="min-h-screen bg-white text-[#071329]">
      <Header />

      <section className="mx-auto max-w-[1180px] px-4 py-24 text-center sm:px-8">
        <h1 className="text-5xl font-black leading-tight tracking-normal sm:text-6xl">
          Productivity, <span className="text-[#a64000]">Perfected.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[650px] text-lg leading-8 text-[#4f443e]">
          Experience a refined way to manage projects. Minimal effort, maximum
          clarity, and seamless team flow.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="h-12 rounded-full bg-[#a64000] px-9 text-sm font-extrabold text-white shadow-lg shadow-orange-200 hover:bg-[#8b3500]"
          >
            <Link href="/tasks">Get Started Free</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-orange-200 px-9 text-sm font-bold text-[#32170c] hover:bg-orange-50"
          >
            <Link href="/pricing">View Showcase</Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-16 px-4 py-28 sm:px-8 lg:grid-cols-2">
          <div className="rounded-[18px] border border-orange-100 bg-white p-4 shadow-sm">
            <div className="flex min-h-[440px] items-center justify-center rounded-[14px] bg-[radial-gradient(circle_at_center,#ffffff_0%,#e9ecec_68%,#dfe2e2_100%)] p-10">
              <div className="relative h-72 w-full max-w-[390px]">
                <div className="absolute left-8 top-10 h-52 w-64 rounded-t-[10px] border-[10px] border-[#e8ece9] bg-[#123c39] shadow-2xl shadow-slate-400/30">
                  <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-3 p-4 text-[#70b9aa]">
                    <div className="space-y-3">
                      <div className="h-2 w-20 rounded-full bg-[#70b9aa]/70" />
                      <div className="h-10 rounded bg-[#70b9aa]/20" />
                      <div className="h-2 w-24 rounded-full bg-[#70b9aa]/50" />
                      <div className="h-2 w-16 rounded-full bg-[#70b9aa]/35" />
                    </div>
                    <div className="space-y-2">
                      {[68, 42, 82, 54, 76].map((width) => (
                        <div
                          key={width}
                          className="h-5 rounded bg-[#70b9aa]/20"
                          style={{ width: `${width}%` }}
                        />
                      ))}
                      <IconArrowNarrowRight className="ml-auto mt-4 size-8 rotate-[-28deg] text-[#d36d30]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-28 h-5 w-28 rounded-full bg-[#242826] shadow-xl" />
                <div className="absolute bottom-8 left-36 h-16 w-12 bg-[#dfe5e1]" />
                <div className="absolute right-5 top-12 h-64 w-16 rounded-[18px] border-[8px] border-[#203c39] bg-[#16423e] p-2 shadow-xl">
                  <div className="mb-4 h-2 w-8 rounded-full bg-[#88bfb1]" />
                  <div className="space-y-3">
                    {[28, 38, 24, 34, 30].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="rounded bg-[#75b5a7]/30"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e5f8ee] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#00751d]">
              <IconRefresh className="size-4" strokeWidth={1.9} />
              Real-time Sync
            </div>
            <h2 className="mt-8 max-w-[520px] text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Work together in{' '}
              <span className="text-[#00751d]">perfect harmony.</span>
            </h2>
            <p className="mt-7 max-w-[560px] text-base leading-7 text-[#4f443e]">
              Eliminate lag and friction. Our engine ensures every edit,
              comment, and status update propagates instantly to every teammate,
              everywhere.
            </p>
            <div className="mt-8 flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#dff6e9] text-[#00751d]">
                <IconCheck className="size-5" strokeWidth={2.3} />
              </div>
              <div>
                <h3 className="font-bold">Zero-Latency Editing</h3>
                <p className="mt-1 text-sm leading-6 text-[#4f443e]">
                  Multi-user cursor tracking and instant state synchronization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-16 px-4 py-28 sm:px-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0e8] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#a64000]">
            <IconSparkles className="size-4" strokeWidth={1.9} />
            Smart Analytics
          </div>
          <h2 className="mt-8 max-w-[620px] text-4xl font-black leading-tight tracking-normal">
            Insightful data, <span className="text-[#a64000]">zero noise.</span>
          </h2>
          <p className="mt-7 max-w-[560px] text-base leading-7 text-[#4f443e]">
            Stop guessing. TaskFlow translates your project velocity into
            actionable insights, helping you predict bottlenecks before they
            happen.
          </p>

          <div className="mt-9 rounded-[16px] border border-orange-100 bg-white p-7 shadow-sm">
            <IconBolt className="size-6 text-[#a64000]" strokeWidth={1.9} />
            <h3 className="mt-5 font-black">Predictive Timelines</h3>
            <p className="mt-3 max-w-[430px] text-sm leading-6 text-[#4f443e]">
              AI-driven forecasts based on your team&apos;s historical
              performance.
            </p>
          </div>
        </div>

        <div className="rounded-[18px] border border-orange-100 bg-[#fbfcfd] p-8 shadow-sm">
          <div className="space-y-5 rounded-[14px] bg-white p-6">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-[12px] border border-orange-100 bg-white px-5 py-5"
              >
                <div className="flex items-center gap-3">
                  <span className={`size-3 rounded-full ${item.status}`} />
                  <span className="font-bold">{item.label}</span>
                </div>
                <span
                  className={`text-sm font-bold ${
                    item.value === 'In Progress'
                      ? 'text-[#a64000]'
                      : item.value === '94%'
                        ? 'text-[#00751d]'
                        : 'text-[#4f443e]'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-8">
        <div className="rounded-[28px] bg-[#071b31] px-6 py-16 text-center text-white shadow-sm">
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl">
            Ready to elevate your flow?
          </h2>
          <p className="mt-7 text-sm text-white/80">
            Join thousands of teams shipping faster with TaskFlow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[#c45400] px-9 text-sm font-extrabold text-white hover:bg-[#a64000]"
            >
              <Link href="/tasks">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/50 px-9 text-sm font-bold text-[#071b31] hover:bg-white/10 hover:text-white"
            >
              <Link href="/pricing">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-4 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[330px] text-sm leading-6 text-[#4f443e]">
              A premium, minimalistic project management experience for modern
              teams.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#32170c]">
              Product
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm text-[#4f443e]">
              <Link
                href="/features"
                className="transition hover:text-[#a64000]"
              >
                Features
              </Link>
              <Link href="/pricing" className="transition hover:text-[#a64000]">
                Pricing
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#32170c]">
              Support
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm text-[#4f443e]">
              <Link href="/" className="transition hover:text-[#a64000]">
                Help
              </Link>
              <Link href="/" className="transition hover:text-[#a64000]">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1180px] border-t border-orange-100 px-4 sm:px-8">
          <div className="flex items-center justify-between py-6 text-xs text-[#4f443e]">
            <Footer />
            <div className="hidden items-center gap-5 md:flex">
              <IconWorld className="size-5" strokeWidth={1.8} />
              <IconMessage className="size-5" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
