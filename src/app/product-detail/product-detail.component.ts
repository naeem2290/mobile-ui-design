import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  constructor(public location: Location) {}
  loader = true;

  ngOnInit(): void {
    window.scroll(0,0);
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '370px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true,
        previewArrows: true,
        previewSwipe: true,
        previewZoom: true,
        previewZoomMax: 2,
        previewZoomMin: 0.5,
        previewRotate: true,
        previewDownload: true,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/shirt.jpg',
        medium: 'assets/shirt.jpg',
        big: 'assets/shirt.jpg',
      },
      {
        small: 'assets/shirt1.jpeg',
        medium: 'assets/shirt1.jpeg',
        big: 'assets/shirt1.jpeg',
      },
      {
        small: 'assets/shirt2.jpg',
        medium: 'assets/shirt2.jpg',
        big: 'assets/shirt2.jpg',
      },
      {
        small: 'assets/shirt3.jpeg',
        medium: 'assets/shirt3.jpeg',
        big: 'assets/shirt3.jpeg',
      },
    ];

    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.loader = false;
    }, 2000);

  }

  back() {
    this.location.back();
  }
}
