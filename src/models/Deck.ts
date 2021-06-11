import { v4 as uuidv4 } from 'uuid';

export class Deck {
    constructor(title, cards, active, id?, rev?) {
        this.title = title;
        this.cards = cards;
        this.active = active;

        if (id) {
            this._id = id;
        } else {
            this._id = uuidv4();
        }
        if (rev) {
            this._rev = rev;
        }
    }
    
    private _id : string;
    public get id() : string {
        return this._id;
    }
    
    private _rev : string;
    public get rev() : string {
        return this._rev;
    }
    public set rev(v : string) {
        this._rev = v;
    }
    
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
    }
    
    private _cards : any;
    public get cards() : any {
        return this._cards;
    }
    public set cards(v : any) {
        this._cards = v;
    }
    
    private _active : string;
    public get active() : string {
        return this._active;
    }
    public set active(v : string) {
        this._active = v;
    }
    
    
    
}