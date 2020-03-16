import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from '../../services/customers.service';
import { NgForm } from '@angular/forms';

declare let M: any;
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomersService]
})
export class CustomersComponent implements OnInit {
  searchText; 
  constructor(public customersService: CustomersService) { }
  
  ngOnInit(): void {
    this.getCustomers();
  }


  addCustomer(form: NgForm){
    if (form.value._id) {
      this.customersService.putCustomer(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly'})
        this.getCustomers();
      });
    }else{
      this.customersService.postCustomer(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Saved Successfuly'})
        this.getCustomers();
      });
    }
   
  }

  getCustomers(){
    this.customersService.getCustomers()
    .subscribe(res =>{
      this.customersService.customers = res as Customer[];
      console.log(res);
      
    })
  }



  getCustomer(_id: string){
    this.customersService.getCustomer(_id)
    .subscribe(res =>{
      this.customersService.customer = res as Customer[];
      console.log(res);
    })
  }
  editCustomer(user : Customer){
    this.customersService.selectedCustomer = user;
    // this.userService.putUser()
  }
  deleteCustomer(_id:string){
    if (confirm('Are you sure you want to delete it?')) {
      this.customersService.deleteCustomer(_id)
      .subscribe(res => {
        console.log(res);
        this.getCustomers();
        M.toast({html: 'Deleted successfuly'})
      });
     

    }

  }


  //clean form after submit
  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.customersService.selectedCustomer = new Customer();
    }
  }

}
