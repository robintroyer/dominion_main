import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.page.html',
  styleUrls: ['./card-overview.page.scss'],
})
export class CardOverviewPage implements OnInit {

    cards: any[];

    constructor(private router: Router) { }

    ngOnInit() {

    }


    openCardGenerator()
    {
        this.router.navigate(['/card-generator']);
    }


}
