'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';

type SortOption = 'newest' | 'oldest' | 'title' | 'status';
type StatusFilter = 'all' | 'completed' | 'pending';

interface FilterBarProps {
  statusFilter: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultCount?: number;
}

export default function FilterBar({
  statusFilter,
  onStatusChange,
  sortBy,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: '🕐 Newest First' },
    { value: 'oldest', label: '🕑 Oldest First' },
    { value: 'title', label: '📝 Sort by Title' },
    { value: 'status', label: '✓ Sort by Status' },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="grid w-full grid-cols-3 gap-1 rounded-xl bg-[#d9e8ff] p-1.5 sm:w-auto">
        {(['all', 'completed', 'pending'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onStatusChange(tab)}
            className={`h-11 rounded-lg px-3 text-sm font-semibold transition ${
              statusFilter === tab
                ? 'bg-white text-[#09142a] shadow-sm'
                : 'text-[#3b2116] hover:bg-white/50'
            }`}
          >
            {tab === 'all' && 'All'}
            {tab === 'completed' && 'Done'}
            {tab === 'pending' && 'Pending'}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {resultCount !== undefined && (
          <span className="text-sm text-[#3b2116]">
            {resultCount} task{resultCount !== 1 ? 's' : ''}
          </span>
        )}

        <div className="relative" ref={sortRef}>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex h-11 items-center gap-2 rounded-lg border border-orange-200 bg-white px-4 text-base font-semibold text-[#22130c] transition hover:bg-orange-50"
          >
            {sortOptions.find((opt) => opt.value === sortBy)?.label || 'Sort'}
            <IconChevronDown
              className={`size-5 transition ${isSortOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-orange-200 bg-white shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onSortChange(option.value);
                    setIsSortOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-left text-sm font-medium transition first:rounded-t-lg last:rounded-b-lg ${
                    sortBy === option.value
                      ? 'bg-orange-100 text-[#ff7114]'
                      : 'text-[#3b2116] hover:bg-orange-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
