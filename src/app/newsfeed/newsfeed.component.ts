import { Observable } from 'rxjs/Observable';
import { NewsService } from './../news.service';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styles: []
})
export class NewsfeedComponent implements OnInit {
title;
travelfeed;
travelinout;
myresults;
results;
newfeed = ' ';
filmz;
currency;
showinfo = false;
showfew = false;
showmore = true;
newresults  = [];

form = {
  from: 'DXB',
  destination: 'BOS',
  departure: '2017-12-25',
  return: '2017-12-30'

};

  constructor(private svc: NewsService) { }

  // search flight

  searchflight(form) {

   this.svc.getflight(this.form)
   .subscribe( data => {
    this.newfeed = data.results;
    console.log(data.results);
   });

  }

  // show more info on buttonclik
  showdetails(event) {
for (let i = 0; i < this.newfeed.length; i++) {
    this.showinfo = true;
    this.showfew = true;
   this.showmore = false;


  }



  }



  // show less info on buttonclik
  showless() {
    this.showinfo = false;
    this.showmore = true;
    this.showfew = false;

  }


  // show total files

  ngOnInit() {
    this.newfeed = '';
    this.travelfeed = this.svc.gettravelfeed()
       .subscribe( travel => {
         this.currency = travel.currency;
   this.newfeed = travel.results;
   console.log(this.newfeed);

 });


//  this.filmz = this.svc.getfilm()
//       .subscribe(data => {
//         this.filmz = data.posts;
//         console.log(this.filmz);
//       });

  }

}
