import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images = [
    { path: 'assets/shirt.jpg' },
    { path: 'assets/offer.jpg' },
    { path: 'assets/cosmetic.png' },
    { path: 'assets/offer2.jpg' },
    { path: 'assets/shirt2.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTab(type: string) {
    this.router.navigateByUrl('/all-products-list');
    localStorage.setItem('category', type);
  }
}
