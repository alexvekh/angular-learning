import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})    // auto regiter in the root

export class ProductService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('https://fakestoreapi.com/products')
  }
}

