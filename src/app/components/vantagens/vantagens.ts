import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { Capa } from '../capa/capa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vantagens',
  imports: [BtnPrimary],
  templateUrl: './vantagens.html',
  styleUrl: './vantagens.css'
})
export class Vantagens {

  constructor(private router: Router){}

  goToRota(prop: string) {
    if (prop && prop.trim() !== '') {
      // this.router.navigate([prop]);
      alert(prop)
    } else {
      console.warn('Rota vazia, navegação cancelada.');
    }
  }

}
