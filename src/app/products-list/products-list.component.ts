import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  public showMore: boolean = false;
  loader = true;

  @Input() padding: any;
  constructor(public router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  clickOn(event: string) {
    this.showMore = event === 'See more';
  }

  getProductList(): Array<Number> {
    return this.showMore ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] : [0, 1];
  }

  navigateToDetailPage() {
    this.router.navigateByUrl('/product-detail');
  }
}
