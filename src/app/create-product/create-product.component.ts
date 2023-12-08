import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../directives/focus.directive';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FocusDirective ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required, 
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }


  ngOnInit(): void { }

  submit() {
    console.log(this.title)
    console.log(this.form.value)
    
    }

}
