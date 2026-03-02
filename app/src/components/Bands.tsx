import { useState } from "react";

function Bands({
  count,
  reverse = false,
}: {
  count: number;
  reverse?: boolean;
}) {
  const MIN_HEIGHT = 5;
  const MIN_MULTIPLIER = 1;
  // const MAX_MULTIPLIER = 2;
  const [multiplier] = useState(MIN_MULTIPLIER);
  // const directionRef = useRef(1); // 1 for increasing, -1 for decreasing
  // const animationFrameRef = useRef<number>();

  // useEffect(() => {
  //   let lastTimestamp = 0;
  //   const speed = 0.01; // Adjust speed as needed

  //   const animate = (timestamp: number) => {
  //     if (lastTimestamp === 0) lastTimestamp = timestamp;
  //     const delta = timestamp - lastTimestamp;
  //     lastTimestamp = timestamp;

  //     setMultiplier((prev) => {
  //       const newValue = prev + directionRef.current * speed * speed * delta;

  //       if (newValue >= MAX_MULTIPLIER) {
  //         directionRef.current = -1;
  //         return MAX_MULTIPLIER;
  //       } else if (newValue <= MIN_MULTIPLIER) {
  //         directionRef.current = 1;
  //         return MIN_MULTIPLIER;
  //       }

  //       return newValue;
  //     });

  //     animationFrameRef.current = requestAnimationFrame(animate);
  //   };

  //   animationFrameRef.current = requestAnimationFrame(animate);

  //   return () => {
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="grid gap-2">
      {Array(count)
        .fill(0)
        .map((_, index) => {
          const height = (reverse ? count - index : index) * 5 + MIN_HEIGHT;
          // Larger bands get lighter middle color, smaller bands get darker
          const normalizedSize =
            (height * multiplier - MIN_HEIGHT) / ((count - 1) * 5); // 0 to 1

          // Interpolate RGB values from black (0, 0, 0) to stone-950 (12, 10, 9)
          const r = Math.round(0 + 15 * normalizedSize);
          const g = Math.round(0 + 13 * normalizedSize);
          const b = Math.round(0 + 11 * normalizedSize);

          const viaColor = `rgb(${r}, ${g}, ${b})`;
          // const fromToColor = "rgb(12, 10, 9)"; // stone-950

          return (
            <div
              className="w-full"
              style={{
                height: `${height}px`,
                // background: `linear-gradient(to right, ${fromToColor}, ${viaColor}, ${fromToColor})`,
                background: `${viaColor}`,
              }}
              key={index}
            ></div>
          );
        })}
    </div>
  );
}

export default Bands;
