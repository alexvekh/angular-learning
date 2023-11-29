import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, FormComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-lerning';

  toggle = true

  toggleCards()  {
    this.toggle = !this.toggle
  }
}
