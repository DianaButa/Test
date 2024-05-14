import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { ProductListComponent } from './table/product-list/product-list.component';
import { AddproductComponent } from './table/product-list/addproduct/addproduct.component';
import { HttpService } from './http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './table/product-list/confirmation-dialog/confirmation-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientProductComponent } from './table/client-product/client-product.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EditProductComponent } from './table/product-list/edit-product/edit-product.component';
import { CollegeComponent } from './domain/college/college.component';
import { StudentComponent } from './domain/college/student/student.component';
import { ClassesComponent } from './domain/college/classes/classes.component';
import { StudentClassesComponent } from './domain/college/student-classes/student-classes.component';


@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    TableComponent,
    ProductListComponent,
    AddproductComponent,
    ClientProductComponent,
    ConfirmationDialogComponent,
    EditProductComponent, 
    CollegeComponent, 
    StudentComponent, 
    ClassesComponent,
    StudentClassesComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule, 
    MatDialogModule,
    CommonModule,
    FormsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule, 
    BrowserAnimationsModule
    
  ],
  providers: [HttpClientModule, HttpClient],

  bootstrap: [AppComponent]
})
export class AppModule { }
