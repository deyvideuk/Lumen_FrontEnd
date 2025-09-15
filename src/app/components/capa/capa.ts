import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';



@Component({
  selector: 'app-capa',
  standalone: true,
  imports: [
    BtnPrimary,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './capa.html',
  styleUrl: './capa.css'
})
export class Capa {
  newsletterForm!: FormGroup;

  constructor(){
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    alert('função back-end para solicitação de inscrição por EMAIL');
  }

  
}
