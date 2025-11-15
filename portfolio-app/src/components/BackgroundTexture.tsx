"use client";

const BackgroundTexture = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] dark:opacity-[0.03]">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Hexagonal pattern */}
          <pattern
            id="hexagons"
            x="0"
            y="0"
            width="100"
            height="86.6"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Triangular pattern */}
          <pattern
            id="triangles"
            x="0"
            y="0"
            width="80"
            height="69.3"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="40,0 80,69.3 0,69.3"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
            <polygon
              points="40,69.3 80,0 0,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </pattern>

          {/* Mixed polygonal pattern */}
          <pattern
            id="polygons"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Hexagon */}
            <polygon
              points="60,10 100,30 100,70 60,90 20,70 20,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
            {/* Triangle */}
            <polygon
              points="60,50 80,80 40,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
            {/* Square rotated */}
            <polygon
              points="30,30 50,20 60,40 40,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          </pattern>

          {/* Large hexagons for depth */}
          <pattern
            id="largeHexagons"
            x="0"
            y="0"
            width="200"
            height="173.2"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="100,0 186.6,50 186.6,150 100,200 13.4,150 13.4,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </pattern>

          {/* Small triangles for detail */}
          <pattern
            id="smallTriangles"
            x="0"
            y="0"
            width="40"
            height="34.6"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="20,0 40,34.6 0,34.6"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
            />
          </pattern>
        </defs>

        {/* Layered patterns for depth */}
        <rect width="100%" height="100%" fill="url(#largeHexagons)" />
        <rect width="100%" height="100%" fill="url(#hexagons)" />
        <rect width="100%" height="100%" fill="url(#triangles)" />
        <rect width="100%" height="100%" fill="url(#polygons)" />
        <rect width="100%" height="100%" fill="url(#smallTriangles)" />
      </svg>
    </div>
  );
};

export default BackgroundTexture;
