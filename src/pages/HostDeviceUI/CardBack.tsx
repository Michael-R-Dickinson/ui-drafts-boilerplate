const CardBack = () => {
  return (
    <div
      className="relative h-64 w-44 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-600 to-blue-800 p-3 shadow-xl"
      style={{ boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1), 8px 8px 0px 0px rgb(0 0 0 / 0.08)' }}
    >
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-4 gap-2 opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-6 w-6 rounded-full border-2 border-white" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardBack
