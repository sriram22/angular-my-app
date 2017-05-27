import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../pets.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  id: number;
  allowEdit = false;

  petForm: FormGroup;

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.allowEdit = params['id'] != null;
        this.initForm();
      }
    );


  }


  private initForm() {

    let petName = '';
    let petImage = '';
    let petDesc = '';
    let petFoods = new FormArray([]);

    if (this.allowEdit) {
      const pet = this.petService.getPet(this.id);
      petName = pet.name;
      petImage = pet.imagepath;
      petDesc = pet.description;
      /* recipeName = this.recipeService.getRecipe(this.id).name;
       recipeImage = this.recipeService.getRecipe(this.id).imagepath;
       recipeDesc = this.recipeService.getRecipe(this.id).description;*/
      if (pet['foods']) {
        for (let food of pet.foods) {
          petFoods.push(new FormGroup(
            {
              'name': new FormControl(food.name, Validators.required),
              'amount': new FormControl(food.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }

    }
    this.petForm = new FormGroup(
      {
        'name': new FormControl(petName, Validators.required),
        'imagepath': new FormControl(petImage, Validators.required),
        'description': new FormControl(petDesc, Validators.required),
        'foods': petFoods
      }
    );

  }

  onSubmit() {
    console.log(this.petForm);
    if (this.allowEdit) {
      this.petService.updatePet(this.id, this.petForm.value);
    } else {
      this.petService.addPet(this.petForm.value);
    }
    this.onCancel();
  }

  onAddFood() {
    (<FormArray>this.petForm.get('foods')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteFood(idx: number) {
    (<FormArray> this.petForm.get('foods')).removeAt(idx);
  }

}
