import Links from "@/components/Links";

export default function UpperNavBar() {
  return (
    <nav className=" z-[1] fixed w-full h-16 bg-transparent ">
      <div className="h-full ml-16 backdrop-blur-lg">
        <div className="flex items-center justify-between h-full px-8">
          <div className="p-2">
            <Links />
          </div>
          <div className="">
            <button className="px-4 py-2 border-2 rounded-lg ont-bold s border-lime-400 text-lime-400">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
