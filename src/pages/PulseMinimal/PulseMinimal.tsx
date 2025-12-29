import { useState } from 'react';
import Navigation from './components/Navigation';
import KeyMetricsCards from './components/KeyMetricsCards';
import RecentActivity from './components/RecentActivity';
import SubscriptionsOverview from './components/SubscriptionsOverview';
import { metricsData, recentActivities, subscriptions } from './data';
import './pulse-minimal.css';

export default function PulseMinimal() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('pulse-minimal-dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('pulse-minimal-dark-mode', String(newDarkMode));
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`pulse-minimal min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="pm-page-title mb-2">Dashboard</h1>
          <p className="pm-body pm-muted">{currentDate}</p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12">
          <KeyMetricsCards metrics={metricsData} />
        </div>

        {/* Recent Activity Section */}
        <div className="mb-12">
          <h2 className="pm-section-heading mb-6">Recent Activity</h2>
          <RecentActivity activities={recentActivities} />
        </div>

        {/* Subscriptions Overview Section */}
        <div>
          <h2 className="pm-section-heading mb-6">Active Subscriptions</h2>
          <SubscriptionsOverview subscriptions={subscriptions} />
        </div>
      </main>
    </div>
  );
}
