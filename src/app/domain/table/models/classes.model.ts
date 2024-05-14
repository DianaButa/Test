

export class ClassesDTO {
    public id? : number;
    public className: string;
    public classProfessor: string;
    

constructor(formValue: IClassesFormValue) {
    this.className = formValue.className;
    this.classProfessor= formValue.classProfessor;
}
}
export interface IClassesFormValue {
    className : string;
    classProfessor: string;

}