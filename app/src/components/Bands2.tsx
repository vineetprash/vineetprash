// import { useState } from "react";

function Bands({
  count,
  reverse = false,
}: {
  count: number;
  reverse?: boolean;
}) {
  // const [time] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((t) => t + 0.01);
  //   }, 16);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="grid gap-2">
      {Array(count)
        .fill(0)
        .map((_, index) => {
          const height = (reverse ? count - index : index) * 5 + 5;
          // Calculate gradient: tallest (index 0 or count-1) should be darkest (neutral-900)
          const heightRatio = reverse
            ? (count - index - 1) / (count - 1)
            : index / (count - 1);
          // Map from neutral-900 (23, 23, 23) to neutral-100 (245, 245, 245)
          const grayValue = Math.round(23 + heightRatio * (245 - 23));

          return (
            <div
              className="w-full"
              style={{
                height: `${height}px`,
                background: `rgb(${grayValue}, ${grayValue}, ${grayValue})`,
              }}
              key={index}
            ></div>
          );
        })}
    </div>
  );
}

export default Bands;
