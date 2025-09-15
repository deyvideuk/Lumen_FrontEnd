import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


type BtnVariants = "primary" | "secundary";

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

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit()
  }
}
