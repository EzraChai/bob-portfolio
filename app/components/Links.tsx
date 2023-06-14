import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Links() {
  return (
    <ul className="flex gap-4 -mt-1">
      <li>
        <Link
          href={"https://github.com/EzraChai/"}
          referrerPolicy="no-referrer"
        >
          <AiFillGithub className="text-2xl transition-colors text-neutral-500 hover:text-white" />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.linkedin.com/in/ezra-chai-juan-zhe-9b8b3a209/"}
          referrerPolicy="no-referrer"
        >
          <AiFillLinkedin className="text-2xl transition-colors text-neutral-500 hover:text-white" />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.instagram.com/juanzhx_/"}
          referrerPolicy="no-referrer"
        >
          <AiOutlineInstagram className="text-2xl transition-colors text-neutral-500 hover:text-white" />
        </Link>
      </li>
    </ul>
  );
}
