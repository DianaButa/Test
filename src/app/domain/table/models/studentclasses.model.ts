export class StudentClassesDTO {
    public id? : number;
    public firstname: string;
    public lastName: string;
  

    constructor(formValue: IStudentClassesFormValue) {
        this.firstname = formValue.firstName;
        this.lastName = formValue.lastName;
     
    }
}

export interface IStudentClassesFormValue {
    firstName: string;
    lastName: string;
    
}



