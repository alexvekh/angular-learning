import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { IProduct } from './models/product';

//import { products as data } from './data/products';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './modal/modal.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ModalService } from './services/modal.service';


export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    CardComponent, 
    ProductComponent,
    FormComponent, 
    HttpClientModule,
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
  ],
  providers: [ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
 
  title = 'angular-lerning';
  toggle = true
  term: string = ''

  cards: Card[] = [
    {title: "First Card", text: "This is card number 1"},
    {title: "Second Card", text: "This is card #2"},
    {title: "Last Card", text: "This is card number 3"},
  ]

  //products: IProduct[] = [];
  loading = false
  //products$!: Observable<IProduct[]>


  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false))
    this.productsService.getAll().subscribe(
      () => this.loading = false)
  }

  toggleCards()  {
    this.toggle = !this.toggle
  }
}
