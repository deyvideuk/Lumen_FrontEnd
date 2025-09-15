import { Component } from '@angular/core';
import { Capa } from '../capa/capa';
import { Vantagens } from '../vantagens/vantagens';

@Component({
  selector: 'app-home',
  imports: [
    Capa,
    Vantagens
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
