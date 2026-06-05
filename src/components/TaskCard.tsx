'use client';

import { IconTrash, IconCheck } from '@tabler/icons-react';
import { deleteTask, updateTask } from '@/actions/tasks';
import { useState } from 'react';
import HighlightText from '@/components/HighlightText';
import { TaskCardProps } from '@/types';

export default function TaskCard({
  id,
  title,
  description,
  completed,
  onTaskDeleted,
  onTaskUpdated,
  searchQuery,
}: TaskCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    setIsLoading(true);
    setError(null);

    try {
      await deleteTask(id);
      onTaskDeleted(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleComplete = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await updateTask(id, { completed: !completed });
      onTaskUpdated(id, !completed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="border-b border-orange-200 px-5 py-6 sm:py-4"
      id={`task-${id}`}
    >
      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
      <article className="grid gap-4 sm:grid-cols-[28px_1fr_auto] sm:items-center">
        <button
          onClick={handleToggleComplete}
          disabled={isLoading}
          className={`flex size-7 items-center justify-center rounded-full border-2 transition ${
            completed
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-orange-200 bg-white hover:border-orange-300'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {completed && <IconCheck className="size-4 text-emerald-600" />}
        </button>

        <div className="min-w-0 flex-1">
          <h3
            className={`text-base font-semibold transition ${
              completed ? 'line-through text-gray-400' : 'text-[#09142a]'
            }`}
          >
            <HighlightText text={title} query={searchQuery} />
          </h3>
          <p className="mt-1 text-sm text-[#3b2116]">
            <HighlightText text={description} query={searchQuery} />
          </p>
        </div>

        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="flex size-10 items-center justify-center rounded-lg text-[#3c281d] transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
          title="Delete task"
        >
          <IconTrash className="size-5" />
        </button>
      </article>
    </div>
  );
}
