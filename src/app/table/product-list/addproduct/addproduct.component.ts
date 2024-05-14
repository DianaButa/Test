import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AddproductService } from '../../../domain/table/service/addproduct.service';
import { ProductListDTO } from '../../../domain/table/models/productlist.model';
import { ProductListService } from '../../../domain/table/service/product-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  displayedCompactTable = new MatTableDataSource<ProductListDTO>();
  allProducts: ProductListDTO[] = [];
  private subscriptions: Subscription[] = [];
  Product : ProductListDTO= {
    name: '',
    price: '',
    description: '',
    category: '',
    ingredients: '',
    companyName: '',
    companyAdress: '',
  };

  constructor(private router: Router, private productListService: ProductListService) { }

  addProduct() : void {
    this.productListService.AddProduct(this.Product).subscribe(
      () => {
        this.Product = {
          name: '',
          price: '',
          description: '',
          category: '',
          ingredients: '',
          companyName: '',
          companyAdress: '',
        };
        this.router.navigate(['/product-list']);
      },
      error => {
        console.error('Error adding product:', error);
        
      }
    );
  }
  
}
