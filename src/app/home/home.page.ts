import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    playersData = []; 
    playerLength: number = 0;
    form: FormGroup;
    
    constructor(public formBuilder: FormBuilder, private router: Router) {
        this.form = formBuilder.group({
            players: new FormArray([])
        });
    }
    

    ionViewWillEnter()
    {
        this.addPlayer();
        this.addPlayer();
        this.addPlayer();
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

    startGame(){
        
        console.log(this.form.value.players[0].firstname);
    }

}
