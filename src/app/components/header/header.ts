import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { HtmlParser } from '@angular/compiler';

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
  isOpen = false;
  
  openMenu(open: string){
    const header = document.querySelector("#header") as HTMLElement | null;
    
    let isOpen = false;
    
    if(header){
      if(open == 'open'){
        header.style.left = "0px";
        header.style.transition = "all 1s"
        isOpen = true;
      }else{
        header.style.left = "950px";
      }
    }
  }
}
