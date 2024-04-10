"use client";

import Link from "next/link";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {


  //sidebar state
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="shadow-sm px-6 py-2 flex items-center justify-between sm:grid sm:grid-cols-12 font-semibold uppercase">
        <div className="col-span- sm:col-span-4  flex items-center justify-start ">
          <img src="/profile.svg" alt="profile image" className="w-14 h-14" />
          <div className="">Arijeet Sarkar</div>
        </div>
        {/* Sidebar buttons for Mobile View */}
        <div className=" sm:hidden">
          <IoReorderThree
            onClick={() => setSidebar(true)}
            className={`w-10 h-10 absolute top-4 right-0 ${
              sidebar && "hidden"
            }`}
          />
          <IoClose
            onClick={() => setSidebar(false)}
            className={`w-10 h-10 absolute top-4 right-0 ${
              !sidebar && "hidden"
            }`}
          />
        </div>
        {/* Desktop View */}
        <div className=" hidden sm:col-span-8 sm:flex sm:items-center sm:justify-end sm:gap-8">
          <Link href="#" className="hover:text-amber-700">Home</Link>
          <Link href="#" className="hover:text-amber-700">About</Link>
          <Link href="#" className="hover:text-amber-700">Projects</Link>
          <Link href="#" className="hover:text-amber-700">Contact</Link>
        </div>
      </div>
      {/* Nav menus for Mobile View */}
      <div
        className={`sm:hidden flex flex-col items-end shadow-md font-semibold ${
          !sidebar && "hidden"
        }`}
      >
        <Link href="#" className=" p-4 hover:text-amber-700 border-y border-slate-300 w-full text-end">
          Home
        </Link>
        <Link href="#" className="p-4 hover:text-amber-700 w-full text-end">
          About
        </Link>
        <Link href="#" className="p-4 hover:text-amber-700 border-t border-slate-300 w-full text-end">
          Projects
        </Link>
        <Link href="#" className="p-4 hover:text-amber-700 border-y border-slate-300 w-full text-end">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
