import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { ClassesDTO } from '../models/classes.model';




@Injectable({ providedIn: "root" })
export class ClassesService {
	private url = "Classes"; 

	constructor(private httpService: HttpService) {}

	public getAllclasses$(): Observable<Array<ClassesDTO>> {
		return this.httpService.get<Array<ClassesDTO>>(`${this.url}`); 
	}



	
	}
