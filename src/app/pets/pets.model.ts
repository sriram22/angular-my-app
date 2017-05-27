
import {food} from '../shared/petfood.model';
export class Pet {

  public name: string;
  public description: string;
  public imagepath: string;
  public foods: food[];

  constructor(name: string, desc: string, imagepath: string, foods: food[])
  {
    this.name = name;
    this.description = desc;
    this.imagepath = imagepath;
    this.foods = foods;

  }

}
