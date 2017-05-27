import { Component, OnInit } from '@angular/core';
import {Pet} from '../pets.model';
import {PetService} from '../pets.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;
  id:number;

  constructor(private petService: PetService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {

    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.pet = this.petService.getPet(this.id);
      }
    );
  }
  sendItems()
  {
    this.petService.addToShoppingList(this.pet.foods);
  }

  onSelect() {
    this.route.navigate([this.id, 'edit'], {relativeTo: this.router});
  }

  onDeletepet()
  {
    this.petService.deletePet(this.id);
    this.route.navigate(['/pets']);
  }
}
