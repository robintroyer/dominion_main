import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    tasks = [
        {
            name: "Kategorie",
            task: "Behinderte Aussagen von PLAYERNAME1. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Automarken. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Zigarettenmarken. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Spiele die PLAYERNAME1 schon mal gespielt hat. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Dinge die man unbewusst macht. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Legitime Toplane Champions. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Yordles. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kategorie",
            task: "Alle Piraten. Im Uhrzeigersinn, PLAYERNAME2 beginnt. Verlierer trinkt 3 Schlücke."},
        {
            name: "Abstimmung",
            task: "CHAMP1 oder CHAMP2 - wer verursacht mehr Krebszellen? Die Minderheit trinkt 2 Schlücke"},
        {
            name: "Abstimmung",
            task: "RAT IRL ist ein berühmter Streamer. Wäre PLAYERNAME1 eher CHAMP1 IRL oder CHAMP2 IRL"},
        {
            name: "Abstimmung",
            task: "Lieber alle Skins bis jetzt oder alle die was ab heute Releast werden"},
        {
            name: "Abstimmung",
            task: "Wer zwischen PLAYERNAME1 und PLAYERNAME2 würde in einem CHAMP1 1v1 gewinnen? Die Minderheit trinkt 2 Schlücke"},
        {
            name: "Realm of Death",
            task: "PLAYERNAME1 & PLAYERNAME2 ihr seid im Death Realm - Ihr dürft nurmehr miteinander reden."},
        {
            name: "Kalista Ult",
            task: "PLAYERNAME1 du bist jetzt Kalista und darfst dir einen Trinkpartner aussuchen."},
        {
            name: "Jhin Debuff",
            task: "PLAYERNAME1 genehmigt dir 4 Shots"},
        {
            name: "Gragas Debuff",
            task: "PLAYERNAME1 gönn dir dein Glas auf EX"},
        {
            name: "Sona Debuff",
            task: "PLAYERNAME1 , DU BIST STILL."},
        {
            name: "Rengar Debuff",
            task: "PLAYERNAME1 , trink einen Jägermeister."},
        {
            name: "Kog'Maw Debuff",
            task: "PLAYERNAME1 , Du redest die nächsten Runden wie Kog'Maw und wenn jemand speib, gönnst du dir dein Glas auf EX."},
        {
            name: "Zed Debuff",
            task: "PLAYERNAME1 Deathmark: Du musst die nächsten 2 Runden alle Schlücke mittrinken."},
        {
            name: "Urgot Debuff",
            task: "PLAYERNAME1 und PLAYERNAME2 tauschen Plätze."},
        {
            name: "Aphelios Debuff",
            task: "PLAYERNAME1 mach dir 5 verschiedene Getränke/Shots, du musst diese Abwechselnd trinken."},
        {
            name: "Orrrrrrrn Debuff",
            task: "Jeder kippt zusätzlichen Alkohol in sein Getränk."},
        {
            name: "Sylas Debuff",
            task: "PLAYERNAME1 , such dir ein anderes Glas aus - trinke 3 Schlücke."},
        {
            name: "Kindred Debuff",
            task: "Jeder trinkt sein Glas bis zum letzten Schluck."},
        {
            name: "Soraka Debuff",
            task: "Jeder füllt sein Glas komplett auf."},
        {
            name: "Cho'Gath Debuff",
            task: "PLAYERNAME1 Nimm so viel von deinem Getränk in den Mund, wie möglich. Trinke alles."},
        {
            name: "Neeko Debuff",
            task: "PLAYERNAME1 Kopiere das Getränk von jemanden."},
        {
            name: "Assassin Debuff",
            task: "PLAYERNAME1 trink das lowste Getränk am Tisch aus. Du Tiger."},
        {
            name: "Vladimir Debuff",
            task: "PLAYERNAME1 gönn dir ein Glas Rotwein."},
        {
            name: "Talon Debuff",
            task: "PLAYERNAME1 deine Mitspieler haben 10 Minuten Zeit einen Parkour zu bauen, überwinde ihn."},
        {
            name: "Jinx Debuff",
            task: "PLAYERNAME1 überzeuge deine Mitspieler mit einem Jinx-Dance."},
        {
            name: "Towerdive Debuff",
            task: "PLAYERNAME1 gönnt sich einen Shot fürs Team."},
        {
            name: "Tank Debuff",
            task: "PLAYERNAME1 Du musst deine Mitspieler davon überzeugen wie tanky du bist. Trink soviel du kannst."},
        {
            name: "Superminions Debuff",
            task: "PLAYERNAME1 du clearst die Wave und wirst verwundet, trink 3 Schlücke."},
        {
            name: "Gambling Debuff",
            task: "PLAYERNAME1 wirf eine Münze. Hast du Recht, verteile 5 Schlücke. Ansonsten trinke sie selbst."},
        {
            name: "Hextech Chest",
            task: "PLAYERNAME1 mach dir einen Shot und trinke ihn."},
        {
            name: "Rageblade",
            task: "PLAYERNAME1 Im Uhrzeigersinn: Nimm 1 Schluck von deinem Getränk, 2 vom nächsten, 3 vom nächsten... bis du wieder bei dir bist."},
        {
            name: "Nami Buff",
            task: "PLAYERNAME1 darf sich einen Schluck Wasser genehmigen."},
        {
            name: "Oida FoiFick",
            task: "Jeder Satz von PLAYERNAME1 muss -Oida foifick- enthalten."},
        {
            name: "Nenne die Ult",
            task: "PLAYERNAME1 nenne die Ult von CHAMP1 wenn du scheiterst trink 2 Schlücke, ansonsten verteile sie."},
        {
            name: "Cosplay",
            task: "PLAYERNAME1 hat 10 Minuten Zeit einen Champion zu cosplayen. Überzeuge deine Mitspieler --> ansonsten trinke 3 Schlücke."},
        {
            name: "ULLLLLLLLLLI",
            task: "PLAYERNAME1 du darfst keine Schimpfwörter mehr benutzen, ansonsten wirst du gebannt.(5 Schlücke)"},
        {
            name: "Schätzen",
            task: "PLAYERNAME1 & PLAYERNAME2 schätzen wie viele Skins PLAYERNAME3 hat. Der Verlierer trinkt 3 Schlücke."},
        {
            name: "Schätzen",
            task: "PLAYERNAME3 bestimmt ein Land und PLAYERNAME1 & PLAYERNAME2 müssen schätzen wie viele Einwohner dieses Land hat. Der Ungebildete trinkt 4 Schlücke."},
        {
            name: "Schätzen",
            task: "PLAYERNAME3 bestimmt ein Land und PLAYERNAME1 & PLAYERNAME2 müssen schätzen wie viele Einwohner dieses Land hat. Der Ungebildete trinkt 4 Schlücke."},
        {
            name: "Raise Morale",
            task: "Trinkt alle 1 Schluck."},
        {
            name: "Fire at Will",
            task: "PLAYERNAME1 verteilt 10 Schlücke."},
        {
            name: "Deaths Daughter",
            task: "PLAYERNAME1 ext ein Seitel"},
        {
            name: "Riposte",
            task: "PLAYERNAME1 Parriert die nächsten Schlücke und darf diese weiterverteilen."},
        {
            name: "Guardians Angel",
            task: "PLAYERNAME1 skippt den nächsten Schluck"},
        {
            name: "Summoner: Barrier",
            task: "PLAYERNAME1 darf beliebig einen Angriff/Schluck abblocken"},
        {
            name: "Gathering Storm",
            task: "PLAYERNAME1 stellt einen Timer auf 10 Minuten, wenn die Zeit abgelaufen ist, trink 5 Schlücke."},
        {
            name: "Refillable Potion",
            task: "PLAYERNAME1 füllt sein Glas auf."},
        {
            name: "Crit",
            task: "PLAYERNAME1 verdoppelt die nächsten Schlücke die man bekommt/austeilt."},
        {
            name: "Summoner: Cleanse",
            task: "PLAYERNAME1 trinkt so viel Wasser wie er will."},
        {
            name: "Requiem",
            task: "Karthus Ult: Jeder Ext sein Glas wenn es unter 50% Inhalt hat."},
        {
            name: "Laneswap",
            task: "Botlane tower is gone. Laneswap. PLAYERNAME1 und PLAYERNAME2 tauschen Getränke."},
        {
            name: "Stand United",
            task: "PLAYERNAME1 übernimmt die nächsten Schlücke von PLAYERNAME2 ."},
        {
            name: "Corrupting Potion",
            task: "PLAYERNAME1 trinkt 3 Schlücke."},
        {
            name: "Electrocute",
            task: "PLAYERNAME1 trinkt für jeden 3. Schluck einen weiteren. Kein Cooldown."},
        {
            name: "Aram",
            task: "PLAYERNAME1 geht aus dem Raum, seine Mitspieler mischen 5 Zutaten zu einem Shot"},
        {
            name: "Runaan's Hurrican",
            task: "Person links, recht und gegenüber von PLAYERNAME1 trinken 1 Schluck."},
        {
            name: "Dark Harvest",
            task: "PLAYERNAME1 , wenn dein Getränk unter 50% Inhalt hat, musst du es exen."},
        {
            name: "Jon Schnee",
            task: "Wenn deine Eltern bei deiner Geburt nicht verheiratet waren, trink 3 Schlücke. Wenn du es nicht weißt, trink auch 3 Schlücke."},
        {
            name: "Tyrion Lannister",
            task: "Der kleinste Spieler trinkt 5 Schlücke."},
        {
            name: "Taric Buff",
            task: "PLAYERNAME1 sucht sich einen Mitspieler aus. Ihr seid gegen den nächsten Schlücken immun."},
        {
            name: "FF20",
            task: "PLAYERNAME1 , wenn du dein Glas gerade erst gefüllt hast, trinke es aus. Du Versager"},
        {
            name: "True Damage",
            task: "PLAYERNAME1 gönnt sich 4cl Vodka pur. HMMMMMMMMMMMMMMMMMM"},
        {
            name: "Waveclear",
            task: "PLAYERNAME1 trinkt von jedem Glas einmal. Wave ist gecleared."},
        {
            name: "Hodor",
            task: "PLAYERNAME1 darf nurmehr seinen eigenen Namen sagen."},
        {
            name: "ELDER DRAKE",
            task: "PLAYERNAME1 trinkt jedes fast leere Getränk aus."},
        {
            name: "Radio, mein Radio",
            task: "PLAYERNAME1 sucht sich den nächsten Song aus."},
        {
            name: "Grundschritt Cha-Cha-Cha",
            task: "PLAYERNAME1 führt einen Tanz auf. Überzeuge deine Mitspieler."},
        {
            name: "Warmogs",
            task: "PLAYERNAME1 muss sein Glas immer wieder vollfüllen"},
        {
            name: "Klepto",
            task: "Jeder Spieler gibt PLAYERNAME1 beliebig viel Geld. Die Euro-Anzahl wird in Schlücke umgewandelt."},
        {
            name: "Vel'Koz Buff",
            task: "PLAYERNAME1 teilt sein Getränk 50/50 auf und die Mitspieler links und rechts von dir müssen es exen."},
        {
            name: "Veigar Buff",
            task: "PLAYERNAME1 darf sich einen Mitspieler aussuchen der sein Getränk exen muss."},
        {
            name: "Eloboost",
            task: "Jeder trinkt so viele Schlücke wie Striche bei deiner Elo sind. Keine Ahnung wie ma des schreibt."},
        {
            name: "Casanova",
            task: "PLAYERNAME1 erzählt die romantischte Geste die er je gemacht hat, oder er trinkt 2 Schlücke."},
        {
            name: "Guess the Song",
            task: "PLAYERNAME1 sucht für PLAYERNAME2 und PLAYERNAME3 einen Song aus, der als erster den Song errät, verteilt 3 Schlücke."},
        {
            name: "Thornmail",
            task: "PLAYERNAME1 , jeder der Schlücke an dich verteilt, trinkt selber einen."},
        {
            name: "Braum",
            task: "Jeder der kaum Barthaare hat trinkt 2 Schlücke ansonsten verteile sie."},
        {
            name: "PornStar",
            task: "PLAYERNAME1 verteile 2 Schlücke an die Person, die deiner Meinung nach den besten Körper hat."},
        {
            name: "ÄÄÄÄÄÄHM",
            task: "PLAYERNAME1 muss jeden Satz mit einem 2 sekündigen Ääääh anfangen. 3 Schlücke wenn vergessen."},
        {
            name: "Daumenmaster",
            task: "PLAYERNAME1 ist jetzt der Daumenmaster"},
        {
            name: "Rakan Xayah Buff",
            task: "PLAYERNAME1 und PLAYERNAME2 sind jetzt Fix zom, ihr könnt euch die Schlücke teilen."},
        {
            name: "Verteile",
            task: "PLAYERNAME1 verteile so viele Schlücke wie du Snus Marken aufzählen kannst."},
        {
            name: "Kategorie",
            task: "PLAYERNAME1 sucht sich eine Kategorie aus. PLAYERNAME2 beginnt. Im Uhrzeigersinn. Verlierer trinkt 3 Schlücke."},
        {
            name: "Städtenamen",
            task: "Städtenamen die mit dem von PLAYERNAME1 ausgesuchten Buchstaben beginnen. PLAYERNAME2 beginnt. Im Uhrzeigersinn. Verlierer trinkt 3 Schlücke."},
        {
            name: "Kled",
            task: "Jeder der ein eigenes Auto hat trinkt 2 Schlücke."},
        {
            name: "Gold Lead",
            task: "Der mit dem meisten Geld trinkt 3 Schlücke."},
        {
            name: "Youngstars",
            task: "Die jüngsten 2 Spieler trinken 3 Schlücke."},
        {
            name: "Never Have I Ever",
            task: "Eine Runde never have i ever. PLAYERNAME1 beginnt. Verlierer trinken einen Schluck."},
        {
            name: "Debuff Fiddlesticks",
            task: "PLAYERNAME1 darf sich nur mehr zum trinken bewegen."},
        {
            name: "Pyke Buff",
            task: "PLAYERNAME1 darf, wenn er will ein Getränk executen, dafür darf er einen anderen Spieler bestimmen der sein Getränk exen muss."},
        {
            name: "Malphite Debuff",
            task: "PLAYERNAME1 ist unstoppable, du darfsd zwischen deine Schlücke nicht mehr absetzen."},
        {
            name: "Reimen",
            task: "Wörter die sich auf Vorhaut reimen. PLAYERNAME1 beginnt. Verlierer trinkt 2 Schlücke."},
        {
            name: "Abstimmung",
            task: "Abstimmung: wer ist der größte Mongo."},
        {
            name: "Ban Phase",
            task: "PLAYERNAME1 darf ein Wort bannen. Dieses Wort darf nicht mehr gesagt werden. Wenn doch, trinke 2 Schlücke."},
        {
            name: "Neeko Buff",
            task: "PLAYERNAME1 muss einen anderen Mitspieler imitieren, wer zuerst herausfindet welche Person gemeint ist verteilt 5 Schlücke."},
        {
            name: "Grasp of the undying",
            task: "Ihr wählt den Spieler der schon am meisten getrunken hat. Dieser trinkt 3 Schlücke."},
        {
            name: "Schere, Stein, Papier",
            task: "Der mit der höchsten und der mit der niedrigsten Elo spielen eine Runde Schere, Stein, Papier. Der Gewinner verteilt 5 Schlücke."},
        {
            name: "Schere, Stein, Papier",
            task: "Die jüngste und die älteste Person spielen eine Runde Schere, Stein, Papier. Der Gewinner verteilt 5 Schlücke."},
        {
            name: "Wahrheit oder Pflicht",
            task: "PLAYERNAME1 stellt PLAYERNAME2 eine Aufgabe/Frage. Wenn er sich weigert trinkt er 4 Schlücke."},
      ];



    constructor() { }

    ngOnInit() {
    }

}
