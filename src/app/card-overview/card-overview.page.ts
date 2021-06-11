import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.page.html',
  styleUrls: ['./card-overview.page.scss'],
})
export class CardOverviewPage implements OnInit {

    cards: any[];
    local_cards: any;
    state: any[];
    old_state: any[];
    db_result: any;

    constructor(private router: Router) {
        this.state = [];
        this.old_state = [];
    }

    async ngOnInit() {
        this.local_cards = new PouchDB('local_cards');
        this.cards = [];
        var result = await this.local_cards.allDocs({
            include_docs: true
        });
        this.db_result = result;
        // console.log(result.rows[0]);
        // result.row.forEach(element => {
        //     this.cards.push(element);
        // });
        for (let i = 0; i < result.rows.length; i++) {
          // console.log('a');
            // console.log(result.rows[i]);
            this.cards.push(result.rows[i]);
            this.state.push(result.rows[i].doc.active);
            this.old_state.push(result.rows[i].doc.active);
        }
        console.log(this.cards);
        console.log(this.state);

    }

    async ionViewWillLeave()
    {
        // update whether cards are actived or not

        // get position of changed elements to sync

        let changed_state = [];
        for (let i = 0; i < this.state.length; i++) {
            if (this.state[i] == this.old_state[i]) {

            } else {
                changed_state.push(i);
            }
        }
        console.log(changed_state);

        for (let i = 0; i < changed_state.length; i++) {
            // let changed = await this.local_cards.put({
            //     _id: this.db_result.rows[changed_state[i]].doc._id,
            //     _rev: this.db_result.rows[changed_state[i]].doc.rev,

            //     title: this.db_result.rows[changed_state[i]].doc.title,
            //     task: this.db_result.rows[changed_state[i]].doc.task,
            //     active: this.db_result.rows[changed_state[i]].doc.active,
            //     playeramount: this.db_result.rows[changed_state[i]].doc.playeramount
            // });
            // console.log('aktiv' + this)

            // set to 0 or to 1
            let change_to: any;
            if (this.db_result.rows[changed_state[i]].doc.active == 1) {
                change_to = 0;
            } else if (this.db_result.rows[changed_state[i]].doc.active == 0) {
                change_to = 1;
            }

            let changed_card = {
                _id: this.db_result.rows[changed_state[i]].doc._id,
                _rev: this.db_result.rows[changed_state[i]].doc._rev,
                title: this.db_result.rows[changed_state[i]].doc.title,
                task: this.db_result.rows[changed_state[i]].doc.task,
                active: change_to,
                playeramount: this.db_result.rows[changed_state[i]].doc.playeramount
            };
            this.local_cards.put(changed_card);
            console.log(changed_card);
            // this.local_cards.put
            
        }
    }


    openCardGenerator()
    {
        this.router.navigate(['/card-generator']);
    }


}
