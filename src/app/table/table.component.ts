import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TestDTO } from '../domain/table/models/test.model';
import { TableService } from '../domain/table/service/table.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedClientId: number | null = null;
  displayedCompactTable = new MatTableDataSource<TestDTO>();
  displayColumns: string[] = ['id', 'firstName', 'lastName', 'client-product'];
  private _subscriptions: Subscription[] = [];
  allTestUser: TestDTO[] = [];

  constructor(
    private router: Router,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    this.subscribeToGetTestUser();
  }

  private subscribeToGetTestUser(): void {
    const subscr = this.tableService.getAllNames$().subscribe(
      result => {
        this.allTestUser = result;
        this.displayedCompactTable.data = this.allTestUser;
      },
      error => {
        console.log(error);
      }
    );
    this._subscriptions.push(subscr);
  }

  selectClient(id: number): void {
    this.selectedClientId = id;
    this.router.navigate(['/client-product', this.selectedClientId]);
  }
}
