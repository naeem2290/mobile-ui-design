import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  loader = true;
  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
  }

}
