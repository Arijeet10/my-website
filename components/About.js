const About = () => {
  return (
    <>
      <div className="p-4 sm:px-10 dark:bg-[#303030] dark:text-white flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-3xl font-semibold  uppercase">About me</div>
          <div className="border-t-4 rounded-full border-amber-700 w-10 " />
          <div className="font-medium text-slate-500 dark:text-white">
            Here, you will get a brief info about myself, what I do and my
            current skills in programming and technology.
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-center sm:justify-center ">
          <div className="font-medium text-slate-400 dark:text-white">
            I am passionate about software development technologies to drive
            meaningful change. With a background in Software Engineering, I
            thrive on solving problems and delivering solutions to them. I have
            done my graduation in{" "}<span className="text-slate-600 dark:text-slate-400">
              Computer Science and Engineering
            </span>{" "}
            . I am proficient in Full Stack Development, have made various web
            applications using{" "}
            <span className="text-slate-600 dark:text-slate-400">
              JavaScript
            </span>{" "}
            libraries and frameworks like{" "}
            <span className="text-slate-600 dark:text-slate-400">React.js</span>
            ,{" "}
            <span className="text-slate-600 dark:text-slate-400">Node.js</span>{" "}
            and{" "}
            <span className="text-slate-600 dark:text-slate-400">Next.js</span>.
            I am dedicated to continuous learning and staying at the forefront
            of industry trends.
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="font-semibold text-xl">My Skills</div>
            <div className="font-medium grid grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 overflow-hidden">
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium py-2 rounded-sm text-center">
                HTML
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium py-2 rounded-sm text-center">
                CSS
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium py-2 rounded-sm text-center">
                JavaScript
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium py-2 rounded-sm text-center">
                React
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium py-2 rounded-sm text-center">
                Next.js
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium p-2 rounded-sm text-center">
                Node.js
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium p-2 rounded-sm text-center">
                SQL
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium p-2 rounded-sm text-center">
                NoSQL
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 dark:text-black dark:hover:text-white font-medium p-2 rounded-sm text-center">
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
