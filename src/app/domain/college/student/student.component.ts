import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDTO } from '../../table/models/student.model';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../table/service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedCompactTable = new MatTableDataSource<StudentDTO>();
    selectedProductId :number | null = null;
    displayColumns = [
        "firstName",
        "lastName",
    ];
    private subscriptions: Subscription[] = new Array<Subscription>();
    public allStudents = new Array< StudentDTO>();
    protected editMode: boolean = false;
    protected productForm!: FormGroup;
    

    constructor(private studentService: StudentService,
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
        const subscription = this.studentService.getAllstudents$().subscribe(
            result => {
                this.allStudents = result;
                this.displayedCompactTable.data = this.allStudents;
            },
            error => {
                console.error('Error fetching products:', error);
            }
        );
        this.subscriptions.push(subscription);
    }
  }