const PlayingCards = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="h-96 w-64 rounded-lg border-2 border-slate-300 bg-white shadow-lg" />
        <div className="h-96 w-64 rounded-lg border-2 border-slate-300 bg-white shadow-lg" />
        <div className="h-96 w-64 rounded-lg border-2 border-slate-300 bg-white shadow-lg" />
        <div className="h-96 w-64 rounded-lg border-2 border-slate-300 bg-white shadow-lg" />
      </div>
    </div>
  )
}

export default PlayingCards
