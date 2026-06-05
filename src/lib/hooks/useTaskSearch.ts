'use client';

import { useState, useMemo } from 'react';
import {
  searchTasks,
  filterTasksByStatus,
  sortTasks,
} from '@/lib/utils/search';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

type SortOption = 'newest' | 'oldest' | 'title' | 'status';
type StatusFilter = 'all' | 'completed' | 'pending';

export function useTaskSearch(allTasks: Task[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  // Calculate filtered and sorted tasks
  const filteredTasks = useMemo(() => {
    let results = filterTasksByStatus(allTasks, statusFilter);
    results = searchTasks(results, searchQuery);
    results = sortTasks(results, sortBy);
    return results;
  }, [allTasks, searchQuery, statusFilter, sortBy]);

  const resultsCount = filteredTasks.length;
  const hasSearchQuery = searchQuery.trim() !== '';

  return {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    filteredTasks,
    resultsCount,
    hasSearchQuery,
  };
}
