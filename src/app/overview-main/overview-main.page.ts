import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';

@Component({
  selector: 'app-overview-main',
  templateUrl: './overview-main.page.html',
  styleUrls: ['./overview-main.page.scss'],
})
export class OverviewMainPage implements OnInit {

//   local_cards: any;
//   local_decks: any;
//   local_sets: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    //   this.route.queryParams.subscribe(params => {
    //       if (this.router.getCurrentNavigation().extras.state) {
    //           this.local_cards = this.router.getCurrentNavigation().extras.state.local_cards;
    //           this.local_decks = this.router.getCurrentNavigation().extras.state.local_decks;
    //           this.local_sets = this.router.getCurrentNavigation().extras.state.local_sets;
    //       }
    //   })
  }

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
