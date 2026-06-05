'use client';

import { ActivityItem } from '@/types';

const activities: ActivityItem[] = [
  {
    id: '1',
    user: 'Sarah',
    action: "completed 'UI Audit'",
    timestamp: '2 minutes ago',
    icon: '✓',
    badge: { label: 'Done', type: 'success' },
  },
  {
    id: '2',
    user: 'Alex',
    action: "flagged 'API Lag'",
    timestamp: '14 minutes ago',
    icon: '!',
    badge: { label: 'Urgent', type: 'error' },
  },
  {
    id: '3',
    user: 'Mark',
    action: "started 'Benchmarking'",
    timestamp: '45 minutes ago',
    icon: '→',
  },
  {
    id: '4',
    user: 'Elena',
    action: "finished 'Sprint Prep'",
    timestamp: '1 hour ago',
    icon: '✓',
    badge: { label: 'Done', type: 'success' },
  },
];

export default function TeamActivity() {
  const getBgColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-orange-50 text-[#ff7114]';
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-orange-100 bg-white p-6 shadow-sm md:col-span-4 lg:col-span-2 bento-hover">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#111b30]">Team Activity</h3>
        <button className="cursor-pointer text-[#7a6b62] hover:text-[#111b30]">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="group flex items-center gap-4">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                activity.badge?.type === 'error'
                  ? 'bg-red-100 text-red-600'
                  : activity.badge?.type === 'success'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-orange-50 text-[#ff7114]'
              }`}
            >
              {activity.badge?.type === 'success' && '✓'}
              {activity.badge?.type === 'error' && '!'}
              {!activity.badge && '→'}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-[#111b30]">
                {activity.user} {activity.action}
              </p>
              <p className="text-xs text-[#7a6b62]">{activity.timestamp}</p>
            </div>

            {activity.badge && (
              <span
                className={`whitespace-nowrap rounded px-2 py-0.5 text-xs font-medium ${getBgColor(
                  activity.badge.type
                )}`}
              >
                {activity.badge.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <button className="rounded-lg border border-[#ff7114]/20 py-2 font-medium text-[#ff7114] transition-colors hover:bg-orange-50">
        View All Activity
      </button>
    </div>
  );
}
