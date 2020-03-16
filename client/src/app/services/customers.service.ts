import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  selectedCustomer: Customer;
  customers: Customer[];

  readonly URL_API = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {
    this.selectedCustomer = new Customer();
   }

     // GET Data from the server

  getCustomers() {
    return this.http.get(this.URL_API);
    
  }
  postCustomer(Customer: Customer){
    return this.http.post(this.URL_API, Customer);
  }

  putCustomer(customer: Customer){
    return this.http.put(this.URL_API + `/${customer._id}`, customer);
  }
  deleteCustomer(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
