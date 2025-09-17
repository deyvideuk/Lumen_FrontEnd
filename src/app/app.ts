import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import AOS from 'aos';




@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Lumen');

  ngOnInit(): void {
    AOS.init({
      duration: 1200, // duração da animação
      once: true,     // anima apenas uma vez
    });
  };
}


