import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from "../../product/product.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { CreateProductComponent } from "../../components/create-product/create-product.component";
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from "../../pipes/filter-products.pipe";


@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
    providers: [ProductsService],
    imports: [CommonModule, ProductComponent, ModalComponent, CreateProductComponent, FormsModule, FilterProductsPipe]
})
export class ProductPageComponent implements OnInit {
  title = 'angular-app';
  term: string = ''
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

}
