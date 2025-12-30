const CardBack = () => {
  return (
    <div
      className="relative h-32 w-22 rounded-lg border border-slate-200 bg-gradient-to-br from-blue-600 to-blue-800 p-1.5 shadow-lg"
      style={{ boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 4px 4px 0px 0px rgb(0 0 0 / 0.08)' }}
    >
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-3 gap-1 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-3 w-3 rounded-full border border-white" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardBack
