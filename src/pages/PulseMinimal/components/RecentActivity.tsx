import type { Activity } from '../types';

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return amount < 0 ? `-${formatted}` : `+${formatted}`;
  };

  return (
    <div className="border border-[var(--pm-border)] rounded-lg overflow-hidden">
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className={`flex items-center gap-4 px-6 py-4 hover:bg-[var(--pm-hover-bg)] pm-transition ${
            index !== activities.length - 1 ? 'border-b border-[var(--pm-border)]' : ''
          }`}
        >
          {/* Date */}
          <div className="pm-caption pm-muted w-32 flex-shrink-0">{activity.date}</div>

          {/* Description */}
          <div className="pm-body flex-1">{activity.description}</div>

          {/* Amount */}
          <div
            className={`pm-body font-semibold tabular-nums ${
              activity.type === 'income'
                ? 'text-[var(--pm-success)]'
                : 'text-[var(--pm-fg)]'
            }`}
          >
            {formatAmount(activity.amount)}
          </div>
        </div>
      ))}
    </div>
  );
}
