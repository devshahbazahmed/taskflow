import {
  IconBolt,
  IconChartBar,
  IconClipboardList,
  IconDashboard,
  IconDeviceMobile,
  IconHome,
  IconListCheck,
  IconPaletteOff,
  IconShield,
  IconTrendingUp,
  IconUsers,
  IconUsersGroup,
  IconWifi,
} from '@tabler/icons-react';

export const sideNaveItems = [
  { label: 'Home', icon: IconHome, href: '/' },
  { label: 'Tasks', icon: IconClipboardList, active: true, href: '/tasks' },
  { label: 'Analytics', icon: IconChartBar, href: '/analytics' },
];

export const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const plans = [
  {
    name: 'Free',
    description: 'Core essentials for individuals',
    price: '$0',
    suffix: '/mo',
    cta: 'Choose Free',
    variant: 'outline',
    features: [
      'Up to 5 Projects',
      'Basic Task Tracking',
      'Mobile & Desktop Apps',
      'Community Support',
    ],
  },
  {
    name: 'Pro',
    description: 'Advanced productivity for pros',
    price: '$12',
    suffix: '/mo',
    cta: 'Get Started',
    popular: true,
    variant: 'solid',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Custom Workflow Templates',
      'Priority Email Support',
      'Integrations (Slack, Github)',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Team collaboration & security',
    price: '$49',
    suffix: '/mo',
    cta: 'Contact Sales',
    variant: 'outline',
    features: [
      'Custom Team Roles',
      'SSO & SAML Security',
      'Admin Dashboard',
      '24/7 Dedicated Support',
      'Custom API Access',
    ],
  },
];

export const faqs = [
  'Can I upgrade or downgrade at any time?',
  'Is there a free trial for the Pro plan?',
  'What payment methods do you accept?',
  'Do you offer discounts for non-profits?',
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

export const quickLinks = [
  { label: 'Dashboard', href: '/', icon: IconDashboard },
  { label: 'My Tasks', href: '/tasks', icon: IconListCheck },
  { label: 'Team Settings', href: '/settings', icon: IconUsers },
];

export const features = [
  {
    title: 'Real-time Sync',
    description:
      'Your changes are propagated instantly across every device. No refresh, no lag, just seamless flow.',
    icon: IconWifi,
    tone: 'bg-[#e5f3ee] text-[#006e23]',
  },
  {
    title: 'Smart Analytics',
    description:
      'Predictive workload analysis identifies bottlenecks before they happen. Data-driven decision making at its finest.',
    icon: IconChartBar,
    tone: 'bg-[#fff0e8] text-[#a64000]',
  },
  {
    title: 'Team Collaboration',
    description:
      'Unified workspace for teams of all sizes. Comment, tag, and assign with logical precision.',
    icon: IconUsersGroup,
    tone: 'bg-[#e5f3ee] text-[#006e23]',
  },
];

export const footerGroups = [
  {
    title: 'Product',
    links: ['Features', 'Security', 'Enterprise'],
  },
  {
    title: 'Support',
    links: [
      'Contact Support',
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog'],
  },
];

export const footerColumns = [
  { title: 'Product', links: ['Features', 'Integrations', 'API'] },
  { title: 'Company', links: ['About Us', 'Support', 'Careers'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
];

export const milestones = [
  { label: 'Weekly Milestone', value: '94%', status: 'bg-[#00751d]' },
  { label: 'Design Sprint', value: 'In Progress', status: 'bg-[#a64000]' },
  { label: 'Backend Audit', value: 'Planned', status: 'bg-[#9a928b]' },
];

export const coreValues = [
  {
    title: 'Efficiency',
    description:
      'We build tools that minimize friction and maximize meaningful output for every team member.',
    icon: IconBolt,
  },
  {
    title: 'Security',
    description:
      'Your data is your most valuable asset. We guard it with enterprise-grade encryption and protocol.',
    icon: IconShield,
  },
  {
    title: 'Scale',
    description:
      'Whether you are a team of two or two thousand, TaskFlow grows alongside your ambitions.',
    icon: IconTrendingUp,
  },
];
