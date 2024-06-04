import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="  p-8 flex flex-col gap-4 bg-black dark:bg-[#303030] dark:border-t text-white">
        <div className=" grid gap-4 justify-between sm:grid-cols-3">
          <div className="sm:col-span-1 flex flex-col gap-2">
            <div className="text-lg font-medium">Socials</div>
            <div className="flex items-center gap-2.5">
              <Link href="https://github.com/Arijeet10" target="_blank">
                <FaGithub className="w-5 h-5  hover:border-2 hover:border-amber-700 hover:rounded-full " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/arijeetsarkar10/"
                target="_blank"
              >
                <FaLinkedin className="w-5 h-5  hover:border-2 hover:border-amber-700 hover:rounded-md" />
              </Link>
              <Link href="https://twitter.com/Arijeet87292079" target="_blank">
                <FaXTwitter className="w-5 h-5 hover:border-2 hover:border-amber-700 hover:rounded-full" />
              </Link>
            </div>
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <div className="text-lg font-medium">Arijeet Sarkar</div>
            <div className="text-sm font-light">
              A software engineer who is passionate on building fully functional
              web and mobile applications.
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-slate-400  w-full" />
          <div className="py-6 text-center text-xs font-extralight">
            © Copyright 2024. Made By{" "}
            <span>
              <Link href="#">Arijeet Sarkar</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
