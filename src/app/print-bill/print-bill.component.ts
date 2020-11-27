import { Component, OnInit, } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-print-bill',
  templateUrl: './print-bill.component.html',
  styleUrls: ['./print-bill.component.css']
})
export class PrintBillComponent implements OnInit {

  closeResult = '';
  content:any;

  constructor(public modalService: NgbModal,public ngbActiveModal: NgbActiveModal) { }


  ngOnInit() {
   
  }

  

  closeModal() {
    this.ngbActiveModal.dismiss();
  }



}
