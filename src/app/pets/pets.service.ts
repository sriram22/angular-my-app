import {Pet} from './pets.model';
import { Injectable} from '@angular/core';
import {food} from '../shared/petfood.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class PetService {

  petsChanged = new Subject<Pet[]>();




  private pets: Pet[]=[
    new Pet('Pedigree',
      'If you are considering buying a pedigree',
      'https://www.pets4homes.co.uk/images/articles/648/large/55644fccdd45b.jpg',
      [
        new food('Meat',1),
        new food('dog food',1)

      ]),
    new Pet('Persian Cat',
      'smart cat',
      'http://cdn2-www.cattime.com/assets/uploads/2011/12/file_2676_persian-460x290-460x290.jpg',
      [
        new food('milk',10),
        new food('cat food',1)

      ])
  ];


  constructor(private shoppingService: ShoppingListService){}

  getPets()
  {
    return this.pets.slice();
  }

  addToShoppingList(foods: food[])
  {
    this.shoppingService.addFood(foods);
  }

  getPet(id: number)
  {
    return this.pets[id];
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    this.petsChanged.next(this.pets.slice());
  }

  updatePet(idx: number, pet: Pet) {
    this.pets[idx] = pet;
    this.petsChanged.next(this.pets.slice());
  }

  deletePet(idx: number)
  {
    this.pets.splice(idx, 1);
    this.petsChanged.next(this.pets.slice());
  }

  setPets(pets: Pet[]) {
    this.pets= pets;
    this.petsChanged.next(this.pets.slice());

  }
}
