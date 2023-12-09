import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';


export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-cards-page',
  standalone: true,
  imports: [ 
    CommonModule, 
    CardComponent, 
  ],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent {
  
 

  toggle = true


  cards: Card[] = [
    {title: "First Card", text: "This is card number 1"},
    {title: "Second Card", text: "This is card #2"},
    {title: "Last Card", text: "This is card number 3"},
  ]

  //products: IProduct[] = [];
  

  toggleCards()  {
    this.toggle = !this.toggle
  }

}
