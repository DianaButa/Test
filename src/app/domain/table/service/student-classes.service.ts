import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { StudentClassesDTO } from '../models/studentclasses.model';



@Injectable({ providedIn: "root" })
export class StudentClassesService {
    private url = "StudentClasses";

    constructor(private httpService: HttpService) {}

   public getClientProducts(id: number): Observable<StudentClassesDTO[]> {
      return this.httpService.getById<StudentClassesDTO[]>(`${this.url}`,id);
    }
}