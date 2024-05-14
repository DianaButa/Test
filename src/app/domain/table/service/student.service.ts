import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { StudentDTO } from '../models/student.model';



@Injectable({ providedIn: "root" })
export class StudentService {
	private url = "Student"; 

	constructor(private httpService: HttpService) {}

	public getAllstudents$(): Observable<Array<StudentDTO>> {
		return this.httpService.get<Array<StudentDTO>>(`${this.url}`); 
	}



	
	}
