import Link from "next/link";

export default function LeftNavBar() {
  return (
    <div className=" z-[2] fixed w-16 min-h-screen bg-black ">
      <div className="p-2 ">
        <div className=" bg-[#080808] p-2 rounded-xl">
          <span className="ml-2 text-2xl font-extrabold ">E</span>
          <span className="text-2xl font-black text-lime-400">.</span>
        </div>
      </div>
      <ul className="flex items-center gap-6 mt-10 rotate-90 select-none">
        <li>
          <Link
            scroll={false}
            className=" text-neutral-300 hover:text-white px-2 py-4 transition border-t-2 border-transparent cursor-pointer hover:bg-[#080808] hover:border-lime-400"
            href={"#About"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="text-neutral-300 hover:text-white px-2 py-4 transition border-t-2 border-transparent cursor-pointer hover:bg-[#080808] hover:border-lime-400"
            href={"#Projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="text-neutral-300 hover:text-white px-2 py-4 transition border-t-2 border-transparent cursor-pointer hover:bg-[#080808] hover:border-lime-400"
            href={"#Exp."}
          >
            Exp.
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="text-neutral-300 hover:text-white px-2 py-4 transition border-t-2 border-transparent cursor-pointer hover:bg-[#080808] hover:border-lime-400"
            href={"#Contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
