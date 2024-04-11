const About = () => {
  return (
    <>
      <div className="p-4 sm:px-10 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-3xl font-semibold  uppercase">About me</div>
          <div className="border-t-4 rounded-full border-amber-700 w-10 " />
          <div className="font-medium text-slate-500">
            Here, you will get a brief info about myself, what I do and my
            current skills in programming and technology.
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:items-center sm:justify-center ">
          <div className="font-medium text-slate-400">
            I am a{" "}
            <span className="text-slate-600">
              Computer Science and Engineering
            </span>{" "}
            graduate. I have made a few projects on web and mobile app
            development using <span className="text-slate-600">JavaScript</span>{" "}
            frameworks.
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="font-semibold text-xl">My Skills</div>
            <div className="font-medium grid grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 overflow-hidden">
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 py-2 rounded-sm text-center">
                HTML
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 py-2 rounded-sm text-center">
                CSS
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 py-2 rounded-sm text-center">
                JavaScript
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 py-2 rounded-sm text-center">
                React
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 py-2 rounded-sm text-center">
                Next.js
              </div>
              <div className="hover:bg-amber-700 hover:text-white bg-slate-200 p-2 rounded-sm text-center">
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