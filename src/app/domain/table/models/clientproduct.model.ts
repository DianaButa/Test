export class ClientProductDTO {
    public id? : number;
    public name: string;
    public price: string;
    public description: string;
    public category: string;
    public ingredients: string;
    public companyName: string;
    public companyAdress: string;

    constructor(formValue: IClientProductFormValue) {
        this.name = formValue.name;
        this.price = formValue.price;
        this.description = formValue.description;
        this.category = formValue.category;
        this.ingredients = formValue.ingredients;
        this.companyName = formValue.companyName;
        this.companyAdress = formValue.companyAdress;
    }
}

export interface IClientProductFormValue {
    name: string;
    price: string;
    description: string;
    category: string;
    ingredients: string;
    companyName: string;
    companyAdress: string;
}

// Ensure product object includes nrCrt property
const product: IClientProductFormValue = {
    name: 'Product Name',
    price: '10.00',
    description: 'Product Description',
    category: 'Product Category',
    ingredients: 'Product Ingredients',
    companyName: 'Company Name',
    companyAdress: 'Company Address'
};
