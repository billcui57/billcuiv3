import { IFile, IProject, IWorkExperience } from "@/types";
import Project from "@/components/project";
import WorkExperience from "@/components/workexperience";

function isProject(file: IFile): file is IProject {
  return (file as IProject).type !== undefined
}

function isWorkExperience(file: IFile): file is IWorkExperience {
  return (file as IWorkExperience).company !== undefined
}


export const displayFile = (file: IFile): JSX.Element => {
  if (isProject(file)) {
    return displayProject(file)
  } else if (isWorkExperience(file)) {
    return displayWorkExperience(file)
  } 
  return <div></div>

}

export const displayProject = (project: IProject):JSX.Element => {
  return <Project {...project}></Project>
}

export const displayWorkExperience = (workExperience: IWorkExperience):JSX.Element => {
  return <WorkExperience {...workExperience}></WorkExperience>
}
