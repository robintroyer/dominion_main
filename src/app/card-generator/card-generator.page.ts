import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/Card';
// import * as v5 from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import PouchDB from 'pouchdb/dist/pouchdb';

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

    constructor() {
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
        // console.log(this.playeramount);
    }

    showButtons()
    {
        // Variable true setzen - ngIf zeigt Buttons an

        console.log(this.playeramount);
        this.playeramount_array = [];
        for(let i = 1; i <= this.playeramount; i++) {
            this.playeramount_array.push(i);
        }
        console.log(this.playeramount_array);



        this.show_buttons = true;
        // console.log(this.show_buttons);
    }
    hideButtons()
    {
        // this.playeramount_array = [];
        // this.show_buttons = false;

    }
    appendPlayername(number: number)
    {
        if (this.task) {
            this.task += ' PLAYERNAME' + number + ' ';
        } else {
            this.task = 'PLAYERNAME' + number + ' ';
        }
        // this.task += 'PLAYERNAME' + number;

        // refocus textarea

    }
    async saveCard()
    {
        // console.log(this.task);

        console.log(this.title);
        console.log(this.playeramount);
        console.log(this.task);

        // playeramount 0 equals none

        let card_id = uuidv4();
        let card = new Card(this.title, this.task, this.playeramount, card_id);
        await this.db.post({
            _id: card_id,
            title: this.title,
            task: this.task,
            playeramount: this.playeramount
        });

        this.cards.push(card);
        // this.db.put(card);
        // this.db.put({
        //     test: 'abc',
        //     alge: 'afafien'
        // });
        // let a = uuidv4();
        
        // console.log(a);
    }

}
