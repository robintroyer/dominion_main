import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/Card';
// import * as v5 from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import PouchDB from 'pouchdb/dist/pouchdb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.page.html',
  styleUrls: ['./card-generator.page.scss'],
})
export class CardGeneratorPage implements OnInit {

    show_buttons: boolean = false;
    playeramount: number;
    playeramount_array = [];
    title: any;
    task: any;

    db: any;

    cards: any[];

    constructor(private router: Router) {
        this.db = new PouchDB('local_cards');
        this.cards = [];
    }

    ngOnInit() {
    }

  /*

  Klasse erstellen?
  Jede Karte braucht ID
  Titel und Task werden von Benutzer eingegeben
  vllt vormerken: Karte beim Erstellen zu einem Deck/Set zuweisbar
  Spieleranzahl
  Knöpfe für "PLAYERNAMEX", ...
  Wenn Fokus auf Textarea: Knöpfe werden angezeigt

  */

    checkPlayerAmount()
    {

    }

    showButtons()
    {
        // Variable true setzen - ngIf zeigt Buttons an

        this.playeramount_array = [];
        for(let i = 1; i <= this.playeramount; i++) {
            this.playeramount_array.push(i);
        }

        this.show_buttons = true;
    }
    hideButtons()
    {

    }
    appendPlayername(number: number)
    {
        if (this.task) {
            this.task += ' PLAYERNAME' + number + ' ';
        } else {
            this.task = 'PLAYERNAME' + number + ' ';
        }
        // refocus textarea

    }
    async saveCard()
    {
        // playeramount 0 equals none

        let card_id = uuidv4();
        let card = new Card(this.title, this.task, this.playeramount, 1, card_id);
        await this.db.post({
            _id: card_id,
            title: this.title,
            task: this.task,
            playeramount: this.playeramount,
            active: 1
        });

        this.cards.push(card);

        // go back to card-overview
        this.router.navigate(['/card-overview']);
    }

    closeGen() 
    {
        this.router.navigate(['./card-overview']);
    }

}
