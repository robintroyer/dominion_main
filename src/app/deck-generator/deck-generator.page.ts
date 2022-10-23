import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';
import { Deck } from 'src/models/Deck';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deck-generator',
  templateUrl: './deck-generator.page.html',
  styleUrls: ['./deck-generator.page.scss'],
})
export class DeckGeneratorPage implements OnInit {

    local_cards: any;
    local_decks: any;

    cards: any[];

    selected_cards: any[];
    title: string;

    decks: any[];

    

    

    constructor(private router: Router) {
        this.local_cards = new PouchDB('local_cards');
        this.local_decks = new PouchDB('local_decks')
        this.cards = [];
        this.decks = [];
        this.selected_cards = [];
    }

    async ngOnInit() {
        let result = await this.local_cards.allDocs({
            include_docs: true
        });

        for (let i = 0; i < result.rows.length; i++) {
            this.cards.push(result.rows[i]);
        }

        
    }
    selectChanged()
    {
    }
    async saveDeck()
    {
        let deck_id = uuidv4();
        let deck = new Deck(this.title, this.selected_cards, 1, deck_id);
        this.local_decks.post({
            _id: deck_id,
            title: this.title,
            cards: this.selected_cards,
            active: 1
        });
        this.decks.push(deck);
        this.router.navigate(['/deck-overview']);
    }

}
