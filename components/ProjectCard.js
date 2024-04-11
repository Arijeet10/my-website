import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <div className=" grid sm:grid-cols-12 border border-slate-50 rounded-md shadow-xl">
        <div className="sm:col-span-7">
          <img
            src="/blog_app.png"
            alt="project image"
            className="object-cover rounded-md w-full h-full"
          />
        </div>
        <div className=" p-4  sm:col-span-5 flex flex-col justify-between gap-4">
          <div className="text-slate-500">
            A simple blog application to read blogs and also post your own blogs
            by creating an account.
          </div>
          <div className="font-medium ">
            <div className="pb-2">Tools Used:</div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 p-2 rounded-sm text-center">
                Next.js
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 p-2 rounded-sm text-center">
                Tailwind CSS
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 p-2 rounded-sm text-center">
                MongoDB
              </div>
            </div>
          </div>
          <div>
            <Link
              href="https://blog-app-omega-rose.vercel.app/"
              target="_blank"
              className="border border-black shadow-md hover:border-none hover:bg-amber-700 hover:text-white  font-semibold px-6 py-2 rounded-md"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
