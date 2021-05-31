import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-main',
  templateUrl: './overview-main.page.html',
  styleUrls: ['./overview-main.page.scss'],
})
export class OverviewMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSetOverview()
  {
      this.router.navigate(['/set-overview']);
  }
  openDeckOverview()
  {
      this.router.navigate(['/deck-overview']);
  }
  openCardOverview()
  {
      this.router.navigate(['/card-overview']);
  }

}
