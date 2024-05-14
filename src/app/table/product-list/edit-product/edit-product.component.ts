import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductListDTO } from '../../../domain/table/models/productlist.model';
import { ProductListService } from '../../../domain/table/service/product-list.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  displayedCompactTable = new MatTableDataSource<ProductListDTO>();
  displayedColumns: string[] = ['name', 'price', 'description', 'category', 'ingredients', 'companyName', 'companyAddress'];
  product = {
    name: '',
    price: '',
    description: '',
    category: '',
    ingredients: '',
    companyName: '',
    companyAdress: '',
  };
  id: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getById(this.id);
    });
  }

  getById(id: number): void {
    const subscription = this.productListService.getProductbyId(id).subscribe(
      result => {
        if (result instanceof Array) {
          this.displayedCompactTable.data = result.length > 0 ? [result[0]] : [];
        } else {
          this.product=result;
          this.displayedCompactTable.data = result ? [result] : [];
        }
      },
      error => {
        console.error("Error fetching products:", error);
      }
    );
    this.subscriptions.push(subscription);
  }
  
  
  
  saveChanges() {
    if (this.id && this.product) {
      this.productListService.edit$(this.id, this.product)
        .subscribe(
          () => {
            this.product = {
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
            console.error('Error editing product:', error);
          });
    } else {
      console.error('Invalid ID or product data');
    }
  }
  

  
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}