import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import {Airbnb} from '../../models/airbnb';
import {AirbnbService} from '../../services/airbnb.service';
import { NgForm } from '@angular/forms';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
declare let M: any;
@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.css'],
  providers: [AirbnbService]
})
export class AirbnbComponent implements OnInit {
  searchText;
  constructor(public airbnbService: AirbnbService) { }

  ngOnInit(): void {
    this.getAirbnbs();
  }
  createReport()  
  {  
    let data = document.getElementById('report');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)  
      pdf.save('Report.pdf'); // Generated PDF 
    });  

  }  

  addCustomer(form: NgForm){
    if (form.value._id) {
      this.airbnbService.putAirbnb(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly'})
        this.getAirbnbs();
      });
    }else{
      this.airbnbService.postAirbnb(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Saved Successfuly'})
        this.getAirbnbs();
      });
    }
   
  }

  getAirbnbs(){
    this.airbnbService.getAirbnbs()
    .subscribe(res =>{
      this.airbnbService.airbnb = res as Airbnb[];
      console.log(res);
      
    })
  }




  editCustomer(airbnb : Airbnb){
    this.airbnbService.selectedAirbnb = airbnb;
    // this.userService.putUser()
  }
  deleteCustomer(_id:string){
    if (confirm('Are you sure you want to delete it?')) {
      this.airbnbService.deleteAirbnb(_id)
      .subscribe(res => {
        console.log(res);
        this.getAirbnbs();
        M.toast({html: 'Deleted successfuly'})
      });
     

    }

  }


  //clean form after submit
  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.airbnbService.selectedAirbnb = new Airbnb();
    }
  }

}
