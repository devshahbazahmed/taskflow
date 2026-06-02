import {
  IconChartBar,
  IconClipboardList,
  IconDeviceMobile,
  IconHome,
  IconPaletteOff,
  IconSettings,
} from '@tabler/icons-react';

export const navItems = [
  { label: 'Home', icon: IconHome },
  { label: 'Tasks', icon: IconClipboardList, active: true },
  { label: 'Analytics', icon: IconChartBar },
  { label: 'Settings', icon: IconSettings },
];

export const tasks = [
  {
    title: 'Update API Authentication flow',
    priority: 'URGENT',
    priorityTone: 'bg-orange-50 text-orange-600',
    due: 'Today, 11:00 AM',
    team: 'Core Platform',
    icon: IconClipboardList,
    assignees: [
      { name: 'AR', tone: 'from-teal-500 to-cyan-700' },
      { name: 'MK', tone: 'from-slate-500 to-zinc-800' },
    ],
  },
  {
    title: 'Refresh icon library for landing page',
    priority: 'LOW',
    priorityTone: 'bg-emerald-100 text-emerald-700',
    due: 'Tomorrow',
    team: 'Marketing UI',
    icon: IconPaletteOff,
    assignees: [{ name: 'JS', tone: 'from-orange-400 to-rose-500' }],
  },
  {
    title: 'Debug mobile navigation stutter',
    priority: 'URGENT',
    priorityTone: 'bg-orange-50 text-orange-600',
    due: 'Overdue (2h)',
    team: 'Mobile App',
    icon: IconDeviceMobile,
    overdue: true,
    overflow: 4,
  },
  {
    title: 'Update team on-boarding docs',
    priority: 'LOW',
    priorityTone: 'bg-emerald-100 text-emerald-700',
    due: 'Friday',
    team: 'HR/Internal',
    icon: IconClipboardList,
    assignees: [{ name: 'NL', tone: 'from-slate-700 to-emerald-900' }],
  },
];
