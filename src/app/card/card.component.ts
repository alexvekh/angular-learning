import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-card',
  standalone: true,
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

  inputHandler(event: any) {
    const value = event.target.value
    this.title = value
  }

}