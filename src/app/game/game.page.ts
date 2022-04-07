import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

    players: any[];
    possible_cards: any[];

    shuffled_array: any[];
    task_number: number;

    current_task: any;
    current_task_filled: any;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.players = [];
        this.possible_cards = [];
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.players = this.router.getCurrentNavigation().extras.state.players;
            this.possible_cards = this.router.getCurrentNavigation().extras.state.possible_cards;
            
        });

        // const possible_cards_backup = this.possible_cards;


        console.log(this.players);
        console.log(this.possible_cards);

        // shuffle players array
        this.shuffled_array = this.shuffleArray(this.players);
        console.log(this.shuffled_array);

        // random task number
        this.task_number = Math.floor(Math.random() * this.possible_cards.length);
        console.log(this.task_number);

        // get task which should be displayed
        this.current_task = this.possible_cards[this.task_number];
        console.log(this.current_task);

        // replace playername
        console.log(this.possible_cards);

        this.current_task_filled = Object.create(this.current_task);
        console.log(this.current_task);
        if (this.current_task.playeramount > 0) {
            this.current_task_filled.task = this.replacePlayername(this.current_task_filled.task, this.current_task_filled.playeramount, this.shuffled_array);
        }
        console.log(this.current_task);
        console.log(this.possible_cards);
    
    }

    replacePlayername(task: string, amount: number, array)
    {
        let task_copy = task;
        console.log(amount);
        for (let i = 1; i <= amount; i++) {
            console.log(array);
            task_copy = task_copy.replace('PLAYERNAME' + i + '', array[i - 1].firstname);
            console.log(task_copy);
        }
        
        return task_copy;
    }

    shuffleArray(array)
    {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
        
    }

    nextCard()
    {
        console.log(this.possible_cards);
        let random_number = Math.floor(Math.random() * this.possible_cards.length);
        // do {
        //     let random_number = Math.floor(Math.random() * this.possible_cards.length);
        // } while (random_number == this.task_number);
        this.current_task = this.possible_cards[random_number];
        this.shuffled_array = this.shuffleArray(this.shuffled_array);
        this.current_task_filled = Object.create(this.current_task);
        console.log(this.current_task_filled);
        this.current_task_filled.task = this.replacePlayername(this.current_task_filled.task, this.current_task_filled.playeramount, this.shuffled_array);
    }

    

  

}
