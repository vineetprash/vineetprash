function Bands({
  count,
  reverse = false,
}: {
  count: number;
  reverse?: boolean;
}) {
  return (
    <div className="grid gap-2">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            className={` bg-neutral-950 w-full`}
            style={{ height: `${(reverse ? count - index : index) * 5 + 5}px` }}
            key={index}
          ></div>
        ))}
    </div>
  );
}

export default Bands;
