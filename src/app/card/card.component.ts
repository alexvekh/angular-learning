import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgStyle } from "@angular/common";
import { NgClass } from "@angular/common";
import { Card } from "../app.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, NgStyle, NgClass],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input()
  card!: Card;
  @Input() index!: number
  
  title = "My Card Tittle"
  text = "My simple text"

  textColor: string = ''

  ngOnInit() {
  }
  
  changeTitle() {
    this.card.title = "Title has been changed!"
  }

  changeHandler() {
    console.log(this.title)
  }

  // inputHandler(value: any) {
  //   //const value = event.target.value
  //   this.title = value
  // }
}