import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProductListService } from '../../domain/table/service/product-list.service';
import { ProductListDTO } from '../../domain/table/models/productlist.model';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { subscribe } from 'node:diagnostics_channel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    animations: [
        trigger('flyInOut', [
          transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-100%)' }),
            animate('0.5s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
          ]),
          transition(':leave', [
            animate('0.5s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
          ])
        ])
      ]
})
export class ProductListComponent implements OnInit {
    displayedCompactTable = new MatTableDataSource<ProductListDTO>();
    selectedProductId :number | null = null;
    displayColumns = [
        "name",
        "price",
        "description",
        "category",
        "ingredients",
        "companyName",
        "companyAdress",
        "delete",
        "edit"
    ];
    private subscriptions: Subscription[] = new Array<Subscription>();
    public allProducts = new Array< ProductListDTO>();
    protected editMode: boolean = false;
    protected productForm!: FormGroup;
    private ProductListDto!: ProductListDTO;

    constructor(private productListService: ProductListService,
                private dialog : MatDialog,
                private toastrService: ToastrService,
                private router: Router,
		            private activatedRoute: ActivatedRoute
                
                
        
        ) { }

    ngOnInit() {
        this.getAllProducts();
        //this._subscribeToGetAllProducts();
       
    }

    ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
    this.getAllProducts();
	}

    getAllProducts(): void {
        const subscription = this.productListService.getAllProducts$().subscribe(
            result => {
                this.allProducts = result;
                this.displayedCompactTable.data = this.allProducts;
            },
            error => {
                console.error('Error fetching products:', error);
            }
        );
        this.subscriptions.push(subscription);
    }


    protected DeleteProduct(id: number) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { id: id },
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				const sub = this.productListService.deleteProduct$(id).subscribe({
					next: _ => {this.toastrService.success(
                        "User deleted successfully",
                        "Success!"
                    );
						this._subscribeToGetAllProducts();
					},
					error: _ =>
                    this.toastrService.error("Couldn't delete product", "Error!"),
				});
                
				this.subscriptions.push(sub);
			}
		});
	}

    private _subscribeToGetAllProducts(): void {
		const subscr = this.productListService.getAllProducts$().subscribe(
			result => {
				this.allProducts = result;
				this.displayedCompactTable.data = this.allProducts;
			},
			error => {
				console.log(error);
			}
		);
		this.subscriptions.push(subscr);
		this.allProducts.forEach(x => console.log(x));
	}



  // public editProduct( product: ProductListDTO): void {
  //   const sub = this.productListService.edit$(product).subscribe(
  //     (response) => { 
  //       this.toastrService.success("Product edited successfully"); 
  //     },
  //     (error) => { 
  //       this.toastrService.error("Error editing product"); 
  //     }
  //   );
  //   this.subscriptions.push(sub);
  // }
  


selectProduct(id: number): void {

  this.router.navigate(['/edit-product', id])
}


}