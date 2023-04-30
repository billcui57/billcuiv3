export interface IFile{
  name:string;
}

export interface IProject extends IFile {
  type: typeof projectTypes[number]
  usedTechs: any[];
  description: any;
  image?: any;
  logo?: any;
  learnMoreLink?: string;
  projectLink?: string;
  achievements?: string[];
}

export const projectTypes = ["Web", "Systems", "AI"] as const


export interface IWorkExperience extends IFile {
  position: string;
  company: string;
  description: string;
  image?: any;
  logo?: any;
  startDate: string;
  endDate: string;
  usedTechs?: any[];
  location: string;
}

export interface IHackathon extends IFile {
  name: string;
  description: string;
  image?: any;
  logo?: any;
  date : string;
  achievements?: string[];
  usedTechs?: any[];
  location: string;
}


export class IDirectory {

  name: string;
  parent?: IDirectory;
  subdirectories: IDirectory[];
  files: IFile[];
  pathName: string;

  constructor(name: string, subdirectories: IDirectory[], files: IFile[], parent?: IDirectory,) {
    this.name = "/" + name;
    this.parent = parent;
    this.subdirectories = subdirectories;
    this.files = files;
    if (this.parent) {
      if (this.parent.parent) {
        this.pathName = this.parent.pathName + this.name
      } else {
        this.pathName = this.name
      }

    } else {
      this.pathName = "/"
    }
  }

}


