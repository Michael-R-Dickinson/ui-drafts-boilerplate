import Card from "./Card"

const PlayingCards = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <div className="grid grid-cols-2 gap-8">
        <Card suit="club" value="8" />
        <Card suit="diamond" value="A" />
        <Card suit="heart" value="K" />
        <Card suit="spade" value="Q" />
      </div>
    </div>
  )
}

export default PlayingCards
