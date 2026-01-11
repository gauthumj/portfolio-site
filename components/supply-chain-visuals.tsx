export function LogisticsMesh() {
  return (
    <div className="fixed inset-0 opacity-30 h-[100vh] bg-cover -z-10 overflow-hidden pointer-events-none">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              opacity="0.15"
            />
          </pattern>

          <style>{`
            @keyframes flow {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -20;
              }
            }

            @keyframes pulse-node {
              0%, 100% {
                r: 1.2;
                opacity: 1;
              }
              50% {
                r: 1.8;
                opacity: 0.6;
              }
            }

            .animate-flow {
              animation: flow 4s linear infinite;
            }

            .pulse-node {
              animation: pulse-node 2.5s ease-in-out infinite;
            }
          `}</style>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          className="text-foreground"
        />

        <g className="text-primary/40" strokeWidth="0.8" fill="none">
          {/* Route 1: Left - Straight, 45° turn, straight down */}
          <path
            d="M 15 0 L 15 25 L 35 45 L 35 100"
            stroke="currentColor"
            strokeDasharray="2,3"
            className="animate-flow"
          />

          {/* Route 2: Center - 45° turn, straight, 45° turn */}
          <path
            d="M 50 0 L 50 30 L 65 43 L 65 70 L 50 85 L 50 100"
            stroke="currentColor"
            strokeDasharray="2,3"
            className="animate-flow"
            style={{ animationDelay: "-1.3s" }}
          />

          {/* Route 3: Right - Straight, 45° turn, straight down */}
          <path
            d="M 80 0 L 80 28 L 65 43 L 65 100"
            stroke="currentColor"
            strokeDasharray="2,3"
            className="animate-flow"
            style={{ animationDelay: "-2.6s" }}
          />
        </g>

        <g className="text-primary">
          {/* Route 1 nodes */}
          <circle
            cx="15"
            cy="25"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
          />
          <circle
            cx="35"
            cy="45"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "0.3s" }}
          />
          <circle
            cx="35"
            cy="75"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "0.6s" }}
          />

          {/* Route 2 nodes */}
          <circle
            cx="50"
            cy="30"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "0.9s" }}
          />
          {/* <circle
            cx="65"
            cy="45"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "1.2s" }}
          /> */}
          <circle
            cx="65"
            cy="70"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            cx="50"
            cy="85"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "1.8s" }}
          />

          {/* Route 3 nodes */}
          <circle
            cx="80"
            cy="28"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "2.1s" }}
          />
          <circle
            cx="65"
            cy="43"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "2.4s" }}
          />
          <circle
            cx="65"
            cy="75"
            r="1.2"
            fill="currentColor"
            className="pulse-node"
            style={{ animationDelay: "2.7s" }}
          />
        </g>
      </svg>
    </div>
  );
}
