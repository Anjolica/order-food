import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  btncolor="green";
  show = true;
  addOrderForm:any;
  bookedTableNo:String;
  bookedTable=["a1","b23","c43"];
  foodmenu=["chapati","biryani","shahi Paneer"];
  tableNo:String;
  foodItems:String;
  cust_name:String;
  quantity:number;
  foodArray=[];
  cart={items:null,quantity:null};

  ngOnInit() {this.addOrderForm = this.formBuilder.group({
       tableNo: ['', [Validators.required]],
       bookedTableNo: ['',[Validators.required]],
       foodItems: ['',[Validators.required]],
       quantity: ['',[Validators.required]],
       cust_name:['']
    
    });
  }

  addOrder(){
    
    this.cart.items=this.foodItems;
    this.cart.quantity=this.quantity;
    this.foodArray.push(this.cart);
    this.cart={items:null,quantity:null};
    console.log(this.foodArray);
  }

  removeItem(foodItems){
    console.log("fooo",foodItems);
    this.foodArray.splice(this.foodArray.indexOf(foodItems), 1);
  }

  successMsg(){
    if(this.foodArray.length>0){
      alert("Order placed successfully");
      this.tableNo=null;
      this.bookedTableNo=null; 
      this.foodItems=null;  
      this.quantity=null;  
      this.foodArray=[];
      this.cart={items:null,quantity:null};
    }
    else{
      alert("Oops nothing to order");
    }
    
  }

  existing(){
    this.show = false;
    this.tableNo=null;
    this.bookedTableNo=null; 
    this.foodItems=null;  
    this.quantity=null;  
    this.foodArray=[];
    this.cart={items:null,quantity:null};
  }

}
