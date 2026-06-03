import Link from 'next/link';
import {
  IconBrandSpeedtest,
  IconChartBar,
  IconCheck,
  IconChevronRight,
  IconClipboardCheck,
  IconExternalLink,
  IconGauge,
} from '@tabler/icons-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { footerColumns, features } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9ff] text-[#071329]">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute right-[8%] top-16 h-[420px] w-[520px] bg-[radial-gradient(circle_at_center,rgba(245,216,201,0.72),rgba(245,216,201,0)_67%)]" />
        <div className="absolute right-0 top-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,rgba(213,246,231,0.78),rgba(213,246,231,0)_70%)]" />

        <div className="relative mx-auto grid max-w-[1480px] items-center gap-12 px-4 py-24 sm:px-8 lg:min-h-[640px] lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#69c19a] bg-[#eaf9f2] px-4 py-1.5 text-xs font-bold text-[#006e23]">
              <IconGauge className="size-4" strokeWidth={1.9} />
              v2.0 Now Live
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.15] tracking-normal text-[#071329] sm:text-6xl">
              Master your workflow with{' '}
              <span className="text-[#a64000]">surgical precision.</span>
            </h1>

            <p className="mt-8 max-w-[560px] text-base leading-7 text-[#53413a]">
              TaskFlow eliminates cognitive load by organizing your team&apos;s
              most complex projects into actionable, high-velocity streams of
              progress.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-[6px] bg-[#ff7114] px-8 text-sm font-bold text-[#1e1009] shadow-sm shadow-orange-200 hover:bg-[#f06108]"
              >
                <Link href="/tasks">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 gap-2 rounded-[6px] border-[#00751d] px-8 text-sm font-bold text-[#006e23] hover:bg-emerald-50"
              >
                <Link href="/tasks">
                  <IconBrandSpeedtest className="size-5" strokeWidth={1.8} />
                  View Demo
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_170px]">
            <div className="space-y-4">
              <div className="rounded-[8px] border border-orange-100 bg-white p-7 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Project Health</h2>
                  <IconChartBar
                    className="size-5 text-[#006e23]"
                    strokeWidth={2}
                  />
                </div>

                <div className="overflow-hidden rounded-[6px] border border-[#12342f] bg-[#153b38] p-3">
                  <div className="rounded-[4px] bg-[#f6f7f2] p-3">
                    <div className="mb-3 flex items-center justify-between text-[8px] text-[#87918d]">
                      <span>TaskFlow Index</span>
                      <span>Team / Week / Output</span>
                    </div>
                    <div className="flex h-28 items-end gap-2">
                      {[34, 62, 42, 76, 54, 88, 66, 48, 70, 92].map(
                        (height, index) => (
                          <div
                            key={`${height}-${index}`}
                            className="flex flex-1 items-end gap-1"
                          >
                            <div
                              className="w-full rounded-t-[3px] bg-[#73b7a6]"
                              style={{ height: `${height}%` }}
                            />
                            <div
                              className="w-full rounded-t-[3px] bg-[#f28b42]"
                              style={{
                                height: `${Math.max(24, height - 18)}%`,
                              }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#eef1ec]">
                  <div className="h-full w-3/4 bg-[#00751d]" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#4e423d]">
                  <span>Sprint Completion</span>
                  <span>75%</span>
                </div>
              </div>

              <div className="rounded-[8px] border border-orange-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-[6px] bg-[#e5f3ee] text-[#006e23]">
                      <IconGauge className="size-5" strokeWidth={1.9} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Efficiency Score</p>
                      <p className="text-lg font-black text-[#006e23]">98.2%</p>
                    </div>
                  </div>
                  <IconChevronRight className="size-5" strokeWidth={1.8} />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-rows-[210px_1fr]">
              <div className="rounded-[8px] bg-[#ff7114] p-6 text-[#2a1308] shadow-sm shadow-orange-200">
                <IconClipboardCheck className="size-8" strokeWidth={1.9} />
                <p className="mt-20 text-3xl font-black">124</p>
                <p className="text-sm font-bold">Tasks Done</p>
              </div>

              <div className="rounded-[8px] border border-[#e5eee8] bg-[#f6fffb] p-5">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="size-2 rounded-full bg-[#ff7114]" />
                  Active Now
                </div>
                <div className="mt-6 flex items-center">
                  {['#d9e7ff', '#c7dcff', '#b6d2ff', '#006e23'].map(
                    (color, index) => (
                      <div
                        key={color}
                        className="-ml-2 flex size-8 items-center justify-center rounded-full border-2 border-[#f6fffb] text-[9px] font-black text-white first:ml-0"
                        style={{ backgroundColor: color }}
                      >
                        {index === 3 ? '+5' : ''}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="text-4xl font-black tracking-normal">
            Engineered for focus.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5b504a]">
            We&apos;ve stripped away the noise. Only the tools you need to
            build, scale, and deliver with absolute confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[8px] border border-orange-200 bg-white p-8"
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-[6px] ${feature.tone}`}
                >
                  <Icon className="size-5" strokeWidth={1.9} />
                </div>
                <h3 className="mt-8 text-lg font-black">{feature.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5b504a]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] items-center gap-16 px-4 py-24 sm:px-8 lg:grid-cols-2">
        <div className="rounded-[8px] border border-[#083733] bg-[#123c39] p-3 shadow-lg shadow-slate-200">
          <div className="relative overflow-hidden rounded-[6px] bg-[#efe6d9]">
            <div className="h-72 bg-[linear-gradient(90deg,rgba(19,60,57,0.92)_0_6%,transparent_6%_92%,rgba(19,60,57,0.92)_92%),linear-gradient(180deg,#f7f4ee_0_18%,#dfcfba_18%_22%,#f4eadc_22%_100%)]">
              <div className="absolute left-[12%] top-[22%] h-[48%] w-[1px] bg-[#c9b89f]" />
              <div className="absolute left-[35%] top-[22%] h-[48%] w-[1px] bg-[#c9b89f]" />
              <div className="absolute left-[58%] top-[22%] h-[48%] w-[1px] bg-[#c9b89f]" />
              <div className="absolute bottom-12 left-16 h-28 w-16 rounded-t-full bg-[#377b58]" />
              <div className="absolute bottom-11 left-24 h-20 w-12 rounded-t-full bg-[#67a473]" />
              <div className="absolute bottom-16 left-[35%] size-11 rounded-full bg-[#6f4b34]" />
              <div className="absolute bottom-10 left-[38%] h-24 w-16 rounded-t-[30px] bg-[#23332f]" />
              <div className="absolute bottom-16 left-[54%] size-10 rounded-full bg-[#95633f]" />
              <div className="absolute bottom-10 left-[56%] h-24 w-16 rounded-t-[30px] bg-[#fbefe4]" />
              <div className="absolute bottom-16 left-[68%] size-10 rounded-full bg-[#533524]" />
              <div className="absolute bottom-10 left-[70%] h-24 w-16 rounded-t-[30px] bg-[#173e39]" />
              <div className="absolute bottom-9 left-[24%] h-3 w-[58%] rounded-full bg-[#b98f69]" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-[6px] border border-white/70 bg-white/86 px-5 py-4 shadow-xl shadow-slate-400/20 backdrop-blur">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#dff6e9] text-[#006e23]">
                <IconCheck className="size-5" strokeWidth={2} />
              </div>
              <p className="text-sm font-bold">
                System Status: 100% Operational
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black tracking-normal">
            Visibility like never before.
          </h2>
          <p className="mt-7 max-w-[610px] text-base leading-7 text-[#4f443e]">
            Stop guessing. TaskFlow provides a high-fidelity overview of every
            moving part in your organization. From micro-tasks to global
            milestones, you&apos;re always in control.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-[#4f443e]">
            {[
              'Interactive Gantt charts with 8px precision.',
              'Customizable Kanban boards with smart automation.',
              'Cross-project resource allocation tracking.',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <IconCheck
                  className="size-4 text-[#006e23]"
                  strokeWidth={2.2}
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/tasks"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#a64000] transition hover:text-[#762d00]"
          >
            Explore all management tools
            <IconExternalLink className="size-4" strokeWidth={1.9} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-24 sm:px-8">
        <div className="rounded-[24px] bg-[#cfe2ff] px-6 py-24 text-center sm:px-10">
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl">
            Ready to transform your output?
          </h2>
          <p className="mx-auto mt-8 max-w-[620px] text-sm leading-6 text-[#4e5867]">
            Join 10,000+ high-performance teams who trust TaskFlow to handle
            their most critical operations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-[6px] bg-[#ff7114] px-16 text-lg font-black text-[#1e1009] shadow-lg shadow-orange-300/40 hover:bg-[#f06108]"
            >
              <Link href="/tasks">Start Your Free Trial</Link>
            </Button>
            <p className="text-xs text-[#5e6672]">
              No credit card required. 14-day full access trial.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-24 border-t border-orange-100 bg-white">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-8 max-w-[320px] text-sm leading-6 text-[#5b504a]">
              Precision-engineered task management for teams that demand
              excellence.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[11px] font-black uppercase tracking-[0.12em]">
                {column.title}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href="/"
                    className="text-xs text-[#4f443e] transition hover:text-[#a64000]"
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
