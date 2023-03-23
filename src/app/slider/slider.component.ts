import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images = [
    { path: '../../assets/shirt.jpg' },
    { path: '../../assets/shirt1.jpeg' },
    { path: '../../assets/shirt2.jpg' },
    { path: '../../assets/shirt3.jpeg' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTab() {
    this.router.navigateByUrl('/all-products-list');
  }
}
