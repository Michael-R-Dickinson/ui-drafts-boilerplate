import { Link } from "wouter"

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">UI Drafts</h1>
        <div className="flex flex-col gap-3">
          <Link href="/design1">
            <a className="text-blue-500 hover:underline">Design 1</a>
          </Link>
          <Link href="/pulse">
            <a className="text-blue-500 hover:underline">
              Pulse - Personal Finance Tracker
            </a>
          </Link>
          <Link href="/pulse-minimal">
            <a className="text-blue-500 hover:underline">
              Pulse Minimal - Clean Minimalist Design
            </a>
          </Link>
          <Link href="/pulse-vibrant">
            <a className="text-blue-500 hover:underline">
              Pulse Vibrant - Colorful Data-Rich Design
            </a>
          </Link>
          <Link href="/mobile-poker">
            <a className="text-blue-500 hover:underline">
              Mobile Poker - Wireframe
            </a>
          </Link>
          <Link href="/playing-cards">
            <a className="text-blue-500 hover:underline">
              Playing Cards - Design Exploration
            </a>
          </Link>
          <Link href="/host-device-ui">
            <a className="text-blue-500 hover:underline">
              Host Device UI - Poker Table Display
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
