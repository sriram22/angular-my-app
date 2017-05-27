import {food} from '../shared/petfood.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  private foods: food[]=[
    new food('milk', 10),
    new food('Dog food', 2)
  ];

  foodsChanged=new EventEmitter<food[]>();

  edit=new Subject<number>();
  getFoods()
  {
    return this.foods.slice();
  }

  getEditfood(index:number){
    return this.foods[index];
  }
  addFoods(addedFoods: food)
  {
    this.foods.push(addedFoods);
    this.foodsChanged.emit(this.foods.slice());
  }

  addFood(foods: food[])
  {
    // for(let ingredient of ingredients)
    //this.ingredients.push(ingredient);
    this.foods.push(...foods);
    this.foodsChanged.emit(this.foods.slice());
  }

  updateFood(index:number,newFood:food)
  {
    this.foods[index]= newFood;
    this.foodsChanged.emit(this.foods.slice());

  }


  deleteFood(index: number)
  {
    this.foods.splice(index, 1);
    this.foodsChanged.emit(this.foods.slice());

  }
}
