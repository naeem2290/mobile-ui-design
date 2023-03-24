import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loader = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.loader = false;
    }, 2000);
  }

}
