import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';

export const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'cards', component: CardsPageComponent},
  {path: 'about', component: AboutPageComponent},

];
