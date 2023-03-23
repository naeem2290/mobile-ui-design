import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public isDetailPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigateByUrl('');
  }
}
