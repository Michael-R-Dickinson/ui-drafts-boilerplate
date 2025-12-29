import { Search, User, Menu, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navigation({ darkMode, onToggleDarkMode }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between h-[72px] px-8 border-b border-[var(--pm-border)]">
        {/* Logo */}
        <div className="pm-page-title text-xl">Pulse</div>

        {/* Center Navigation */}
        <div className="flex items-center gap-8">
          <a href="#" className="pm-nav-link active pm-body">
            Dashboard
          </a>
          <a href="#" className="pm-nav-link pm-body">
            Subscriptions
          </a>
          <a href="#" className="pm-nav-link pm-body">
            Analytics
          </a>
          <a href="#" className="pm-nav-link pm-body">
            Settings
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            className="pm-button-ghost pm-focus flex items-center justify-center w-9 h-9 rounded-md"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            className="pm-button-ghost pm-focus flex items-center justify-center w-9 h-9 rounded-md"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="pm-button-ghost pm-focus flex items-center justify-center w-9 h-9 rounded-md"
            aria-label="Profile"
          >
            <User size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between h-16 px-4 border-b border-[var(--pm-border)]">
        <div className="pm-section-heading">Pulse</div>
        <div className="flex items-center gap-2">
          <button
            className="pm-button-ghost pm-focus flex items-center justify-center w-9 h-9 rounded-md"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="pm-button-ghost pm-focus flex items-center justify-center w-9 h-9 rounded-md"
            aria-label="Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </>
  );
}
