import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/product'
import { Observable } from 'rxjs/internal/Observable'
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})    // auto regiter in the root

export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl, {
      params: new HttpParams({
        //fromString: 'limit=5'   
        //fromObject: {limit: 5}
      }).append('limit', 5)   // variants limit
    })//.pipe(delay(2000))   // delay 2 sec
  }
}

