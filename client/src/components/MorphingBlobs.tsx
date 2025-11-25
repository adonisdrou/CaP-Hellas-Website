export default function MorphingBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(130 50% 28% / 0.15)" />
            <stop offset="100%" stopColor="hsl(20 85% 55% / 0.1)" />
          </linearGradient>
        </defs>

        {/* Morphing Blob 1 */}
        <path
          d="M 300 300 Q 400 200, 500 300 T 700 300 Q 750 400, 700 500 T 700 700 Q 600 750, 500 700 T 300 700 Q 250 600, 300 500 T 300 300"
          fill="url(#gradient1)"
          filter="url(#blur)"
          className="animate-blob1"
          opacity="0.3"
        />

        {/* Morphing Blob 2 */}
        <path
          d="M 150 150 Q 250 100, 350 150 T 550 150 Q 600 250, 550 350 T 550 550 Q 450 600, 350 550 T 150 550 Q 100 450, 150 350 T 150 150"
          fill="hsl(20 85% 55% / 0.1)"
          filter="url(#blur)"
          className="animate-blob2"
          opacity="0.25"
        />

        {/* Morphing Blob 3 */}
        <path
          d="M 600 500 Q 700 450, 800 500 T 950 500 Q 980 600, 950 700 T 950 850 Q 850 900, 750 850 T 600 850 Q 570 750, 600 650 T 600 500"
          fill="hsl(130 50% 28% / 0.1)"
          filter="url(#blur)"
          className="animate-blob3"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
