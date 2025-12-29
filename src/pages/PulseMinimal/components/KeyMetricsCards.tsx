import { TrendingUp, TrendingDown } from 'lucide-react';
import type { MetricData } from '../types';

interface KeyMetricsCardsProps {
  metrics: MetricData[];
}

export default function KeyMetricsCards({ metrics }: KeyMetricsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--pm-border)] border border-[var(--pm-border)] rounded-lg overflow-hidden">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[var(--pm-bg)] p-6 hover:bg-[var(--pm-hover-bg)] pm-transition"
        >
          <div className="pm-caption pm-muted mb-2">{metric.label}</div>
          <div className="text-[32px] font-bold leading-none mb-2 tabular-nums">
            {metric.value}
          </div>
          <div className="flex items-center gap-1 pm-caption">
            {metric.trend === 'up' && (
              <TrendingUp size={12} className="text-[var(--pm-success)]" />
            )}
            {metric.trend === 'down' && (
              <TrendingDown size={12} className="text-[var(--pm-error)]" />
            )}
            <span
              className={
                metric.trend === 'up'
                  ? 'text-[var(--pm-success)]'
                  : metric.trend === 'down'
                  ? 'text-[var(--pm-error)]'
                  : 'pm-muted'
              }
            >
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
