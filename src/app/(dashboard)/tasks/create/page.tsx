'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import {
  IconBell,
  IconHelpCircle,
  IconSearch,
  IconX,
} from '@tabler/icons-react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Normal');
  const [dueDate, setDueDate] = useState('');
  const [assignees, setAssignees] = useState([
    { name: 'Alex Rivers', avatar: 'AR', tone: 'from-teal-500 to-cyan-700' },
    { name: 'Maria Kim', avatar: 'MK', tone: 'from-slate-500 to-zinc-800' },
  ]);

  const handleRemoveAssignee = (index: number) => {
    setAssignees(assignees.filter((_, i) => i !== index));
  };

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
              Create Workspace Task
            </h2>
            <p className="mt-3 text-xl text-[#3b2116]">
              Set up your next milestone and assign it to the team roadmap.
            </p>
          </section>

          <section className="grid gap-7 xl:grid-cols-[1fr_380px]">
            {/* Main Form Section */}
            <div className="space-y-6">
              {/* Task Title */}
              <div>
                <label className="block text-base font-semibold text-[#111b30] mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="e.g., Finalize Q3 Marketing Report"
                  className="w-full h-[56px] rounded-xl border border-orange-200 bg-white px-5 py-3 text-lg text-[#09142a] outline-none transition placeholder:text-slate-400 focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-base font-semibold text-[#111b30] mb-2">
                  Detailed Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide context, goals, and necessary links..."
                  rows={6}
                  className="w-full rounded-xl border border-orange-200 bg-white px-5 py-3 text-lg text-[#09142a] outline-none transition placeholder:text-slate-400 focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100 resize-none"
                />
              </div>

              {/* Priority Level */}
              <div>
                <label className="block text-base font-semibold text-[#111b30] mb-3">
                  Priority Level
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Urgent', 'Normal', 'Low'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setPriority(level)}
                      className={`h-12 px-6 rounded-lg font-semibold transition ${
                        priority === level
                          ? level === 'Urgent'
                            ? 'bg-orange-50 text-orange-600 border-2 border-orange-600'
                            : level === 'Normal'
                              ? 'bg-[#63f27b] text-emerald-800 border-2 border-emerald-600'
                              : 'bg-blue-100 text-blue-700 border-2 border-blue-600'
                          : 'bg-[#f4f7ff] text-[#3b2116] border-2 border-transparent hover:border-orange-200'
                      }`}
                    >
                      {level === 'Urgent' && '⚡ '}
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="space-y-6">
              {/* Deadlines */}
              <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#111b30] mb-4">
                  Deadlines
                </h3>
                <label className="block text-sm font-medium text-[#3b2116] mb-2">
                  DUE DATE
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full h-[44px] rounded-lg border border-orange-200 bg-white px-4 text-[#09142a] outline-none transition focus:border-[#ff7114] focus:ring-4 focus:ring-orange-100"
                  />
                </div>
                <p className="mt-3 text-sm text-[#3b2116] flex items-start gap-2">
                  <span className="mt-1">ℹ️</span>
                  <span>
                    Setting a due date will automatically sync this task to the
                    shared team calendar.
                  </span>
                </p>
              </div>

              {/* Collaborators */}
              <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#111b30] mb-4">
                  Collaborators
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  {assignees.map((assignee, index) => (
                    <div key={index} className="relative group">
                      <div
                        className={`grid size-10 place-items-center rounded-full bg-gradient-to-br ${assignee.tone} text-xs font-bold text-white border-2 border-white shadow-sm`}
                      >
                        {assignee.avatar}
                      </div>
                      <button
                        onClick={() => handleRemoveAssignee(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition shadow-md hover:bg-red-50"
                      >
                        <IconX className="size-3 text-red-600" />
                      </button>
                    </div>
                  ))}
                  {assignees.length < 5 && (
                    <button className="size-10 rounded-full border-2 border-orange-200 flex items-center justify-center text-[#ff7114] font-bold hover:bg-orange-50 transition">
                      +
                    </button>
                  )}
                </div>
                <button className="w-full h-11 rounded-lg border border-orange-200 text-[#ff7114] font-semibold transition hover:bg-orange-50">
                  ➕ Manage Assignees
                </button>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
            <button className="h-12 px-8 rounded-lg border border-orange-200 text-[#3b2116] font-semibold transition hover:bg-orange-50">
              Save as Draft
            </button>
            <button className="h-12 px-12 rounded-lg bg-[#ff7114] text-white font-semibold transition hover:bg-[#f06108] shadow-md">
              Create Task
            </button>
          </section>

          <Footer />
        </div>
      </section>
    </main>
  );
}
