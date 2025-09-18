import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnPrimary } from '../btn-primary/btn-primary';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BtnPrimary,
    NgOptimizedImage,
    RouterLink
],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  
  
  openMenu(){
    const header = document.querySelector("#header") as HTMLElement | null;
    const btnMenu = document.querySelector(".btnMenu") as HTMLElement | null;

    if(header && btnMenu){
        header.style.left = "0px";
        header.style.transition = "all 1s";
        btnMenu.style.left = "-100px";
        btnMenu.style.transition = "all 1s";
      }
  }

  closeMenu(){
    const header = document.querySelector("#header") as HTMLElement | null;
    const btnMenu = document.querySelector(".btnMenu") as HTMLElement | null;
    const width = window.innerWidth;

    if(header && btnMenu){
      if(width <= 920){
        header.style.left = "-950px";
        header.style.transition = "all 1s";
        btnMenu.style.left = "10px";
        btnMenu.style.transition = "all 1s";
      }
    }
  }
}
