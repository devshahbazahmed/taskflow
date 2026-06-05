'use client';

import { useState } from 'react';
import CompletionChart from '@/components/analytics/CompletionChart';
import {
  AvgTimeCard,
  ProjectHealthCard,
  DeepWorkCard,
} from '@/components/analytics/MetricCards';
import TeamActivity from '@/components/analytics/TeamActivity';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly' | 'yearly'>(
    'weekly'
  );

  return (
    <main className="min-h-screen bg-[#f7f9ff] pb-24">
      <Sidebar />
      <section className="lg:pl-80">
        <header className="sticky top-0 z-40 border-b border-orange-100 bg-[#f7f9ff] px-4 sm:px-8">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between py-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                Performance Insights
              </span>
              <h2 className="text-3xl font-bold text-[#111b30]">
                Workspace Analytics
              </h2>
            </div>

            <div className="flex gap-1 rounded-lg border border-orange-100 bg-white p-1">
              {['weekly', 'monthly', 'yearly'].map((range) => (
                <button
                  key={range}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => setTimeRange(range as any)}
                  className={`rounded-md px-4 py-1.5 text-xs font-bold transition-all ${
                    timeRange === range
                      ? 'bg-white shadow-sm text-[#ff7114]'
                      : 'text-[#7a6b62] hover:text-[#111b30]'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
            <CompletionChart />

            <AvgTimeCard />

            <ProjectHealthCard />

            <DeepWorkCard />

            <TeamActivity />
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}
