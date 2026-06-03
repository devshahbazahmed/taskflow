import {
  IconBell,
  IconBolt,
  IconCalendar,
  IconChevronDown,
  IconExclamationCircle,
  IconHelpCircle,
  IconSearch,
} from '@tabler/icons-react';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { tasks } from '@/lib/constants';
import Logo from '@/components/Logo';

export default function Tasks() {
  return (
    <main className="min-h-screen bg-[#f6f8ff] text-[#09142a]">
      <Sidebar />

      <section className="lg:pl-80">
        <header className="sticky top-0 z-10 border-b border-orange-200 bg-[#f8f9ff]/95 px-5 py-3 backdrop-blur md:px-10">
          <div className="mx-auto flex max-w-[1200px] items-center gap-4">
            <div className="block lg:hidden">
              <Logo />
            </div>

            <label className="relative hidden w-full max-w-[400px] sm:block">
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-[#3c281d]" />
              <input
                className="h-[52px] w-full rounded-xl border border-orange-200 bg-white/60 pl-12 pr-4 text-lg text-[#09142a] outline-none transition placeholder:text-slate-500 focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100"
                placeholder="Search tasks..."
                type="search"
              />
            </label>

            <div className="ml-auto flex items-center gap-4">
              <button className="relative flex size-10 items-center justify-center rounded-lg text-[#3c281d] transition hover:bg-orange-50">
                <IconBell className="size-6" />
                <span className="absolute right-2 top-2 size-2.5 rounded-full bg-[#ff7114]" />
              </button>
              <button className="flex size-10 items-center justify-center rounded-lg text-[#3c281d] transition hover:bg-orange-50">
                <IconHelpCircle className="size-6" />
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex min-h-[calc(100vh-77px)] max-w-[1200px] flex-col px-5 py-10 md:px-10 lg:px-10">
          <section>
            <h2 className="text-4xl font-extrabold tracking-normal text-[#111b30] md:text-[40px]">
              Good morning, Alex
            </h2>
            <p className="mt-3 text-xl text-[#3b2116]">
              You&apos;ve reached 85% of your weekly target. Keep it up!
            </p>
          </section>

          <section className="mt-11 grid gap-7 xl:grid-cols-[1fr_380px]">
            <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-7 md:flex-row md:items-center">
                <div
                  className="grid size-40 shrink-0 place-items-center rounded-full"
                  style={{
                    background:
                      'conic-gradient(#ff7114 0deg 270deg, #dbe8ff 270deg 360deg)',
                  }}
                >
                  <div className="grid size-[122px] place-items-center rounded-full bg-white">
                    <div className="text-center">
                      <p className="text-3xl font-extrabold">75%</p>
                      <p className="text-sm text-[#3b2116]">Done</p>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold">
                        Weekly Task Progress
                      </h3>
                      <p className="mt-2 text-lg text-[#3b2116]">
                        5 tasks remaining for today&apos;s sprint.
                      </p>
                    </div>
                    <span className="w-fit rounded-full bg-[#63f27b] px-4 py-1.5 text-sm font-medium text-emerald-800">
                      Active Streak: 12 days
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="min-w-28 rounded-lg border border-orange-200 bg-[#f4f7ff] px-5 py-3">
                      <p className="text-sm text-[#3b2116]">Completed</p>
                      <p className="mt-1 text-3xl font-extrabold">15</p>
                    </div>
                    <div className="min-w-28 rounded-lg border border-orange-200 bg-[#f4f7ff] px-5 py-3">
                      <p className="text-sm text-[#3b2116]">Pending</p>
                      <p className="mt-1 text-3xl font-extrabold text-[#ff7114]">
                        05
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#a64000] to-[#b84d08] p-6 text-white shadow-sm">
              <h3 className="text-2xl font-extrabold">Team Sync at 2 PM</h3>
              <p className="mt-4 max-w-xs text-xl leading-relaxed text-orange-50">
                Reviewing Q3 roadmap and the new TaskFlow API documentation.
              </p>
              <button className="mt-6 h-12 rounded-lg bg-white px-8 text-base font-semibold text-[#a43700] transition hover:bg-orange-50">
                Join Meeting
              </button>
            </div>
          </section>

          <section className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid w-full grid-cols-3 rounded-xl bg-[#d9e8ff] p-1.5 sm:w-[370px]">
              {['Active', 'Upcoming', 'Archived'].map((tab, index) => (
                <button
                  key={tab}
                  className={`h-11 rounded-lg text-base font-semibold transition ${
                    index === 0
                      ? 'bg-white text-[#09142a] shadow-sm'
                      : 'text-[#3b2116] hover:bg-white/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto">
              <span className="text-sm text-[#3b2116]">Sort by:</span>
              <button className="flex h-11 items-center gap-2 rounded-lg border border-orange-200 bg-white px-4 text-base font-semibold text-[#22130c] transition hover:bg-orange-50">
                Priority
                <IconChevronDown className="size-5" />
              </button>
            </div>
          </section>

          <section className="mt-5 overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
            {tasks.map((task, index) => {
              const Icon = task.icon;

              return (
                <article
                  key={task.title}
                  className={`grid gap-4 px-5 py-6 sm:grid-cols-[28px_1fr_auto] sm:items-center ${
                    index !== tasks.length - 1
                      ? 'border-b border-orange-200'
                      : ''
                  }`}
                >
                  <button
                    aria-label={`Mark ${task.title} complete`}
                    className="size-7 rounded-md border border-[#8f624b] bg-white transition hover:border-[#ff7114] hover:bg-orange-50"
                  />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-md px-3 py-1 text-xs font-extrabold tracking-wide ${task.priorityTone}`}
                      >
                        {task.priority}
                      </span>
                      <h3 className="text-xl font-extrabold leading-tight text-[#071126] md:text-2xl">
                        {task.title}
                      </h3>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#3b2116]">
                      <span
                        className={`flex items-center gap-1.5 ${
                          task.overdue ? 'text-red-600' : ''
                        }`}
                      >
                        {task.overdue ? (
                          <IconExclamationCircle className="size-4" />
                        ) : (
                          <IconCalendar className="size-4" />
                        )}
                        {task.due}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Icon className="size-4" />
                        {task.team}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pl-0 sm:pl-8">
                    {task.overflow ? (
                      <span className="grid size-9 place-items-center rounded-full bg-[#ff7114] text-sm font-bold text-[#241104]">
                        +{task.overflow}
                      </span>
                    ) : (
                      <div className="flex -space-x-2">
                        {task.assignees?.map((assignee) => (
                          <span
                            key={assignee.name}
                            className={`grid size-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${assignee.tone} text-[11px] font-bold text-white shadow-sm`}
                          >
                            {assignee.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </section>

          <Footer />
        </div>
      </section>
    </main>
  );
}
