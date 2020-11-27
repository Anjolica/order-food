import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import {ActivatedRoute} from '@angular/router';

import {LoginComponent } from '../login/login.component';
import { HttpErrorResponse } from '@angular/common/http';

import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  data = [{food:"chapati",price:10},{food:"shahi Paneer",price:250},{food:"Dum biryani",price:160}];
  openOrderPage : boolean = false;


  items: any;
  objectKeys = Object.keys;
  open_po_cnt = 0;
  close_po_cnt = 0;
  sum_cnt = 0;
  vendor_cnt = 0;
  sum_close=0;
  searchterm: String = '';

  invoiceBoolen : boolean = false;
  closeBoolean : boolean = false;
  vendorBoolean : boolean = false;
  p:any;
  username:String;
  password:number;
  currentPage:any;
  showFood=false;
  showTable=false;
  shortcloseboolean: boolean = false;
  constructor(private route: ActivatedRoute,public modalService: NgbModal, public common: CommonService, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
       this.username = event.username;
       this.password = event.password;
    });
    if(this.username=="admin" && this.password==987654)
    {
       this.showFood=true;
       this.showTable=true;
    }

    console.log("tssud",this.username,this.password);
  
  }

  openAddOrder(){
   
    this.router.navigateByUrl('/addOrder');
    
  }

  openFoodPage(){
    this.router.navigateByUrl('/foodMenu');
  }

  openBill(){
    this.router.navigateByUrl('/billGenerate');
  }


}