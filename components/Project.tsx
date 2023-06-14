import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectModal from "@/components/ProjectModal";
import TechDisplay from "@/components/TechDisplay";

export type ProjectProps = {
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  description: string;
  modalContent: JSX.Element;
};

export default function Project(props: ProjectProps) {
  return (
    <div className="p-2 ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="h-56 px-8 overflow-hidden rounded-lg cursor-pointer group pt-14 bg-neutral-800">
            <div className="relative w-full overflow-hidden transition rounded-t-lg h-48 group-hover:-translate-y-4 delay-75 group-hover:scale-[1.06] group-hover:rotate-3">
              <Image
                className="object-cover object-top"
                fill
                src={props.imgSrc}
                alt={`${props.title}'s image.`}
              />
            </div>
          </div>
        </DialogTrigger>
        <ProjectModal {...props} />
      </Dialog>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-2">
          <div className="text-2xl font-extrabold whitespace-nowrap">
            {props.title}
          </div>
          <div className="w-full h-px rounded-full bg-lime-500" />
          <div className="text-2xl">
            <Link href={props.code}>
              <AiFillGithub />
            </Link>
          </div>
        </div>
        <TechDisplay tech={props.tech} />
        <div className="mt-2 text-neutral-300">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
