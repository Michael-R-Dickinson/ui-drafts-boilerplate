import { useState } from 'react';

interface Player {
  id: string;
  name: string;
  avatar: string;
  status: 'active' | 'called' | 'folded' | 'raised';
  chips: number;
  currentBet?: number;
}

interface Card {
  suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
  value: string;
}

const MobilePoker = () => {
  const [opponents] = useState<Player[]>([
    { id: '1', name: 'Tom', avatar: '', status: 'called', chips: 180, currentBet: 20 },
    { id: '2', name: 'Sarah', avatar: '', status: 'active', chips: 250, currentBet: 20 },
    { id: '3', name: 'Joe', avatar: '', status: 'folded', chips: 190 },
  ]);

  const [pot] = useState(50);
  const [playerBet] = useState(20);
  const [holeCards] = useState<Card[]>([
    { suit: 'hearts', value: '9' },
    { suit: 'spades', value: 'Q' },
  ]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Top Players Section */}
      <div className="pt-8 pb-6 px-4">
        <div className="flex justify-center gap-3">
          {opponents.map((player) => (
            <div key={player.id} className="flex flex-col items-center relative">
              {/* Status Badge */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  player.status === 'folded'
                    ? 'border-gray-600 text-gray-500'
                    : 'border-gray-400 text-gray-300'
                }`}>
                  {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
                </div>
              </div>

              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${
                player.status === 'folded'
                  ? 'border-gray-700 bg-gray-900'
                  : 'border-gray-500 bg-gray-800'
              }`}>
                <div className="w-8 h-8 rounded-full bg-gray-600" />
              </div>

              {/* Player Info */}
              <div className="mt-2 text-center">
                <div className={`text-sm font-medium ${
                  player.status === 'folded' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {player.name}
                </div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-700" />
                  <span className={`text-xs ${
                    player.status === 'folded' ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {player.chips}
                  </span>
                </div>
                {player.currentBet && player.status !== 'folded' && (
                  <div className="flex items-center justify-center gap-1 mt-0.5 px-2 py-0.5 bg-gray-800 rounded-full">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                    <span className="text-[10px] text-gray-400">{player.currentBet}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pot Section */}
      <div className="flex flex-col items-center pt-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-gray-700" />
          <span className="text-xs text-gray-400 tracking-wide">POT</span>
        </div>
        <div className="text-7xl font-light tracking-tight text-white">
          {pot}
        </div>
      </div>

      {/* Curved Table Element - THE HERO */}
      <div className="relative w-full h-40 flex items-start justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 375 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="tableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6a6a6a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4a4a4a" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Outer glow */}
          <path
            d="M 0 80 Q 187.5 -40 375 80"
            stroke="url(#tableGradient)"
            strokeWidth="40"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
          />

          {/* Main curve */}
          <path
            d="M 0 80 Q 187.5 -40 375 80"
            stroke="url(#tableGradient)"
            strokeWidth="3"
            fill="none"
            opacity="0.9"
          />

          {/* Inner highlight */}
          <path
            d="M 0 80 Q 187.5 -40 375 80"
            stroke="#888"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Player Action Indicator */}
      {playerBet > 0 && (
        <div className="flex justify-center -mt-8 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full">
            <div className="w-4 h-4 rounded-full bg-gray-600" />
            <span className="text-sm text-gray-300">{playerBet}</span>
          </div>
        </div>
      )}

      {/* Player Hole Cards */}
      <div className="flex-1 flex items-start justify-center pt-8">
        <div className="flex gap-3">
          {holeCards.map((card, index) => (
            <div
              key={index}
              className="relative"
              style={{
                transform: index === 0 ? 'rotate(-8deg)' : 'rotate(8deg)',
                zIndex: index,
              }}
            >
              {/* Card */}
              <div className="w-28 h-40 bg-white rounded-xl border-2 border-gray-300 shadow-2xl flex flex-col items-center justify-between p-3">
                {/* Top Value */}
                <div className="flex flex-col items-center">
                  <span className={`text-4xl font-bold ${
                    card.suit === 'hearts' || card.suit === 'diamonds'
                      ? 'text-gray-400'
                      : 'text-gray-800'
                  }`}>
                    {card.value}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-700 mt-1" />
                </div>

                {/* Center Suit */}
                <div className="w-10 h-10 rounded-full bg-gray-600" />

                {/* Bottom Value (rotated) */}
                <div className="flex flex-col items-center rotate-180">
                  <span className={`text-4xl font-bold ${
                    card.suit === 'hearts' || card.suit === 'diamonds'
                      ? 'text-gray-400'
                      : 'text-gray-800'
                  }`}>
                    {card.value}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-700 mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pb-8 px-4 pt-8">
        <div className="flex gap-3 max-w-md mx-auto">
          <button className="flex-1 py-4 rounded-xl border-2 border-gray-700 bg-gray-900 text-gray-300 font-medium tracking-wide hover:bg-gray-800 transition-colors">
            FOLD
          </button>
          <button className="flex-1 py-4 rounded-xl border-2 border-gray-600 bg-gray-800 text-white font-medium tracking-wide hover:bg-gray-700 transition-colors">
            RAISE
          </button>
          <button className="flex-1 py-4 rounded-xl border-2 border-gray-500 bg-gray-700 text-white font-medium tracking-wide hover:bg-gray-600 transition-colors">
            CHECK
          </button>
        </div>
      </div>

      {/* Timer indicator */}
      <div className="absolute bottom-32 right-6">
        <div className="w-12 h-12 rounded-full border-2 border-gray-600 bg-gray-900 flex items-center justify-center">
          <span className="text-xs text-gray-400 font-medium">0:34</span>
        </div>
      </div>
    </div>
  );
};

export default MobilePoker;
