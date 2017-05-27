import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import {PetService} from '../pets.service';
import {Pet} from '../pets.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {


  pets: Pet[];
  subscription: Subscription;

  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.petService.petsChanged
      .subscribe(
        (pets: Pet[]) => {
          this.pets = pets;
        }
      );
    this.pets = this.petService.getPets();
  }

  navigateToNew()
  {
    this.router.navigate(['addNew'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
