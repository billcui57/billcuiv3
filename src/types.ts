export interface File {
  name: string;
  display: any
}



export class Directory {

  name: string;
  parent?: Directory;
  subdirectories: Directory[];
  files: File[];
  pathName: string;

  constructor(name: string, subdirectories: Directory[], files: File[], parent?: Directory,) {
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


