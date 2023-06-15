import Link from "next/link";
import AboutPage from "@/components/Page/AboutPage";
import ProjectsPage from "@/components/Page/ProjectsPage";
import ExperiencePage from "@/components/Page/ExperiencePage";
import ContactPage from "@/components/Page/ContactPage";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-2xl lg:max-w-4xl mx-auto bg-[#111] ">
        <div className="pt-60 ">
          <h1 className="font-black -tracking-wide text-8xl">
            Hey I&apos;m Ezra<span className="text-lime-400">.</span>
          </h1>
          <p className="mt-4 text-2xl ">
            {"I'm a "}
            <span className="text-3xl font-bold text-lime-400">
              Software Engineer
            </span>
          </p>
          <p className="max-w-2xl mt-2 text-lg text-neutral-300 ">
            I&apos;ve spent the last 5 years building and scaling software for
            some pretty cool companies. I also teach people to paint online
            (incase you&apos;ve got an empty canvas layin&apos; around 🎨).
            Let&apos;s connect!
          </p>
          <div className="mt-8 ">
            <Link
              href={"#Contact"}
              className="px-4 py-3 font-bold text-black rounded-lg bg-lime-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className=" mt-96 max-w-4xl mx-auto bg-[#111]">
          <AboutPage />
          <ProjectsPage />
          <ExperiencePage />
          <ContactPage />
        </div>
      </div>
    </>
  );
}
