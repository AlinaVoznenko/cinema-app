import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert-hall',
  templateUrl: './concert-hall.component.html',
  styleUrls: ['./concert-hall.component.css']
})
export class ConcertHallComponent implements OnInit {
row: number;
collom: number;
Hall: Array<5>;




  constructor() { }

  ngOnInit() {
    this.row = 5;
    this.collom = 5;
     for (i=0 ; i<this.collom ; i++)
     
  }

}
