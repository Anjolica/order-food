import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foodMenu= [
              {food: "chapati", price: 10},
              {food: "shahi paneer", price: 150},
              {food: "paneer chilly", price: 200},
            ];
  constructor() { }

  ngOnInit() {
  }

  addRow(){
    this.foodMenu.push({food:"",price:null});
  }

  removeItem(foodItems){
    this.foodMenu.splice(this.foodMenu.indexOf(foodItems), 1);
  }

}
