import Card from "./Card"
import CardBack from "./CardBack"

const HostDeviceUI = () => {
  const potSize = 1250

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-700 via-green-800 to-green-900 p-8">
      <div className="flex flex-col items-center gap-12">
        {/* Top Pot (Upside Down) */}
        <div className="rotate-180">
          <div className="rounded-2xl bg-black/30 px-8 py-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Pot
              </div>
              <div className="text-4xl font-bold text-white">
                ${potSize.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Community Cards */}
        <div className="flex gap-4">
          <Card suit="heart" value="A" />
          <Card suit="spade" value="K" />
          <Card suit="diamond" value="Q" />
          <CardBack />
          <CardBack />
        </div>

        {/* Bottom Pot */}
        <div className="rounded-2xl bg-black/30 px-8 py-4 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              Pot
            </div>
            <div className="text-4xl font-bold text-white">
              ${potSize.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDeviceUI
