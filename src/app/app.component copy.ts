import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, Subscribable } from 'rxjs';
import { GlobalErrorComponent } from "./components/global-error/global-error.component";
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from "./pipes/filter-products.pipe";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { ModalComponent } from "./components/modal/modal.component";
import { NavigationComponent } from "./components/navigation/navigation.component";


export interface Card {
  title: string,
  text: string
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
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
        CreateProductComponent,
        ModalComponent,
        NavigationComponent
    ]
})

export class AppComponent implements OnInit {
  
 
  title = 'angular-lerning';
  toggle = true
  cards: Card[] = [
    {title: "First Card", text: "This is card number 1"},
    {title: "Second Card", text: "This is card #2"},
    {title: "Last Card", text: "This is card number 3"},
  ]

  products: IProduct[] = [];
  products$!: Observable<undefined> | Subscribable<undefined> | Promise<undefined>;
  loading: any;
  term: any;
modalService: any;

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => console.log(products))
  }

  toggleCards()  {
    this.toggle = !this.toggle
  }
}
