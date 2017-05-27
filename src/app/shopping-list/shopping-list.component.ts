import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service'

import {food} from '../shared/petfood.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  foods: food[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.foods = this.shoppingListService.getFoods();

    this.shoppingListService.foodsChanged.subscribe(
      (foods: food[]) =>{
        this.foods= foods;
      }
    )


  }
  editFood(i: number)
  {
    this.shoppingListService.edit.next(i);
  }

}
