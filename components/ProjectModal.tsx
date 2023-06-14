import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import type { ProjectProps } from "@/components/Project";
import Image from "next/image";
import TechDisplay from "@/components/TechDisplay";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function ProjectModal({
  title,
  imgSrc,
  code,
  projectLink,
  tech,
  modalContent,
}: ProjectProps) {
  return (
    <DialogContent className=" max-w-[44rem] bg-neutral-800 rounded-2xl overflow-hidden border-0 p-0">
      <div className="relative w-full h-[26rem] ">
        <Image
          className="object-cover object-top"
          fill
          src={imgSrc}
          alt={`${title}'s image.`}
        />
      </div>
      <div className="p-6">
        <div className="text-4xl font-extrabold">{title}</div>
        <TechDisplay tech={tech} />
        <div className="mt-4 text-neutral-200">{modalContent}</div>
        <div className="">
          <div className="mt-8 text-2xl font-extrabold">
            Projects Links<span className="text-lime-500">.</span>
          </div>
          <div className="mt-2 ">
            <Link className="flex items-center group text-lime-500" href={code}>
              <AiFillGithub className="mr-1 text-xl " />
              <div className="group-hover:underline underline-offset-2">
                source code
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
