import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/Card';
import * as v5 from 'uuid';

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

    constructor() { }

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
    saveCard()
    {
        // console.log(this.task);

        console.log(this.title);
        console.log(this.playeramount);
        console.log(this.task);

        // playeramount 0 equals none

        let card = new Card(this.title, this.task, this.playeramount);
        let a = v5();
        
        console.log(a);
    }

}
