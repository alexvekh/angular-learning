import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  title = "My Card Tittle"
  text = "My simple text"

  ngOnInit() {
  }
  
  changeTitle() {
    this.title = "Title has been changed!"
  }

  changeHandler() {
    console.log(this.title)
  }

  // inputHandler(value: any) {
  //   //const value = event.target.value
  //   this.title = value
  // }
}