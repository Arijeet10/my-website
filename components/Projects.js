import ProjectCard from "./ProjectCard";

const Projects = () => {
    return ( 
        <>
            <div className="p-4 flex flex-col gap-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="text-3xl font-semibold  uppercase">Projects</div>
                    <div className="border-t-4 rounded-full border-amber-700 w-10 " />
                    <div className="font-medium text-slate-500">
                        Here, I have shared my work that I have done with its brief description.
                    </div>
                </div>
                <div>
                    <ProjectCard />
                </div>
            </div>
        </>
     );
}
 
export default Projects;