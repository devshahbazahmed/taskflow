'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import {
  IconBell,
  IconHelpCircle,
  IconSearch,
  IconLoader,
} from '@tabler/icons-react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { createTask } from '@/actions/tasks';
import { useRouter } from 'next/navigation';

export default function CreateTask() {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskTitle.trim() || !description.trim()) {
      setError('Please fill in both title and description');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await createTask(taskTitle, description);
      setSuccess(true);

      // Redirect to tasks page after a short delay
      setTimeout(() => {
        router.push('/tasks');
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create task');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#f6f8ff] text-[#09142a] flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-emerald-100 p-4">
              <svg
                className="size-12 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#111b30]">Task Created!</h2>
          <p className="mt-2 text-[#3b2116]">Redirecting to your tasks...</p>
        </div>
      </main>
    );
  }

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
          <section className="mb-10">
            <h2 className="text-4xl font-extrabold tracking-normal text-[#111b30] md:text-[40px]">
              Create New Task
            </h2>
            <p className="mt-3 text-xl text-[#3b2116]">
              Add a new task to your task list and start tracking it.
            </p>
          </section>

          {error && (
            <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-7 xl:grid-cols-[1fr_380px]"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-base font-semibold text-[#111b30] mb-2">
                  Task Title *
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="e.g., Update API Authentication flow"
                  className="w-full h-[56px] rounded-xl border border-orange-200 bg-white px-5 py-3 text-lg text-[#09142a] outline-none transition placeholder:text-slate-400 focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-[#111b30] mb-2">
                  Detailed Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide context and details for this task..."
                  rows={6}
                  className="w-full rounded-xl border border-orange-200 bg-white px-5 py-3 text-lg text-[#09142a] outline-none transition placeholder:text-slate-400 focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100 resize-none"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#111b30] mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm text-[#3b2116]">
                  <div className="flex items-start gap-2">
                    <span className="mt-1">📌</span>
                    <span>Tasks are saved to your database immediately.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>You can edit and delete tasks anytime.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1">🔄</span>
                    <span>Mark tasks as completed when done.</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="col-span-full mt-6 flex flex-col sm:flex-row gap-4 justify-end">
              <button
                type="button"
                onClick={() => router.back()}
                disabled={isLoading}
                className="h-12 px-8 rounded-lg border border-orange-200 text-[#3b2116] font-semibold transition hover:bg-orange-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="h-12 px-12 rounded-lg bg-[#ff7114] text-white font-semibold transition hover:bg-[#f06108] shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading && <IconLoader className="size-5 animate-spin" />}
                {isLoading ? 'Creating...' : 'Create Task'}
              </button>
            </section>
          </form>

          <Footer />
        </div>
      </section>
    </main>
  );
}
