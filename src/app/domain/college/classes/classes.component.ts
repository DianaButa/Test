import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassesDTO } from '../../table/models/classes.model';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ClassesService } from '../../table/service/classes.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit, OnDestroy {

  displayedCompactTable = new MatTableDataSource<ClassesDTO>();
  selectedProductId: number | null = null;

  displayColumns: string[] = ['className', 'classProfessor', 'student-classes'];
  private subscriptions: Subscription[] = [];
  allclasses: ClassesDTO[] = [];
  protected editMode: boolean = false;
  protected productForm!: FormGroup;
  selectedClassesId: number | null = null;

  constructor(private classesService: ClassesService,
              private dialog: MatDialog,
              private toastrService: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllclasses();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getAllclasses(): void {
    const subscription = this.classesService.getAllclasses$().subscribe(
      result => {
        this.allclasses = result;
        this.displayedCompactTable.data = this.allclasses;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
    this.subscriptions.push(subscription);
  }

  selectClasses(id: number): void {
    this.selectedClassesId = id;
    this.router.navigate(['/student-classes', this.selectedClassesId]);
  }
}
