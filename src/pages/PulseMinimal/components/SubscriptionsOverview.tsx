import type { Subscription } from '../types';

interface SubscriptionsOverviewProps {
  subscriptions: Subscription[];
}

export default function SubscriptionsOverview({ subscriptions }: SubscriptionsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subscriptions.map((subscription) => (
        <div
          key={subscription.id}
          className="pm-card cursor-pointer"
        >
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="text-2xl flex-shrink-0">{subscription.icon}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="pm-body font-semibold mb-1">{subscription.name}</div>
              <div className="pm-caption pm-muted mb-2">{subscription.billingCycle}</div>
              <div className="flex items-center justify-between">
                <div className="pm-body font-bold tabular-nums">
                  ${subscription.amount.toFixed(2)}
                </div>
                <div className="pm-caption pm-secondary">
                  {subscription.nextBilling}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
