import {Injectable} from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/product'
import { Observable } from 'rxjs/internal/Observable'
import { catchError, delay, retry, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})    // auto regiter in the root

export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl, {
      params: new HttpParams({
        //fromString: 'limit=5'   
        //fromObject: {limit: 5}
      }).append('limit', 5)   // variants limit
    }).pipe(
      delay(200), // delay 2 sec
      retry(2),
      catchError(this.errorHandler.bind(this))
      )   
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}

