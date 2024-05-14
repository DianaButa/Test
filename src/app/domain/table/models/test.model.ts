export class TestDTO {
    public id?: number;
    public firstName: string;
    public lastName: string;
    public adress: string;
    public productList: string;
  
    constructor(formValue: ITestFormValue) {
      
      this.firstName = formValue.firstName;
      this.lastName = formValue.lastName;
      this.adress = formValue.adress;
      this.productList= formValue.productList;
    }
  }
  
  export interface ITestFormValue {
    firstName: string;
    lastName: string;
    adress: string;
    productList: string;
  }
  