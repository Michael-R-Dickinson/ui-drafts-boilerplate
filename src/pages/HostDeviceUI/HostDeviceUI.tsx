import Card from "./Card"
import CardBack from "./CardBack"

const HostDeviceUI = () => {
  const potSize = 1250

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-green-700 via-green-800 to-green-900 p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Top Pot (Upside Down) */}
        <div className="rotate-180">
          <div className="rounded-xl bg-black/30 px-4 py-2 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Pot
              </div>
              <div className="text-2xl font-bold text-white">
                ${potSize.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Community Cards */}
        <div className="flex gap-2">
          <Card suit="heart" value="A" />
          <Card suit="spade" value="K" />
          <Card suit="diamond" value="Q" />
          <CardBack />
          <CardBack />
        </div>

        {/* Bottom Pot */}
        <div className="rounded-xl bg-black/30 px-4 py-2 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Pot
            </div>
            <div className="text-2xl font-bold text-white">
              ${potSize.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDeviceUI
