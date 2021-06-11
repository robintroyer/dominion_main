import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';

@Component({
  selector: 'app-deck-overview',
  templateUrl: './deck-overview.page.html',
  styleUrls: ['./deck-overview.page.scss'],
})
export class DeckOverviewPage implements OnInit {

    decks: any[];
    local_decks: any;
    state: any[];
    old_state: any[];
    db_result: any[]

    constructor(private router: Router) {
        this.state = [];
        this.old_state = [];
        this.local_decks = [];
    }

    async ngOnInit() {
        this.local_decks = new PouchDB('local_decks');
        this.decks = [];
        var result = await this.local_decks.allDocs({
            include_docs: true
        });
        this.db_result = result;
        for (let i = 0; i < result.rows.length; i++) {
            this.decks.push(result.rows[i]);
            this.state.push(result.rows[i].doc.active);
            this.old_state.push(result.rows[i].doc.active);
        }
        console.log(this.decks);
        console.log(this.state);
    }

    openDeckGenerator()
    {
        this.router.navigate(['/deck-generator']);
    }

}
