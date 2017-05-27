import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';

import {food} from '../../shared/petfood.model';

import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') ingredientName: ElementRef;
  // @ViewChild('amountInput') ingredientAmount: ElementRef;

  @ViewChild('f') foodval: NgForm;
  edit=false;
  editIndex:number;
  sub:Subscription;
  item:food;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.sub=this.shoppingListService.edit.subscribe(
      (i:number) => {
        this.edit=true;
        this.editIndex=i;
        this.item=this.shoppingListService.getEditfood(i);
        this.foodval.setValue(
          {
            name:this.item.name,
            amount:this.item.amount
          }
        )
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  addFood()
  {
    // this.shoppingListService.addIngredients(new ingredient(this.ingredientName.nativeElement.value,
    // this.ingredientAmount.nativeElement.value));
    const newIng=new food(this.foodval.value.name,
      this.foodval.value.amount);
    if(this.edit){
      this.shoppingListService.updateFood(this.editIndex, newIng);
    }
    else{
      this.shoppingListService.addFoods(new food(this.foodval.value.name,
        this.foodval.value.amount));
    }
    this.edit=false;
    this.foodval.reset();
  }

  onClear(){
    this.edit=false;
    this.foodval.reset();
  }

  onDelete(){

    this.shoppingListService.deleteFood(this.editIndex);
    this.foodval.reset();
  }
}
