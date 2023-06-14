export default function SectionHeader({
  name,
  direction,
}: {
  name: string;
  direction: "l" | "r";
}) {
  if (direction === "r") {
    return (
      <div className="flex items-center justify-between">
        <div className="w-full h-px rounded-md bg-lime-500" />

        <div className="pl-4 text-6xl font-black">
          {name}
          <span className="text-lime-500">.</span>
        </div>
      </div>
    );
  }
  if (direction === "l") {
    return (
      <div className="flex items-center justify-between">
        <div className="pr-4 text-6xl font-black">
          {name}
          <span className="text-lime-500">.</span>
        </div>
        <div className="w-full h-px rounded-md bg-lime-500" />
      </div>
    );
  }
}
