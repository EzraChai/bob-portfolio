export type ExperienceType = {
  company: string;
  jobTitle: string;
  yearFrom: string;
  yearTill?: string;
  companyLocation: string;
  description: string;
  stack: string[];
};

export default function Experience({
  company,
  jobTitle,
  yearFrom,
  yearTill = "",
  companyLocation,
  description,
  stack,
}: ExperienceType) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold">{company}</div>
        <div className="text-lg">
          {yearFrom} - {yearTill === "" ? "Present" : yearTill}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-2 text-xl font-bold text-lime-400">{jobTitle}</div>
        <div className="text-xl">{companyLocation}</div>
      </div>
      <div className="mt-4 text-lg text-neutral-300">
        <p>{description}</p>
      </div>
      <div className="flex gap-2 mt-4">
        {stack.map((tech, index) => (
          <div key={index} className="px-2 py-1 rounded-full bg-neutral-800">
            {tech}
          </div>
        ))}
      </div>
      <hr className="mt-8 border-neutral-800" />
    </div>
  );
}
