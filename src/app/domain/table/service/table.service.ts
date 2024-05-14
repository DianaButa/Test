import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { TestDTO } from '../models/test.model';
import { ProductListDTO } from '../models/productlist.model';

@Injectable({ providedIn: "root" })
export class TableService {
	private url = "Client"; 

	constructor(private httpService: HttpService) {}

	public getAllNames$(): Observable<Array<TestDTO>> {
		return this.httpService.get<Array<TestDTO>>(`${this.url}`); 
	}



	
	}

