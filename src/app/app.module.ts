import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetItemComponent } from './pets/pet-list/pet-item/pet-item.component';
import { PetStartComponent } from './pets/pet-start/pet-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {PetService} from "./pets/pets.service";
import {DataStorageService} from "./shared/data-storage.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {DropDownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    PetEditComponent,
    PetListComponent,
    PetItemComponent,
    PetStartComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropDownDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PetService, DataStorageService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
