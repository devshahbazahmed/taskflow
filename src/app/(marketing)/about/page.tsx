'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { coreValues } from '@/lib/constants';

export default function About() {
  return (
    <main className="w-full">
      <Header />
      <section className="mx-auto max-w-[1480px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[#2f251f] sm:text-5xl lg:text-6xl">
              Productivity with <span className="text-[#ff7114]">Purpose.</span>
            </h1>

            <p className="text-lg leading-relaxed text-[#5a4a3a] sm:text-xl">
              We empower high-performance teams through clarity and absolute
              efficiency. Our mission is to eliminate the noise of modern work,
              letting you focus on what truly matters.
            </p>

            <Button
              asChild
              className="h-11 rounded-lg bg-[#ff7114] px-8 text-base font-semibold text-white hover:bg-[#f06108]"
            >
              <Link href="/tasks">Join the movement</Link>
            </Button>
          </div>

          <div className="relative h-80 w-full lg:h-96">
            <Image
              src="/images/about-hero.png"
              alt="Productivity with Purpose"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 border border-blue-200/50">
            <p className="text-sm font-semibold text-[#a64000] uppercase tracking-wider">
              Trusted Growth
            </p>
            <h2 className="mt-3 text-5xl font-bold text-[#2f251f]">10k+</h2>
            <p className="mt-3 text-[#5a4a3a]">
              Active teams scaling their dreams with TaskFlow.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 border-2 border-white text-sm font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#5a4a3a]">and growing</span>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-100/50 p-8 border border-orange-200/50">
            <p className="text-sm font-semibold text-[#a64000] uppercase tracking-wider">
              Reliability
            </p>
            <h2 className="mt-3 text-5xl font-bold text-[#2f251f]">99.9%</h2>
            <p className="mt-3 text-[#5a4a3a]">
              Infrastructure built for absolute performance stability.
            </p>
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium text-[#5a4a3a]">
                  System Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-16 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2f251f] sm:text-5xl">
            Our Core Values
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#ff7114]"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-xl bg-white p-8 text-center border border-gray-200/50 hover:border-[#ff7114]/30 hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50">
                    <Icon
                      className="h-8 w-8 text-emerald-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2f251f]">
                  {value.title}
                </h3>
                <p className="mt-4 text-[#5a4a3a] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-4 py-16 sm:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#2f251f] sm:text-4xl mb-6">
          Ready to transform your workflow?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#5a4a3a]">
          Join thousands of teams already experiencing the TaskFlow difference.
        </p>
        <Button
          asChild
          className="h-11 rounded-lg bg-[#ff7114] px-8 text-base font-semibold text-white hover:bg-[#f06108]"
        >
          <Link href="/tasks">Get Started Today</Link>
        </Button>
      </section>
      <Footer />
    </main>
  );
}
