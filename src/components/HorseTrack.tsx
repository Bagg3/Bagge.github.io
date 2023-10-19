import React, { useEffect, useState, useRef } from "react";

interface Position {
  top: number;
  left: number;
}

// Component which represents a single position on the track
const TrackPosition: React.FC = () => (
  <div className="bg-slate-500 rounded-full w-10 aspect-square track-position"></div>
);

const HorseTrack: React.FC<{ positionIndex: number; color: string }> = ({
  positionIndex,
  color,
}) => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const movableRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numberOfPositions = 7;

  // Handles the track positions
  useEffect(() => {
    // Collects the top and left positions of all track positions
    const collectPositions = () => {
      if (containerRef.current) {
        const divs = containerRef.current.querySelectorAll(".track-position");
        if (divs) {
          const positionsArray: Position[] = Array.from(divs).map((div) => {
            const position = (div as HTMLElement).getBoundingClientRect();
            return {
              top: position.top,
              left: position.left,
            };
          });
          setPositions(positionsArray);
        }
      }
    };

    // Collects positions initially
    collectPositions();

    // Sets the initial position index
    setCurrentPositionIndex(positionIndex);

    console.log(positionIndex);

    // Refreshes positions on window resize
    window.addEventListener("resize", collectPositions);

    // Cleans up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", collectPositions);
    };
  }, []);

  // Updates position every time the position index prop changes
  useEffect(() => {
    setCurrentPositionIndex(positionIndex);
  }, [positionIndex]);

  // Updates and handles the movable's position
  useEffect(() => {
    if (containerRef.current && movableRef.current && positions.length > 0) {
      const newPosition = positions[currentPositionIndex];

      // Calculates the movable's top and left properties relative to the container
      const containerPosition = containerRef.current.getBoundingClientRect();

      const newStyle: React.CSSProperties = {
        top: `${newPosition.top - containerPosition.top}px`,
        left: `${newPosition.left - containerPosition.left}px`,
      };
      Object.assign(movableRef.current.style, newStyle);
    }
  }, [currentPositionIndex, positions]);

  // Increments the movable's position index
  const changePosition = () => {
    setCurrentPositionIndex((prevIndex) =>
      prevIndex < positions.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Handles the color of the movable
  const handleColor = (): string => {
    if (movableRef.current) {
      switch (color) {
        case "red":
          return "bg-red-500";
        case "blue":
          return "bg-blue-500";
        case "green":
          return "bg-green-500";
        case "yellow":
          return "bg-yellow-500";
      }
    }
    return "bg-white";
  };

  return (
    <div
      className="w-[80%] flex justify-between items-center relative"
      ref={containerRef}
    >
      <div className="bg-slate-500 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-[95%] h-2"></div>
      <div
        ref={movableRef}
        className={`${handleColor()} rounded-full w-10 aspect-square absolute cursor-pointer`}
        onClick={changePosition}
      ></div>
      <div className="flex w-full justify-between items-center gap-5">
        {[...Array(numberOfPositions)].map((_, index) => (
          <TrackPosition key={index} />
        ))}
      </div>
    </div>
  );
};

export default HorseTrack;
