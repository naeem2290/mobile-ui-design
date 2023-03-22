import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = [
    {path: '../../assets/shirt.jpg'},
    {path: '../../assets/shirt1.jpeg'},
    {path: '../../assets/shirt2.jpg'},
    {path: '../../assets/shirt3.jpeg'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
