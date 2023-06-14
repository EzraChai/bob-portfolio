export default function TechDisplay({ tech }: { tech: string[] }) {
  return (
    <div className="flex gap-1 text-lime-400">
      {tech.map((tec, index) => (
        <>
          <div key={index}>{tec}</div>
          {index !== tech.length - 1 && <div className="">-</div>}
        </>
      ))}
    </div>
  );
}
