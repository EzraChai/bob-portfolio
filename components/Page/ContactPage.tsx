import { AiFillMail } from "react-icons/ai";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-48 pb-80">
      <div className="font-black text-8xl">
        Contact<span className="text-lime-500">.</span>
      </div>
      <div className="max-w-2xl mt-6 text-xl text-center text-neutral-300">
        Shoot me an email if you want to connect! You can also find me on
        Linkedin or Twitter if that's more your speed.
      </div>
      <div className="flex items-center gap-2 mt-4 text-xl font-semibold">
        <AiFillMail />
        juanzhe22@gmail.com
      </div>
    </div>
  );
}
