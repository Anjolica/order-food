import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PrintBillComponent } from '../print-bill/print-bill.component';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-bill-generate',
  templateUrl: './bill-generate.component.html',
  styleUrls: ['./bill-generate.component.css']
})
export class BillGenerateComponent implements OnInit {

  existing=false;
  show = true;
  bookedTable=["a1","b23","c43"];
  addOrderForm:any;
  cust_name:String;
  tableNo:String;
  cust_mobNo:number;
  discount:number;
  showPopup=false;
  closeResult = '';
  isChecked=false;

  constructor(private formBuilder: FormBuilder,public modalService: NgbModal) { 
   
  }
  

  ngOnInit() {this.addOrderForm = this.formBuilder.group({
       tableNo: ['', [Validators.required]],
       cust_name: ['',[Validators.required]],
       cust_mobNo: ['',[Validators.required]],
       discount: ['',[Validators.required]]
    
    });
  }



  open() {
    this.modalService.open(PrintBillComponent,{
      size: 'sm', backdrop: 'static',
			keyboard: false

    });
  
  }
 

  

}
