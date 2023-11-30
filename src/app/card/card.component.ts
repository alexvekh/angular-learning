import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgStyle } from "@angular/common";
import { NgClass } from "@angular/common";
import { Card } from "../app.component";
import { DatePipe } from "@angular/common";
//import { registerLocaleData } from "@angular/common";
//import localeUa from '@angular/common/locales/ru-UA'
//registerLocaleData(localeUa, 'ua')
// --- doesn't work

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, NgStyle, NgClass, DatePipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input()
  card!: Card;
  @Input() index!: number

  title = "My Card Tittle"
  text = "My simple text"

  cardDate: Date = new Date()

  //@DatePipe() date: DatePipe

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