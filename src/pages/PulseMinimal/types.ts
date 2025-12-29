export interface MetricData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface Activity {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface Subscription {
  id: string;
  name: string;
  icon: string;
  amount: number;
  billingCycle: string;
  nextBilling: string;
}
