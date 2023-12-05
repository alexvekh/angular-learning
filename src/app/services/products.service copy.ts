import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../models/product'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})    // auto regiter in the root

export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }
}

