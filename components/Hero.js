

import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const HeroSection = () => {
    return ( 
        <>
            <div className={` p-8 flex flex-col items-center gap-4  bg-[url("/hero_background.svg")] bg-cover`}>
                <div>
                    <img 
                        src="/hero_programmer.svg"
                        alt="programmer image"
                        className="w-52 h-52"
                    />
                </div>
                <div className="uppercase text-2xl sm:text-4xl font-bold">Hello, My name is Arijeet Sarkar</div>
                <div className="text-lg font-medium">Software Engineer</div>
                <div className="flex items-center justify-center gap-4">
                    <Link href="https://github.com/Arijeet10" target="_blank">
                        <FaGithub 
                            className="w-10 h-10  hover:border-2 hover:border-amber-700 hover:rounded-full "
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/arijeetsarkar10/" target="_blank">
                        <FaLinkedin 
                            className="w-10 h-10  hover:border-2 hover:border-amber-700 hover:rounded-md"
                        />
                    </Link>
                    <Link href="https://twitter.com/Arijeet87292079" target="_blank">
                        <FaXTwitter 
                            className="w-10 h-10 hover:border-2 hover:border-amber-700 hover:rounded-full"
                        />
                    </Link>
                </div>
                <div className="py-4">
                    <Link href="#" target="_blank" className="border border-black bg-white shadow-md hover:border-none hover:bg-amber-700 hover:text-white font-semibold px-4 py-2 rounded-md">
                        Download Resume
                    </Link>
                </div>

            </div>
        </>
     );
}
 
export default HeroSection;