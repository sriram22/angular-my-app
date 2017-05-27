
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {PetService} from '../pets/pets.service';
import {Pet} from '../pets/pets.model';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
  constructor(private http: Http, private petService: PetService){}

  storeRecipe(){
    return this.http.put('https://ng-pet-shop.firebaseio.com/pets.json', this.petService.getPets());
  }

  getPet() {
    this.http.get('https://ng-pet-shop.firebaseio.com/pets.json').map(
      (response: Response) => {
        const pets: Pet[] = response.json();
        for (let pet of pets){
          if(!pet['foods'])
          {

            pet['foods'] = [];
          }
        }
        return pets;
      }
    )
      .subscribe(
        (pets: Pet[]) => {

          this.petService.setPets(pets);
        }
      );
  }
}
