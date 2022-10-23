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



        // shuffle players array
        this.shuffled_array = this.shuffleArray(this.players);

        // random task number
        this.task_number = Math.floor(Math.random() * this.possible_cards.length);

        // get task which should be displayed
        this.current_task = this.possible_cards[this.task_number];

        // replace playername

        this.current_task_filled = Object.create(this.current_task);
        if (this.current_task.playeramount > 0) {
            this.current_task_filled.task = this.replacePlayername(this.current_task_filled.task, this.current_task_filled.playeramount, this.shuffled_array);
        }    
    }

    replacePlayername(task: string, amount: number, array)
    {
        let task_copy = task;
        for (let i = 1; i <= amount; i++) {
            task_copy = task_copy.replace('PLAYERNAME' + i + '', array[i - 1].firstname);
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
        let random_number = Math.floor(Math.random() * this.possible_cards.length);
        this.current_task = this.possible_cards[random_number];
        this.shuffled_array = this.shuffleArray(this.shuffled_array);
        this.current_task_filled = Object.create(this.current_task);
        this.current_task_filled.task = this.replacePlayername(this.current_task_filled.task, this.current_task_filled.playeramount, this.shuffled_array);
    }

    

  

}
