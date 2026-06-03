import Link from 'next/link';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { faqs, plans } from '@/lib/constants';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#f7f9ff] text-[#071329]">
      <Header />

      <section className="mx-auto max-w-[1480px] px-4 pb-24 pt-20 sm:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h1 className="text-5xl font-black leading-tight tracking-normal sm:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-lg leading-8 text-[#32170c]">
            Choose the plan that fits your workflow. From solo founders to
            global enterprises, TaskFlow scales with your ambition.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[560px] flex-col rounded-[10px] bg-white p-8 shadow-sm ${
                plan.popular
                  ? 'border-2 border-[#ff7114]'
                  : 'border border-orange-200'
              }`}
            >
              {plan.popular ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7114] px-5 py-1.5 text-xs font-extrabold text-white">
                  Most Popular
                </div>
              ) : null}

              <h2 className="text-3xl font-black">{plan.name}</h2>
              <p className="mt-3 text-sm font-medium text-[#32170c]">
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-1">
                <span
                  className={`text-5xl font-black leading-none ${
                    plan.popular ? 'text-[#a64000]' : 'text-[#071329]'
                  }`}
                >
                  {plan.price}
                </span>
                <span className="pb-1 text-base text-[#32170c]">
                  {plan.suffix}
                </span>
              </div>

              <ul className="mt-10 space-y-5">
                {plan.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-[#071329]"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full border-2 border-[#00751d] text-[#00751d]">
                      <IconCheck className="size-3.5" strokeWidth={3} />
                    </span>
                    <span
                      className={
                        plan.popular && index === 0 ? 'font-black' : undefined
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.variant === 'outline' ? 'outline' : 'default'}
                className={`mt-auto h-12 rounded-[6px] text-sm font-extrabold ${
                  plan.variant === 'outline'
                    ? 'border-[#00751d] text-[#00751d] hover:bg-emerald-50'
                    : 'bg-[#ff7114] text-white shadow-lg shadow-orange-200 hover:bg-[#f06108]'
                }`}
              >
                <Link href={plan.name === 'Enterprise' ? '/' : '/tasks'}>
                  {plan.cta}
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 pb-24 sm:px-8">
        <h2 className="text-center text-3xl font-black tracking-normal sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-9 space-y-4">
          {faqs.map((question) => (
            <details
              key={question}
              className="group rounded-[8px] bg-[#edf4ff] px-5 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {question}
                <IconChevronDown className="size-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-6 text-[#4f443e]">
                Yes. TaskFlow keeps billing simple, and changes take effect at
                the start of your next billing cycle.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 pb-28 sm:px-8">
        <div className="rounded-[14px] border border-[#071329] bg-[#172a41] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] bg-[length:32px_32px] px-5 py-16 text-center text-white shadow-sm">
          <h2 className="mx-auto max-w-[920px] text-4xl font-black leading-tight tracking-normal sm:text-6xl">
            Ready to boost your team&apos;s velocity?
          </h2>
          <p className="mt-7 text-lg text-white/90">
            Join over 50,000 teams building the future with TaskFlow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-[6px] bg-[#ff7114] px-9 text-sm font-extrabold text-white hover:bg-[#f06108]"
            >
              <Link href="/tasks">Start Your Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-[6px] border-white px-9 text-sm font-extrabold text-[#172a41] hover:bg-white/10 hover:text-white"
            >
              <Link href="/">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
