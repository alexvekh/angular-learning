import { Component, Input } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from "@angular/common";
import { NgClass } from "@angular/common";
import { IProduct } from "../models/product";
import { CurrencyPipe } from "@angular/common";
//import { registerLocaleData } from "@angular/common";
//import localeUa from '@angular/common/locales/ru-UA'
//registerLocaleData(localeUa, 'ua')
// --- doesn't work

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, NgStyle, NgClass, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent {

  @Input() product! : IProduct;
  @Input() index!: number

  details = false
  
}