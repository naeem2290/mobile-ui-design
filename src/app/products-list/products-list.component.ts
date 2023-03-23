import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public showMore: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  clickOn(event: string) {
    this.showMore = event === 'See more';
  }

  getProductList(): Array<Number> {
    return this.showMore ? [0,1,2,3,4,5] : [0,1];
  }

  navigateToDetailPage() {
    this.router.navigateByUrl('/product-detail');
  }

}
