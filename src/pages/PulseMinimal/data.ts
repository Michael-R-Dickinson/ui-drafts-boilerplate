import type { MetricData, Activity, Subscription } from './types';

export const metricsData: MetricData[] = [
  {
    label: 'Total Balance',
    value: '$24,891.00',
    change: '+12.5%',
    trend: 'up',
  },
  {
    label: 'Monthly Spend',
    value: '$3,247.89',
    change: '-8.2%',
    trend: 'down',
  },
  {
    label: 'Active Subscriptions',
    value: '12',
    change: '+2',
    trend: 'up',
  },
  {
    label: 'Savings Rate',
    value: '32%',
    change: '+4%',
    trend: 'up',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    date: 'Today, 2:34 PM',
    description: 'Grocery Store - Whole Foods',
    amount: -127.45,
    type: 'expense',
  },
  {
    id: '2',
    date: 'Today, 11:22 AM',
    description: 'Coffee Shop - Blue Bottle',
    amount: -8.50,
    type: 'expense',
  },
  {
    id: '3',
    date: 'Yesterday, 5:15 PM',
    description: 'Salary Deposit',
    amount: 5840.00,
    type: 'income',
  },
  {
    id: '4',
    date: 'Yesterday, 3:40 PM',
    description: 'Restaurant - Tender Greens',
    amount: -42.30,
    type: 'expense',
  },
  {
    id: '5',
    date: 'Dec 27, 9:15 AM',
    description: 'Gas Station - Shell',
    amount: -65.00,
    type: 'expense',
  },
  {
    id: '6',
    date: 'Dec 26, 7:22 PM',
    description: 'Online Shopping - Amazon',
    amount: -149.99,
    type: 'expense',
  },
  {
    id: '7',
    date: 'Dec 26, 2:10 PM',
    description: 'Transfer to Savings',
    amount: -1000.00,
    type: 'expense',
  },
  {
    id: '8',
    date: 'Dec 25, 4:55 PM',
    description: 'Freelance Payment',
    amount: 750.00,
    type: 'income',
  },
];

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    icon: '🎬',
    amount: 15.99,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 5, 2026',
  },
  {
    id: '2',
    name: 'Spotify',
    icon: '🎵',
    amount: 9.99,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 12, 2026',
  },
  {
    id: '3',
    name: 'Apple iCloud',
    icon: '☁️',
    amount: 2.99,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 1, 2026',
  },
  {
    id: '4',
    name: 'Adobe Creative Cloud',
    icon: '🎨',
    amount: 54.99,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 8, 2026',
  },
  {
    id: '5',
    name: 'GitHub Pro',
    icon: '💻',
    amount: 4.00,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 3, 2026',
  },
  {
    id: '6',
    name: 'Notion',
    icon: '📝',
    amount: 10.00,
    billingCycle: 'Monthly',
    nextBilling: 'Jan 15, 2026',
  },
];
