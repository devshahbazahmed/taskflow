import { Task } from '../types';

const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Search tasks by title and description
 * @param tasks - Array of tasks to search
 * @param query - Search query string
 * @returns Filtered array of tasks matching the query
 */
export function searchTasks(tasks: Task[], query: string): Task[] {
  if (!query || query.trim() === '') {
    return tasks;
  }

  const lowerQuery = query.toLowerCase().trim();
  const escapedQuery = escapeRegExp(lowerQuery);
  const regex = new RegExp(escapedQuery, 'i');

  return tasks.filter((task) => {
    const titleMatch = regex.test(task.title);
    const descriptionMatch = regex.test(task.description);
    return titleMatch || descriptionMatch;
  });
}

/**
 * Find all occurrences of search term in text
 * Returns array of {text, isMatch} objects for rendering
 */
export function getHighlightSegments(
  text: string,
  query: string
): Array<{ text: string; isMatch: boolean }> {
  if (!query || query.trim() === '') {
    return [{ text, isMatch: false }];
  }

  const segments: Array<{ text: string; isMatch: boolean }> = [];
  let lastIndex = 0;

  let match;
  const regex = new RegExp(escapeRegExp(query.toLowerCase()), 'gi');

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      segments.push({
        text: text.substring(lastIndex, match.index),
        isMatch: false,
      });
    }

    // Add highlighted match
    segments.push({
      text: text.substring(match.index, match.index + match[0].length),
      isMatch: true,
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      text: text.substring(lastIndex),
      isMatch: false,
    });
  }

  return segments.length > 0 ? segments : [{ text, isMatch: false }];
}

/**
 * Filter tasks by status
 */
export function filterTasksByStatus(
  tasks: Task[],
  status: 'all' | 'completed' | 'pending'
): Task[] {
  switch (status) {
    case 'completed':
      return tasks.filter((task) => task.completed);
    case 'pending':
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}

/**
 * Sort tasks by various criteria
 */
export function sortTasks(
  tasks: Task[],
  sortBy: 'newest' | 'oldest' | 'title' | 'status'
): Task[] {
  const sorted = [...tasks];

  switch (sortBy) {
    case 'newest':
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'oldest':
      return sorted.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'status':
      return sorted.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
    default:
      return sorted;
  }
}

/**
 * Combine search and filter operations
 */
export function filterAndSearchTasks(
  tasks: Task[],
  searchQuery: string,
  status: 'all' | 'completed' | 'pending' = 'all',
  sortBy: 'newest' | 'oldest' | 'title' | 'status' = 'newest'
): Task[] {
  let filtered = filterTasksByStatus(tasks, status);
  filtered = searchTasks(filtered, searchQuery);
  filtered = sortTasks(filtered, sortBy);
  return filtered;
}
