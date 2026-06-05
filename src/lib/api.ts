// API utility functions for task management

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const API_BASE_URL = '/api';

/**
 * Fetch all tasks from the API
 */
export async function fetchTasks(): Promise<Task[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    const data: ApiResponse<Task[]> = await response.json();
    if (!data.success || !data.data) {
      throw new Error('Failed to fetch tasks');
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

/**
 * Get a single task by ID
 */
export async function getTask(id: string): Promise<Task> {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch task: ${response.statusText}`);
    }

    const data: ApiResponse<Task> = await response.json();
    if (!data.success || !data.data) {
      throw new Error('Failed to fetch task');
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching task:', error);
    throw error;
  }
}

/**
 * Create a new task
 */
export async function createTask(
  title: string,
  description: string
): Promise<Task> {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create task: ${response.statusText}`);
    }

    const data: ApiResponse<Task> = await response.json();
    if (!data.success || !data.data) {
      throw new Error('Failed to create task');
    }

    return data.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

/**
 * Update a task
 */
export async function updateTask(
  id: string,
  updates: Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Task> {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update task: ${response.statusText}`);
    }

    const data: ApiResponse<Task> = await response.json();
    if (!data.success || !data.data) {
      throw new Error('Failed to update task');
    }

    return data.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
}

/**
 * Delete a task
 */
export async function deleteTask(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete task: ${response.statusText}`);
    }

    const data: ApiResponse<string> = await response.json();
    if (!data.success) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
}
