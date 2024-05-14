import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClientProductService } from '../../domain/table/service/client-product.service';
import { ClientProductDTO } from '../../domain/table/models/clientproduct.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css'],
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
export class ClientProductComponent implements OnInit {
  displayedCompactTable = new MatTableDataSource<ClientProductDTO>();
  columndefs: any[] = ['name', 'code'];
  selectedClientId: number | null = null;
  displayColumns = [
    "name",
    "price",
    "description",
    "category",
    "ingredients",
    "companyName",
    "companyAdress",
  ];
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(private router: Router,
              private clientProductService: ClientProductService,
              private dialog: MatDialog,
              private toastrService: ToastrService,
              private route: ActivatedRoute
              ) { }
 ngOnInit() {
  this.route.params.subscribe(({ id }) => {
    const clientId = +id;
    if (clientId) {
      this.getAllProducts(clientId); 
    }
  });
  
}    

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  
  getAllProducts(id: number): void {
    const subscription = this.clientProductService.getClientProducts(id).subscribe(
      result => {
        this.displayedCompactTable.data = result;
      },
      error => {
        console.error("Error fetching products:", error);
      }
    );
    this.subscriptions.push(subscription);
  }
  

}