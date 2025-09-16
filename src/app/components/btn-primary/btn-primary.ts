import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Router } from '@angular/router';


export type BtnVariants = "primary" | "secundary" | "submit";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.css'
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false; 
  @Input() loading: boolean = false; 
  @Input() variant: BtnVariants = "primary";
  @Input() route?: string;

  @Output("submit") onSubmit = new EventEmitter();

  constructor(private router: Router) {}


  submit(){
    if (this.route && this.route.trim() !== '') {
      // Se a rota estiver definida, navega
      this.router.navigate([this.route]);
    } else {
      // Caso contrário, apenas emite evento para o form
      this.onSubmit.emit();
    }
  }
  

}
