import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
feed;

form = {
  from: 'DXB',
  destination: 'EBB',
  departure: '2017-12-25',
  return: '2017-12-30'

};
  constructor(private http: Http) { }

  gettravelfeed() {
   const url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?' +
   'origin=DXB&destination=BOS&departure_date=2017-12-25&' +
   'return_date=2017-12-30&number_of_results=30&apikey=' +
   'mzAoLKWYg0aiGC08bSlRe7l5EKOO1szs&currency=AED';

   const url2 = './assets/ug-dubai aed.json';
 return this.http.get(url2).
        map((res: Response) => res.json());
          //  .subscribe(data => {
          //    this.feed = data;

          //  });

  }


getflight(form) {
  const url1 = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?';
 const origin = 'origin=' + form.from;
 const dest = '&destination=' + form.destination;
 const dep = '&departure_date=' + form.departure;
 const ret = '&return_date=' + form.return;
  const apiresults = '&number_of_results=10&apikey=' +
  'mzAoLKWYg0aiGC08bSlRe7l5EKOO1szs&currency=AED';

 const url = url1 + origin + dest + dep + ret + apiresults;
 return this.http.get(url)
      .map((res: Response) => res.json());

}



gethotels(form) {
  const url1 = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?';
 const origin = 'origin=' + form.from;
 const dest = '&destination=' + form.destination;
 const dep = '&departure_date=' + form.departure;
 const ret = '&return_date=' + form.return;
  const apiresults = '&number_of_results=10&apikey=' +
  'mzAoLKWYg0aiGC08bSlRe7l5EKOO1szs&currency=AED';

 const url = url1 + origin + dest + dep + ret + apiresults;
 return this.http.get(url)
      .map((res: Response) => res.json());

}



}
