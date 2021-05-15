import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

    

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  

}
