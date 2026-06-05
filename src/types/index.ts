export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  icon: string;
  badge?: {
    label: string;
    type: 'success' | 'warning' | 'error';
  };
}

export type SortOption = 'newest' | 'oldest' | 'title' | 'status';
export type StatusFilter = 'all' | 'completed' | 'pending';

export interface FilterBarProps {
  statusFilter: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultCount?: number;
}

export interface HighlightTextProps {
  text: string;
  query?: string;
  className?: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
  isVisible: boolean;
}

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onTaskDeleted: (id: string) => void;
  onTaskUpdated: (id: string, completed: boolean) => void;
  searchQuery?: string;
}
