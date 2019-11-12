import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  index: number = 0
  avantiButton: boolean
  indietroButton: boolean
  images: string[] = [
    'https://www.bibibi.it/wp-content/uploads/2018/09/scarica-immagini-ad-alta-qualita.jpeg',
    'https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg',
    'https://eppen.ecodibergamo.it/wp-content/uploads/2018/11/immagini-di-via_2018_11_21T15_01_36_752288_detail_box.jpg',
    'https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg',
  ]

  constructor() { }

  ngOnInit() {
    if(this.index == 0) this.indietroButton = true;
  }

  avanti() {
    this.index++
    this.indietroButton = false;
    if(this.index + 1 == this.images.length) this.avantiButton = true; 
  }

  indietro() {
    this.index--
    this.avantiButton = false;
    if(this.index == 0) this.indietroButton = true
    
  }

  auto() {
    setInterval(() => this.avanti(), 3000);
  }
}