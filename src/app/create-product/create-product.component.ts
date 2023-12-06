import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })


  ngOnInit(): void { }

  submit() {
    console.log(this.form.value)
    
    }

}
