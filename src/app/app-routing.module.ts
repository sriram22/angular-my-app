import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetItemComponent } from './pets/pet-list/pet-item/pet-item.component';
import { PetStartComponent } from './pets/pet-start/pet-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '' , redirectTo : '/pets',pathMatch:'full'},
  {path:'pets',component : PetsComponent, children: [
    {path: '', component: PetStartComponent},
    {path: 'addNew', component: PetEditComponent},
    {path: ':id', component: PetDetailComponent},
    {path: ':id/edit', component: PetEditComponent}
  ]},
  {path:'shoppingList',component:ShoppingListComponent}

]

@NgModule({
  imports: [
    //  RouterModule.forRoot(appRoutes,{useHash:true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
