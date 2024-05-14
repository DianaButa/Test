import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ClientProductComponent } from './table/client-product/client-product.component';
import { ProductListComponent } from './table/product-list/product-list.component';
import { AddproductComponent } from './table/product-list/addproduct/addproduct.component';
import { EditProductComponent } from './table/product-list/edit-product/edit-product.component';
import { CollegeComponent } from './domain/college/college.component';
import { StudentComponent } from './domain/college/student/student.component';
import { ClassesComponent } from './domain/college/classes/classes.component';
import { StudentClassesComponent } from './domain/college/student-classes/student-classes.component';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'client-product/:id', component: ClientProductComponent },
  { path: 'student-classes/:id', component: StudentClassesComponent },  
  { path: 'product-list', component: ProductListComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'college', component: CollegeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: '', redirectTo: 'table', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
