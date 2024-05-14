export class ProductListDTO {
    public id? : number;
    public name: string;
    public price: string;
    public description: string;
    public category: string;
    public ingredients: string;
    public companyName: string;
    public companyAdress: string;

    constructor(formValue: IProductListFormValue) {
        this.name = formValue.name;
        this.price = formValue.price;
        this.description = formValue.description;
        this.category = formValue.category;
        this.ingredients = formValue.ingredients;
        this.companyName = formValue.companyName;
        this.companyAdress = formValue.companyAdress;
    }
}

export interface IProductListFormValue {
    name: string;
    price: string;
    description: string;
    category: string;
    ingredients: string;
    companyName: string;
    companyAdress: string;
}


