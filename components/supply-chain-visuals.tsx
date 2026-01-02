export function LogisticsMesh() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 pointer-events-none">
      <svg className="h-full w-full" viewBox="0 0 800 800">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated Network Lines */}
        <g className="text-primary/30">
          <path
            d="M100,200 L300,400 L500,200 L700,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-flow"
          />
          <path
            d="M100,600 L300,400 L500,600 L700,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-flow"
            style={{ animationDelay: "-5s" }}
          />
          <path
            d="M50,100 L150,300 L250,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="animate-flow"
            style={{ animationDirection: "reverse" }}
          />
        </g>

        {/* Nodes */}
        {[
          [100, 200],
          [300, 400],
          [500, 200],
          [700, 400],
          [100, 600],
          [500, 600],
          [50, 100],
          [150, 300],
          [250, 100],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" className="fill-background stroke-primary/50" strokeWidth="1" />
        ))}
      </svg>
    </div>
  )
}
