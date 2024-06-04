"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { projectData } from "@/utils/projectData";


const Projects = () => {

    const [activeProject,setActiveProject]=useState(0);

    const handleNext=()=>{
        activeProject==projectData.length-1?setActiveProject(0):setActiveProject(activeProject+1);
    }

    const handlePrev=()=>{
        activeProject===0?setActiveProject(projectData.length-1):setActiveProject(activeProject-1);

    }

  return (
    <>
      <div className="p-4 dark:bg-[#240750] dark:text-white flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-3xl font-semibold  uppercase">Projects</div>
          <div className="border-t-4 rounded-full border-amber-700 w-10 " />
          <div className="font-medium text-slate-500 dark:text-white">
            Here, I have shared my work that I have done with its brief
            description.
          </div>
        </div>
        <div className="relative flex  px-4">
            {projectData.map((item,i)=>{
                return <ProjectCard data={item} index={i} key={i} activeProject={activeProject} />
            })}
          <MdKeyboardArrowRight onClick={()=>handleNext()} className="hover:text-amber-700 absolute -right-3 top-2/4 w-10 h-10 " />
          <MdKeyboardArrowLeft onClick={()=>handlePrev()} className="hover:text-amber-700 absolute -left-3 top-2/4 w-10 h-10" />
        </div>
      </div>
    </>
  );
};

export default Projects;
