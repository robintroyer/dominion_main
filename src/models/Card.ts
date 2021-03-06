import { v4 as uuidv4 } from 'uuid';

export class Card {
    constructor(title, task, req_players, active, id?, rev?) {
        this.title = title;
        this.task = task;
        this.req_players = req_players;
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
    
    
    private _task : string;
    public get task() : string {
        return this._task;
    }
    public set task(v : string) {
        this._task = v;
    }

    
    private _req_players : number;
    public get req_players() : number {
        return this._req_players;
    }
    public set req_players(v : number) {
        this._req_players = v;
    }
    
    
    private _active : number;
    public get active() : number {
        return this._active;
    }
    public set active(v : number) {
        this._active = v;
    }
    
    
}