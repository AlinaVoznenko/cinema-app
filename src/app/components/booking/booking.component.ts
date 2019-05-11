import { Component, OnInit } from '@angular/core';
import { callNgModuleLifecycle } from '@angular/core/src/view/ng_module';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 selectedDay: string='';
 selectedTime: string='';
 selectedSeat: string='';
 seatId: string='';
 /*seats: Seats[];*/
 
 days:any = [
   {id:1,
    name:'11 july',
    },
    {id:2,
      name:'15 july',
      },
      {id:3,
        name:'19 july',
        },
        {id:4,
          name:'21 july',
          },
 ];

 times:any = [
  {id:21,
   name:'13:00',
   },
   {id:22,
     name:'15:20',
     },
     {id:23,
       name:'19:40',
       },
       {id:24,
         name:'22:00',
         },
];



radioChangeHandler (event:any) {
  this.selectedDay = event.target.value;
}

radioChangeTime (event:any) {
  this.selectedTime = event.target.value;
}

checkboxChangeSeat(event:any) {
  this.selectedSeat = event.target.value;
}
/*
concertHall() {
  let pre = document.getElementById('seatidd')
  pre.innerHTML += a+b+c;

}*/

 constructor() { }

  ngOnInit() {
    /*this.seats =[
      [,,,,,],
      [,,,,,],
      [,,,,,],
      [,,,,,],
      [,,,,,],
    ];*/
   
      }
      /*
 renderSeats():void {
 
   this.seats.forEach(i => calcMe(${}i))
 };  
 */ 
  }