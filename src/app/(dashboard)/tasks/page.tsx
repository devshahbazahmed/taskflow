'use client';

import {
  IconBell,
  IconHelpCircle,
  IconPlus,
  IconLoader,
} from '@tabler/icons-react';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Logo from '@/components/Logo';
import TaskCard from '@/components/TaskCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import { useTasks } from '@/hooks/useTasks';
import { useTaskSearch } from '@/hooks/useTaskSearch';
import Link from 'next/link';

export default function Tasks() {
  const { tasks, loading, error, removeTask, updateTaskCompletion } =
    useTasks();
  const {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    filteredTasks,
    resultsCount,
  } = useTaskSearch(tasks);

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;

  return (
    <main className="min-h-screen bg-[#f6f8ff] text-[#09142a]">
      <Sidebar />

      <section className="lg:pl-80">
        <header className="sticky top-0 z-10 border-b border-orange-200 bg-[#f8f9ff]/95 px-5 py-3 backdrop-blur md:px-10">
          <div className="mx-auto flex max-w-[1200px] items-center gap-4">
            <div className="block lg:hidden">
              <Logo />
            </div>

            <div className="hidden w-full max-w-[400px] sm:block">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search tasks..."
              />
            </div>

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
          <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold tracking-normal text-[#111b30] md:text-[40px]">
                Your Tasks
              </h2>
              <p className="mt-2 text-lg text-[#3b2116]">
                {tasks.length} total · {completedCount} completed ·{' '}
                {pendingCount} pending
              </p>
            </div>
            <Link href="/dashboard/tasks/create">
              <button className="flex h-12 items-center gap-2 rounded-lg bg-[#ff7114] px-6 text-base font-semibold text-white transition hover:bg-orange-600">
                <IconPlus className="size-5" />
                New Task
              </button>
            </Link>
          </section>

          {/* Mobile Search Bar */}
          <div className="mt-6 sm:hidden">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search tasks..."
            />
          </div>

          {error && (
            <div className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
              Error loading tasks: {error}
            </div>
          )}

          {loading ? (
            <div className="mt-12 flex flex-col items-center justify-center gap-4 py-12">
              <IconLoader className="size-8 animate-spin text-[#ff7114]" />
              <p className="text-lg text-[#3b2116]">Loading your tasks...</p>
            </div>
          ) : tasks.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50 py-12">
              <p className="text-lg font-semibold text-[#3b2116]">
                No tasks yet
              </p>
              <p className="mt-2 text-[#3b2116]">
                Create your first task to get started
              </p>
              <Link href="/tasks/create">
                <button className="mt-6 flex h-11 items-center gap-2 rounded-lg bg-[#ff7114] px-6 text-base font-semibold text-white transition hover:bg-orange-600">
                  <IconPlus className="size-5" />
                  Create First Task
                </button>
              </Link>
            </div>
          ) : (
            <>
              <section className="mt-6">
                <FilterBar
                  statusFilter={statusFilter}
                  onStatusChange={setStatusFilter}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  resultCount={resultsCount}
                />
              </section>

              {filteredTasks.length === 0 ? (
                <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50 py-12">
                  <p className="text-lg font-semibold text-[#3b2116]">
                    No tasks found
                  </p>
                  <p className="mt-2 text-[#3b2116]">
                    {searchQuery
                      ? 'Try adjusting your search terms'
                      : 'No tasks match your filters'}
                  </p>
                </div>
              ) : (
                <section className="mt-6 overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
                  {filteredTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      completed={task.completed}
                      onTaskDeleted={removeTask}
                      onTaskUpdated={updateTaskCompletion}
                      searchQuery={searchQuery}
                    />
                  ))}
                </section>
              )}
            </>
          )}

          <Footer />
        </div>
      </section>
    </main>
  );
}
