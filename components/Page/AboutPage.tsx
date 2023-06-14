import Links from "../Links";
import { AiFillCode } from "react-icons/ai";
import SectionHeader from "@/components/SectionHeader";

const techStackAtWork = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "NodeJS",
  "Express",
  "MongoDB",
  "GitHub",
  "Jira",
  "Heroku",
  "AWS",
];

const techStackForFun = [
  "Rust",
  "Tailwind",
  "Spring",
  "Figma",
  "Whimsical",
  "Planetscale",
  "GraphQL",
  "Python",
  "FastAPI",
];

export default function AboutPage() {
  return (
    <div className="pb-12">
      <SectionHeader name={"About"} direction="l" />
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-5 mt-4">
          <p className="text-lg text-neutral-300">
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job. I currently work for Google on
            Google Photos. I also toss in my ¢2 with the design systems teams
            from time to time (once an artist, always an artist, amirite?).
            Outside of work, I still love to paint. Any given Sunday you'll find
            me scribbling some happy clouds with my son ☁️ I even teach courses
            online if you're looking to learn! I'm passively looking for new
            positions where I can merge my love for code with my love for the
            canvas. If you think you've got an opening that I might like, let's
            connect 🔗
          </p>
          <div className="flex items-center gap-4 mt-4 text-lime-500">
            <div className="text-lg font-bold text-lime-500">
              My Links {"->"}
            </div>
            <Links />
          </div>
        </div>
        <div className="col-span-3 mt-4 ml-6">
          <div className="flex items-center gap-2 text-2xl font-black text-white">
            <AiFillCode className="text-lime-500" /> Use At Work
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStackAtWork.map((tech, index) => (
              <Label key={index} name={tech} />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-10 text-2xl font-black text-white">
            <AiFillCode className="text-lime-500" /> Use For Fun
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStackForFun.map((tech, index) => (
              <Label key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ name }: { name: string }) {
  return (
    <div className="px-2 py-1 text-white rounded-full bg-neutral-800">
      {name}
    </div>
  );
}
