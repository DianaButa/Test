
export class StudentDTO {
    public id? : number;
    public firstName: string;
    public lastName: string;

constructor(formValue: IClassesFormValue) {
    this.firstName = formValue.firstName;
    this.lastName= formValue.lastName;
}
}
export interface IClassesFormValue {
    firstName : string;
    lastName: string;

}