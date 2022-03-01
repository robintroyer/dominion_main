import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';
import { Card } from 'src/models/Card';

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

    downloaded_json: any;
    uploaded_json: any;

    constructor(private router: Router, private sanitizer: DomSanitizer) {
        this.state = [];
        this.old_state = [];
    }

    ngOnInit(): void {
        
    }

    async ionViewWillEnter() {
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

    // async ionViewWillLeave()
    async saveChanges()
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

        this.router.navigate(['../']);
    }


    openCardGenerator()
    {
        this.router.navigate(['/card-generator']);
    }

    deleteCard(card: any)
    {
        // delete card with matching id
    
        // console.log(this.cards);
        // console.log(this.local_cards);
        // console.log(this);
        // console.log(card);
        let pos = this.cards.findIndex((p) => {
            return p.id == card.id;
        });
        if (pos > -1) {
            this.cards.splice(pos, 1);
        }
    }

    downloadCards()
    {
        // download all cards as json, which can be imported later (on another/same device)
        let json = JSON.stringify(this.cards);
        console.log(this.cards);
        var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
        this.downloaded_json = uri;
    }
    fileUploaded(files)
    {
        // upload json to import cards - so far only one json should be selected at a time, iterate for multiple
        // console.log('abc');
        // this.uploaded_json = files.item(0);
        // console.log(this.uploaded_json);
        let filereader = new FileReader();
        let a = '';
        
        // console.log(filereader.readAsText(this.uploaded_json));
        filereader.addEventListener('load', () => {
            // console.log(filereader.result);
            this.uploaded_json = filereader.result;
            this.addFileToDB(this.uploaded_json);
            // console.log(this.uploaded_json);
            // return filereader.result;
        });

        // console.log(files[0]);

        if (files) {
            this.uploaded_json = filereader.readAsText(files[0]);
            // console.log(this.uploaded_json);
        }

        // console.log(this.uploaded_json);
        
    }
    async addFileToDB(json)
    {
        json = JSON.parse(json);
        console.log(json);
        // connect to db and store json
        let db = new PouchDB('local_cards');
        for (let i = 0; i < json.length; i ++) {
            // console.log(json[i].doc);
            let card = new Card(json[i].doc.title, json[i].doc.task, json[i].doc.playeramount, json[i].doc.id)
            console.log(card);
            await db.post({
                _id: json[i].doc.id,
                title: json[i].doc.title,
                task: json[i].doc.task,
                playeramount: json[i].doc.playeramount,
                active: 1
            });
        }
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
    }


}
