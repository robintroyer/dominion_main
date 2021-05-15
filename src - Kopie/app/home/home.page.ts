import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    playerCountArray: any[];
    playerCounter: number;

    // playerForm: FormGroup;
    // playerNames = [];


    form: FormGroup;

    playersData = [];

    constructor(public formBuilder: FormBuilder) {
        // this.playerForm = formBuilder.group({
        //     players: new FormArray([])
        // });
        this.form = formBuilder.group({
            players: new FormArray([])
        });
    }

    ionViewWillEnter()
    {
        this.playerCountArray = [];
        this.playerCounter = 1;
        this.playerCountArray.push(this.playerCounter);
        this.playerCounter++;
        this.playerCountArray.push(this.playerCounter);
        this.playerCounter++
        this.playerCountArray.push(this.playerCounter);
        this.playerCounter++;
        console.log(this.playerCountArray);


        this.playersData.forEach(player, index) => {
            const control = this.formBuilder.group({
                firstname = player.firstname
            });
            (this.form.controls.players as FormArray).push
        }
        

    }

    addPlayer()
    {
        
        this.playerCountArray.push(this.playerCounter);
        this.playerCounter++;
    }

}
