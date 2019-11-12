import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  @Input() images

  index: number = 0
  avantiButton: boolean
  indietroButton: boolean
  auto: boolean
  timer: any

  constructor() { }

  ngOnInit() {
    this.indietroButton = true;
    this.auto = false;
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

  autoGo() {
    this.auto = true
    this.timer = setInterval(() => {
      this.avanti()
      if(this.index == this.images.length) {
        this.index = 0
        this.avantiButton = false;
        this.indietroButton = true;
      }
    }, 2000);
  }

  stop() {
    this.auto = false
    clearInterval(this.timer)
  }
}