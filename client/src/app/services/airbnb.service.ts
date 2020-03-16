import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airbnb } from '../models/airbnb';
@Injectable({
  providedIn: 'root'
})
export class AirbnbService {
  selectedAirbnb: Airbnb;
  airbnb: Airbnb[];

  readonly URL_API = 'http://localhost:3000/listenings';

  constructor(private http: HttpClient) {
    this.selectedAirbnb = new Airbnb();
   }

   
  getAirbnbs() {
    return this.http.get(this.URL_API);
    
  }

  postAirbnb(Airbnb: Airbnb){
    return this.http.post(this.URL_API, Airbnb);
  }



  putAirbnb(airbnb: Airbnb){
    return this.http.put(this.URL_API + `/${airbnb._id}`, airbnb);
  }
  deleteAirbnb(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
