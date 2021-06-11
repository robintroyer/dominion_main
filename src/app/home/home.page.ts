import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';

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
        
        console.log(this.form.value.players[0].firstname);

        let players = [];
        for (let i = 0; i < this.form.value.players.length; i++) {
            players.push(this.form.value.players[i]);
        }

        // generate array that contains all possible cards
        // add sets, then decks, then cards

        let possible_cards = [];
        var result = await this.local_cards.allDocs({
            include_docs: true
        });
        console.log(result);
            
        for (let i = 0; i < result.rows.length; i++) {
            if (result.rows[i].doc.active == 1) {
                possible_cards.push(result.rows[i].doc);
            }
        }
        // console.log(result);


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
