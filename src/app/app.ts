import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Capa } from './components/capa/capa';
import { Footer } from './components/footer/footer';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Capa, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lumen');
}
