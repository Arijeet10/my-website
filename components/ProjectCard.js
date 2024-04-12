import Link from "next/link";

const ProjectCard = ({ data,index,activeProject }) => {
  return (
    <>
      <div
        className={`h-[550px] sm:h-[400px] w-full p-4 ${index!==activeProject && "hidden"}  grid gap-4 items-center justify-center sm:grid-cols-12 border border-slate-50 rounded-md shadow-2xl`}
      >
        <div className="h-full sm:col-span-7 sm:flex sm:items-center sm:justify-center">
          <img
            src={data.thumbnail}
            alt="project image"
            className="object-cover rounded-t-md sm:rounded-md border border-slate-400 shadow-sm "
          />
        </div>
        <div className="h-full sm:col-span-5 flex flex-col justify-between items-stretch gap-4">
          <div className="text-slate-500">{data.desc}</div>
          <div className="font-medium ">
            <div className="pb-2">Tools Used:</div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
              {data.tools.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="hover:bg-amber-700 hover:text-white bg-slate-200 p-2 rounded-sm text-center"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <Link
              href={data.url}
              className=" border border-black shadow-md hover:border-none hover:bg-amber-700 hover:text-white  font-semibold px-10 py-2 rounded-md"
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
