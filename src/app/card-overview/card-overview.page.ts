import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import PouchDB from 'pouchdb/dist/pouchdb';
import { Card } from 'src/models/Card';

import { v4 as uuidv4 } from 'uuid';

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
        for (let i = 0; i < result.rows.length; i++) {
            this.cards.push(result.rows[i]);
            this.state.push(result.rows[i].doc.active);
            this.old_state.push(result.rows[i].doc.active);
        }

        this.importOriginalCards();

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

        for (let i = 0; i < changed_state.length; i++) {

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
        var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
        this.downloaded_json = uri;
    }
    fileUploaded(files)
    {
        // upload json to import cards - so far only one json should be selected at a time, iterate for multiple
        let filereader = new FileReader();
        let a = '';
        
        filereader.addEventListener('load', () => {
            this.uploaded_json = filereader.result;
            this.addFileToDB(this.uploaded_json);
        });
        if (files) {
            this.uploaded_json = filereader.readAsText(files[0]);
        }
    }
    async addFileToDB(json)
    {
        json = JSON.parse(json);
        let db = new PouchDB('local_cards');
        for (let i = 0; i < json.length; i ++) {
            let card = new Card(json[i].doc.title, json[i].doc.task, json[i].doc.playeramount, json[i].doc.id)
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
        for (let i = 0; i < result.rows.length; i++) {
            this.cards.push(result.rows[i]);
            this.state.push(result.rows[i].doc.active);
            this.old_state.push(result.rows[i].doc.active);
        }
    }

    closeOverview() {
        this.router.navigate(['./overview-main']);
    }

    async importOriginalCards()
    {
        // comment this function if original cards should not be implemented
        // cards without decks/sets for now

        // cards that require categories are left out for now

        // contains: id, rev (ignore for now?); focus on: title, task, playeramount, active

        // cards should be added to db if not present yet

        let original_cards = [
            {
                title: "Kategorie",
                task: "Behinderte Aussagen von PLAYERNAME1. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 2,
                active: 1
            }, 
            {
                title: "Kategorie",
                task: "Automarken. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
                {
                title: "Kategorie",
                task: "Zigarettenmarken. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kategorie",
                task: "Spiele die PLAYERNAME1 schon mal gespielt hat. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Kategorie",
                task: "Dinge die man unbewusst macht. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kategorie",
                task: "Legitime Toplane Champions. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kategorie",
                task: "Yordles. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kategorie",
                task: "Alle Piraten. Im Uhrzeigersinn, PLAYERNAME1 beginnt. Verlierer trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Abstimmung",
                task: "Lieber alle Skins bis jetzt oder alle die was ab heute releast werden",
                playeramount: 0,
                active: 1
            },
            {
                title: "Realm of Death",
                task: "PLAYERNAME1 & PLAYERNAME2 ihr seid im Death Realm - Ihr dürft nurmehr miteinander reden.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Kalista Ult",
                task: "PLAYERNAME1 du bist jetzt Kalista und darfst dir einen Trinkpartner aussuchen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Jhin Debuff",
                task: "PLAYERNAME1 genehmigt dir 4 Shots",
                playeramount: 1,
                active: 1
            },
            {
                title: "Gragas Debuff",
                task: "PLAYERNAME1 gönn dir dein Glas auf EX",
                playeramount: 1,
                active: 1
            },
            {
                title: "Sona Debuff",
                task: "PLAYERNAME1 , DU BIST STILL.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Rengar Debuff",
                task: "PLAYERNAME1 , trink einen Jägermeister.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kog'Maw Debuff",
                task: "PLAYERNAME1 , Du redest die nächsten Runden wie Kog'Maw und wenn jemand speib, gönnst du dir dein Glas auf EX.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Zed Debuff",
                task: "PLAYERNAME1 Deathmark: Du musst die nächsten 2 Runden alle Schlücke mittrinken.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Urgot Debuff",
                task: "PLAYERNAME1 und PLAYERNAME2 tauschen Plätze.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Aphelios Debuff",
                task: "PLAYERNAME1 mach dir 5 verschiedene Getränke/Shots, du musst diese Abwechselnd trinken.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Orrrrrrrn Debuff",
                task: "Jeder kippt zusätzlichen Alkohol in sein Getränk.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Sylas Debuff",
                task: "PLAYERNAME1 , such dir ein anderes Glas aus - trinke 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kindred Debuff",
                task: "Jeder trinkt sein Glas bis zum letzten Schluck.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Soraka Debuff",
                task: "Jeder füllt sein Glas komplett auf.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Cho'Gath Debuff",
                task: "PLAYERNAME1 Nimm so viel von deinem Getränk in den Mund, wie möglich. Trinke alles.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Neeko Debuff",
                task: "PLAYERNAME1 Kopiere das Getränk von jemanden.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Assassin Debuff",
                task: "PLAYERNAME1 trink das lowste Getränk am Tisch aus. Du Tiger.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Vladimir Debuff",
                task: "PLAYERNAME1 gönn dir ein Glas Rotwein.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Talon Debuff",
                task: "PLAYERNAME1 deine Mitspieler haben 10 Minuten Zeit einen Parkour zu bauen, überwinde ihn.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Jinx Debuff",
                task: "PLAYERNAME1 überzeuge deine Mitspieler mit einem Jinx-Dance.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Towerdive Debuff",
                task: "PLAYERNAME1 gönnt sich einen Shot fürs Team.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Tank Debuff",
                task: "PLAYERNAME1 Du musst deine Mitspieler davon überzeugen wie tanky du bist. Trink soviel du kannst.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Superminions Debuff",
                task: "PLAYERNAME1 du clearst die Wave und wirst verwundet, trink 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Gambling Debuff",
                task: "PLAYERNAME1 wirf eine Münze. Hast du Recht, verteile 5 Schlücke. Ansonsten trinke sie selbst.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Hextech Chest",
                task: "PLAYERNAME1 mach dir einen Shot und trinke ihn.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Rageblade",
                task: "PLAYERNAME1 Im Uhrzeigersinn: Nimm 1 Schluck von deinem Getränk, 2 vom nächsten, 3 vom nächsten... bis du wieder bei dir bist.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Nami Buff",
                task: "PLAYERNAME1 darf sich einen Schluck Wasser genehmigen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Oida FoiFick",
                task: "Jeder Satz von PLAYERNAME1 muss -Oida foifick- enthalten.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Cosplay",
                task: "PLAYERNAME1 hat 10 Minuten Zeit einen Champion zu cosplayen. Überzeuge deine Mitspieler --> ansonsten trinke 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "ULLLLLLLLLLI",
                task: "PLAYERNAME1 du darfst keine Schimpfwörter mehr benutzen, ansonsten wirst du gebannt.(5 Schlücke)",
                playeramount: 1,
                active: 1
            },
            {
                title: "Schätzen",
                task: "PLAYERNAME1 & PLAYERNAME2 schätzen wie viele Skins PLAYERNAME3 hat. Der Verlierer trinkt 3 Schlücke.",
                playeramount: 3,
                active: 1
            },
            {
                title: "Schätzen",
                task: "PLAYERNAME3 bestimmt ein Land und PLAYERNAME1 & PLAYERNAME2 müssen schätzen wie viele Einwohner dieses Land hat. Der Ungebildete trinkt 4 Schlücke.",
                playeramount: 3,
                active: 1
            },
            {
                title: "Raise Morale",
                task: "Trinkt alle 1 Schluck.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Fire at Will",
                task: "PLAYERNAME1 verteilt 10 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Deaths Daughter",
                task: "PLAYERNAME1 ext ein Seitel",
                playeramount: 1,
                active: 1
            },
            {
                title: "Riposte",
                task: "PLAYERNAME1 Parriert die nächsten Schlücke und darf diese weiterverteilen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Guardians Angel",
                task: "PLAYERNAME1 skippt den nächsten Schluck",
                playeramount: 1,
                active: 1
            },
            {
                title: "Summoner: Barrier",
                task: "PLAYERNAME1 darf beliebig einen Angriff/Schluck abblocken",
                playeramount: 1,
                active: 1
            },
            {
                title: "Gathering Storm",
                task: "PLAYERNAME1 stellt einen Timer auf 10 Minuten, wenn die Zeit abgelaufen ist, trink 5 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Refillable Potion",
                task: "PLAYERNAME1 füllt sein Glas auf.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Crit",
                task: "PLAYERNAME1 verdoppelt die nächsten Schlücke die man bekommt/austeilt.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Summoner: Cleanse",
                task: "PLAYERNAME1 trinkt so viel Wasser wie er will.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Requiem",
                task: "Karthus Ult: Jeder Ext sein Glas wenn es unter 50% Inhalt hat.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Laneswap",
                task: "Botlane tower is gone. Laneswap. PLAYERNAME1 und PLAYERNAME2 tauschen Getränke.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Stand United",
                task: "PLAYERNAME1 übernimmt die nächsten Schlücke von PLAYERNAME2 .",
                playeramount: 2,
                active: 1
            },
            {
                title: "Corrupting Potion",
                task: "PLAYERNAME1 trinkt 3 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Electrocute",
                task: "PLAYERNAME1 trinkt für jeden 3. Schluck einen weiteren. Kein Cooldown.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Aram",
                task: "PLAYERNAME1 geht aus dem Raum, seine Mitspieler mischen 5 Zutaten zu einem Shot",
                playeramount: 1,
                active: 1
            },
            {
                title: "Runaan's Hurrican",
                task: "Person links, rechts und gegenüber von PLAYERNAME1 trinken 1 Schluck.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Dark Harvest",
                task: "PLAYERNAME1 , wenn dein Getränk unter 50% Inhalt hat, musst du es exen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Jon Schnee",
                task: "Wenn deine Eltern bei deiner Geburt nicht verheiratet waren, trink 3 Schlücke. Wenn du es nicht weißt, trink auch 3 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Tyrion Lannister",
                task: "Der kleinste Spieler trinkt 5 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Taric Buff",
                task: "PLAYERNAME1 sucht sich einen Mitspieler aus. Ihr seid gegen den nächsten Schlücken immun.",
                playeramount: 1,
                active: 1
            },
            {
                title: "FF20",
                task: "PLAYERNAME1 , wenn du dein Glas gerade erst gefüllt hast, trinke es aus. Du Versager",
                playeramount: 1,
                active: 1
            },
            {
                title: "True Damage",
                task: "PLAYERNAME1 gönnt sich 4cl Vodka pur. HMMMMMMMMMMMMMMMMMM",
                playeramount: 1,
                active: 1
            },
            {
                title: "Waveclear",
                task: "PLAYERNAME1 trinkt von jedem Glas einmal. Wave ist gecleared.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Hodor",
                task: "PLAYERNAME1 darf nurmehr seinen eigenen Namen sagen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "ELDER DRAKE",
                task: "PLAYERNAME1 trinkt jedes fast leere Getränk aus.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Radio, mein Radio",
                task: "PLAYERNAME1 sucht sich den nächsten Song aus.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Grundschritt Cha-Cha-Cha",
                task: "PLAYERNAME1 führt einen Tanz auf. Überzeuge deine Mitspieler.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Warmogs",
                task: "PLAYERNAME1 muss sein Glas immer wieder vollfüllen",
                playeramount: 1,
                active: 1
            },
            {
                title: "Klepto",
                task: "Jeder Spieler gibt PLAYERNAME1 beliebig viel Geld. Die Euro-Anzahl wird in Schlücke umgewandelt.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Vel'Koz Buff",
                task: "PLAYERNAME1 teilt sein Getränk 50/50 auf und die Mitspieler links und rechts von dir müssen es exen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Veigar Buff",
                task: "PLAYERNAME1 darf sich einen Mitspieler aussuchen der sein Getränk exen muss.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Eloboost",
                task: "Jeder trinkt so viele Schlücke wie Striche bei deiner Elo sind. Keine Ahnung wie ma des schreibt.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Casanova",
                task: "PLAYERNAME1 erzählt die romantischte Geste die er je gemacht hat, oder er trinkt 2 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Guess the Song",
                task: "PLAYERNAME1 sucht für PLAYERNAME2 und PLAYERNAME3 einen Song aus, der als erster den Song errät, verteilt 3 Schlücke.",
                playeramount: 3,
                active: 1
            },
            {
                title: "Thornmail",
                task: "PLAYERNAME1 , jeder der Schlücke an dich verteilt, trinkt selber einen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Braum",
                task: "Jeder der kaum Barthaare hat trinkt 2 Schlücke ansonsten verteile sie.",
                playeramount: 0,
                active: 1
            },
            {
                title: "PornStar",
                task: "PLAYERNAME1 verteile 2 Schlücke an die Person, die deiner Meinung nach den besten Körper hat.",
                playeramount: 1,
                active: 1
            },
            {
                title: "ÄÄÄÄÄÄHM",
                task: "PLAYERNAME1 muss jeden Satz mit einem 2 sekündigen Ääääh anfangen. 3 Schlücke wenn vergessen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Daumenmaster",
                task: "PLAYERNAME1 ist jetzt der Daumenmaster",
                playeramount: 1,
                active: 1
            },
            {
                title: "Rakan Xayah Buff",
                task: "PLAYERNAME1 und PLAYERNAME2 sind jetzt Fix zom, ihr könnt euch die Schlücke teilen.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Verteile",
                task: "PLAYERNAME1 verteile so viele Schlücke wie du Snus Marken aufzählen kannst.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Kategorie",
                task: "PLAYERNAME1 sucht sich eine Kategorie aus. PLAYERNAME2 beginnt. Im Uhrzeigersinn. Verlierer trinkt 3 Schlücke.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Städtenamen",
                task: "Städtenamen die mit dem von PLAYERNAME1 ausgesuchten Buchstaben beginnen. PLAYERNAME2 beginnt. Im Uhrzeigersinn. Verlierer trinkt 3 Schlücke.",
                playeramount: 2,
                active: 1
            },
            {
                title: "Kled Debuff",
                task: "Jeder der ein eigenes Auto hat trinkt 2 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Gold Lead",
                task: "Der mit dem meisten Geld trinkt 3 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Youngstars",
                task: "Die jüngsten 2 Spieler trinken 3 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Never Have I Ever",
                task: "Eine Runde never have i ever. PLAYERNAME1 beginnt. Verlierer trinken einen Schluck.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Debuff Fiddlesticks",
                task: "PLAYERNAME1 darf sich nur mehr zum trinken bewegen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Pyke Buff",
                task: "PLAYERNAME1 darf, wenn er will ein Getränk executen, dafür darf er einen anderen Spieler bestimmen der sein Getränk exen muss.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Malphite Debuff",
                task: "PLAYERNAME1 ist unstoppable, du darfst zwischen deine Schlücke nicht mehr absetzen.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Reimen",
                task: "Wörter die sich auf Vorhaut reimen. PLAYERNAME1 beginnt. Verlierer trinkt 2 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Abstimmung",
                task: "Abstimmung: wer ist der größte Mongo.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Ban Phase",
                task: "PLAYERNAME1 darf ein Wort bannen. Dieses Wort darf nicht mehr gesagt werden. Wenn doch, trinke 2 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Neeko Buff",
                task: "PLAYERNAME1 muss einen anderen Mitspieler imitieren, wer zuerst herausfindet welche Person gemeint ist verteilt 5 Schlücke.",
                playeramount: 1,
                active: 1
            },
            {
                title: "Grasp of the undying",
                task: "Ihr wählt den Spieler der schon am meisten getrunken hat. Dieser trinkt 3 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Schere, Stein, Papier",
                task: "Der mit der höchsten und der mit der niedrigsten Elo spielen eine Runde Schere, Stein, Papier. Der Gewinner verteilt 5 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Schere, Stein, Papier",
                task: "Die jüngste und die älteste Person spielen eine Runde Schere, Stein, Papier. Der Gewinner verteilt 5 Schlücke.",
                playeramount: 0,
                active: 1
            },
            {
                title: "Wahrheit oder Pflicht",
                task: "PLAYERNAME1 stellt PLAYERNAME2 eine Aufgabe/Frage. Wenn er sich weigert trinkt er 4 Schlücke.",
                playeramount: 2,
                active: 1
            },
            // some new cards
            {
                title: "Seraphine Debuff",
                task: "PLAYERNAME1, singe einen Song deiner Wahl, sind deine Mitspieler nicht überzeugt, trinke 5 Schlücke",
                playeramount: 1,
                active: 1
            }
        ];

        // turn objects into Card objects

        let og_cards = [];


        for (let i = 0; i < original_cards.length; i++) {
            og_cards.push(new Card(original_cards[i].title, original_cards[i].task,
                          original_cards[i].playeramount, original_cards[i].active, uuidv4()));
                          
        }

        // check if cards are in db already


        let db = new PouchDB('local_cards');
        let add = false;

        if (this.cards.length > 0) {
            for (let i = 0; i < og_cards.length; i++) {
                for (let j = 0; j < this.cards.length; j++) {
    
                    if (og_cards[i].task == this.cards[j].doc.task) {
                        add = false;
                        break;
                    } else {
                        add = true;
                       
                    }
                }
                if (add) {
                    await db.post({
                        _id: og_cards[i].id,
                        title: og_cards[i].title,
                        task: og_cards[i].task,
                        playeramount: og_cards[i].req_players,
                        active: og_cards[i].active 
                    });
                }
                
            }
        } else {
            for (let i = 0; i < og_cards.length; i++) {
                await db.post({
                    _id: og_cards[i].id,
                    title: og_cards[i].title,
                    task: og_cards[i].task,
                    playeramount: og_cards[i].req_players,
                    active: og_cards[i].active 
                });
            }
        }   
    }
}
