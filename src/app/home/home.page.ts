import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';

import * as _ from 'lodash';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    playersData = []; 
    playerLength: number = 0;
    form: FormGroup;

    local_cards: any;
    local_decks: any;
    local_sets: any;
    
    constructor(public formBuilder: FormBuilder, private router: Router) {
        this.form = formBuilder.group({
            players: new FormArray([])
        });
        this.local_cards = new PouchDB('local_cards');
        this.local_decks = new PouchDB('local_decks');
        this.local_sets = new PouchDB('local_sets');
        this.addPlayer();
        this.addPlayer();
        this.addPlayer();
    }
    

    ionViewWillEnter()
    {
        
        this.playersData.forEach((player, index) => {
            const control = this.formBuilder.group({
                firstname: player.firstname
            });
            (this.form.controls.players as FormArray).push(control);
        });
        
        

    }

    addPlayer()
    {
        const control = this.formBuilder.group({
            firstname: ''
        });
        (this.form.controls.players as FormArray).push(control);
        this.playerLength++
    }

    async startGame(){
        

        let players = [];
        for (let i = 0; i < this.form.value.players.length; i++) {
            players.push(this.form.value.players[i]);
        }

        // generate array that contains all possible cards
        // add sets, then decks, then cards

        let possible_cards = [];
        let possible_cards_temp = [];

        // sets

        // decks
        let possible_decks = [];
        var result = await this.local_decks.allDocs({
            include_docs: true
        });
        for (let i = 0; i < result.rows.length; i++) {
            if (result.rows[i].doc.active == 1) {
                possible_decks.push(result.rows[i].doc);
            }
        }
        console.log(possible_decks);
        for (let i = 0; i < possible_decks.length; i++) {
            possible_cards_temp = [];
            possible_cards_temp.push(possible_decks[i].cards);
            console.log(possible_cards_temp[0]);
            
            // console.log(possible_decks[0].cards[0].doc);
            for (let j = 0; j < possible_cards_temp[0].length; j++) {
                console.log(possible_decks);
                console.log(possible_decks[i].cards[j].doc);
                // console.log(possible_cards_temp[0]);
                // possible_cards.push(possible_cards_temp[0][j].doc);

                // check if card is already present

                if (possible_cards.indexOf(possible_cards_temp[0][j].doc) > 0) {

                } else {
                    possible_cards.push(possible_cards_temp[0][j].doc);
                }

                // check if card is already present
                // for (let k = 0; k < possible_cards.length; k++) {
                //     console.log(possible_cards_temp[0][j].doc);
                //     if (possible_cards.indexOf(possible_cards_temp[0][j].doc) > 0) {

                //     } else {
                //         possible_cards.push(possible_cards_temp[0][j].doc);

                //     }
                //     // const is_present = 
                // }

            }
        }
        // console.log(possible_cards);
        

        // cards
        var result = await this.local_cards.allDocs({
            include_docs: true
        });
            
        for (let i = 0; i < result.rows.length; i++) {
            if (result.rows[i].doc.active == 1) {
                // possible_cards.push(result.rows[i].doc);
                if (possible_cards.indexOf(result.rows[i].doc) > 0) {

                } else {
                    possible_cards.push(result.rows[i].doc);
                }
            }
        }

        console.log(possible_cards);

        console.log(possible_cards[0]);
        console.log(possible_cards[4]);
        // console.log(possible_cards[0]._id);
        

        let unique = [];
        let used_ids = [];
        // if (possible_cards[0]._id == possible_cards[4]._id) {
        //     console.log(used_ids.findIndex(possible_cards[0]._id));
        // }
        // console.log(used_ids.find());
        let add = 1;
        for (let i = 0; i < possible_cards.length; i++) {

            for (let j = 0; j < used_ids.length; j++) {
                if (used_ids[j] == possible_cards[i]._id) {
                    console.log('bbbbbbbbbbbb');
                    add = 0;
                    break;
                } else {
                    add = 1;
                }
            }

            if (add) {
                used_ids.push(possible_cards[i]._id);
                unique.push(possible_cards[i]);
            }
            // add = 0;

            

            // if (used_ids.findIndex(possible_cards[i]._id)) {
            //     // card already present
            //     console.log('Card present');
            // } else {
            //     // add card
            //     console.log('Card added');
            //     unique.push(possible_cards[i]);
            // }
        }
        console.log(used_ids);
        console.log(unique);

        // console.log(_.random(0, 5));



        // test
        // let unique = [];
        // let res = possible_cards.reduce((unique), o => {
        //     if (!)
        // })


        // send players and active cards/decks/sets to game page; generation on game page
        let extras: NavigationExtras = {
            state: {
                players: players,
                possible_cards: possible_cards
            }
        }
        this.router.navigate(['/game'], extras);

        // generate random player(s)

        

        // generate task number
    }

    expandOptions()
    {
        let options_div = document.getElementById('options_background');
        options_div.className += ' active';
    }

    openOptions()
    {
        this.router.navigate(['/options']);
    }
    openOverview()
    {
        // let extras: NavigationExtras = {
        //     state: {
        //         local_cards: this.local_cards,
        //         local_decks: this.local_decks,
        //         local_sets: this.local_sets
        //     }
        // };
        // this.router.navigate(['/overview-main'], extras);
        this.router.navigate(['/overview-main']);
    }
    openBrowse()
    {
        this.router.navigate(['/browse']);
    }

}
