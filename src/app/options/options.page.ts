import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    openTermsOverview()
    {
        this.router.navigate(['/terms-overview']);
        // allow creation of terms in terms-overview
        // terms contain a title, a phrase which gets replaced by a corresponding function and an array containing multiple words for that term
    }

}
