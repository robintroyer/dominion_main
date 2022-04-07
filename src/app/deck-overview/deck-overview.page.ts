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
    db_result: any;

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

    async ionViewWillLeave()
    {
        let changed_state = [];
        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i] == this.old_state[i]) {

            } else {
                changed_state.push(i);
            }
        }
        console.log(changed_state);

        for (let i = 0; i < changed_state.length; i++) {
            let change_to: any;
            if (this.db_result.rows[changed_state[i]].doc.active == 1) {
                change_to = 0;
            } else if (this.db_result.rows[changed_state[i]].doc.active == 0) {
                change_to = 1;
            }
            let changed_deck = {
                _id: this.db_result.rows[changed_state[i]].doc._id,
                _rev: this.db_result.rows[changed_state[i]].doc._rev,
                title: this.db_result.rows[changed_state[i]].doc.title,
                cards: this.db_result.rows[changed_state[i]].doc.cards,
                active: change_to,
            }
            this.local_decks.put(changed_deck);
            console.log(changed_deck);
        }
    }

    openDeckGenerator()
    {
        this.router.navigate(['/deck-generator']);
    }

    closeOverview()
    {
        this.router.navigate(['./overview-main']);
    }

    

}
