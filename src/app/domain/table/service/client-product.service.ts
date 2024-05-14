import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { ProductListDTO } from '../models/productlist.model';
import { ClientProductDTO } from '../models/clientproduct.model';


@Injectable({ providedIn: "root" })
export class ClientProductService {
    private url = "ProductClient";

    constructor(private httpService: HttpService) {}

   public getClientProducts(id: number): Observable<ClientProductDTO[]> {
      return this.httpService.getById<ClientProductDTO[]>(`${this.url}`,id);
    }

    
public deleteProduct$(id: number): Observable<ClientProductDTO> {
  return this.httpService.delete(`${this.url}`, id.toString());
  }
}