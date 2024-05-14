import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentClassesDTO } from '../../table/models/studentclasses.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentClassesService } from '../../table/service/student-classes.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-classes',
  templateUrl: './student-classes.component.html',
  styleUrls: ['./student-classes.component.css']
})
export class StudentClassesComponent implements OnInit {

  displayedCompactTable = new MatTableDataSource<StudentClassesDTO>();
  columndefs: any[] = ['name', 'code'];
  selectedClientId: number | null = null;
  displayColumns = [
    "firstName",
    "lastName",
    
  ];
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(private router: Router,
              private clientProductService: StudentClassesService,
              private dialog: MatDialog,
              private toastrService: ToastrService,
              private route: ActivatedRoute
              ) { }
 ngOnInit() {
  this.route.params.subscribe(({ id }) => {
    const clientId = +id;
    if (clientId) {
      this.getAll(clientId); 
    }
  });
  
}    

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  
  getAll(id: number): void {
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