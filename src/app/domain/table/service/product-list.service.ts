import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { ProductListDTO } from '../models/productlist.model';

@Injectable({ providedIn: "root" })
export class ProductListService {
	private url ="Product"; 

	constructor(private httpService: HttpService) {}

	public getAllProducts$(): Observable<Array<ProductListDTO>> {
		return this.httpService.get<Array<ProductListDTO>>(`${this.url}`); 
	}

	public AddProduct(product: ProductListDTO): Observable<ProductListDTO> {
		return this.httpService.post<ProductListDTO>(`${this.url}/add`, product);
	  }


	  public deleteProduct$(id: number): Observable<ProductListDTO> {
		return this.httpService.delete(`${this.url}`, id.toString());
	  }


	public edit$(id:number, product: ProductListDTO): Observable<ProductListDTO> {
		return this.httpService.put<ProductListDTO>(`${this.url}/edit?id=`+id, product);
	  }

	  public getProductbyId(id: number): Observable<ProductListDTO> {
		return this.httpService.getById<ProductListDTO>(`${this.url}`,id);
	  }

	}