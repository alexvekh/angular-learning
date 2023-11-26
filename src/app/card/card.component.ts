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
  number = 42
  array = [1, 1, 2, 3, 5, 8, 13]
  obj = {name: "Alex", info: {age: 45, job: 'Full-stack'}}
  
  disabled = false
  
  imgUrl: string = 'https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png'
  
  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'
      this.disabled = true
    }, 3000)
    
  }
  
  getInfo() {
    return 'This is my info'
  }
}