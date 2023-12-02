import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { IProduct } from './models/product';
import { products as data } from './data/products';


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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-lerning';
  toggle = true
  cards: Card[] = [
    {title: "First Card", text: "This is card number 1"},
    {title: "Second Card", text: "This is card #2"},
    {title: "Last Card", text: "This is card number 3"},
  ]

  products: IProduct[] = data;

  toggleCards()  {
    this.toggle = !this.toggle
  }
}
