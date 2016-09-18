import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe, Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[];
  // private recipes: Recipe[] = [
  //   new Recipe('Schnitzel','Very tasty','http://www.coopzeitung.ch/site/presse/displayImageThumbService/1613009/600x400/Wiener_Schnitzel.jpg', [
  //     new Ingredient('Butter', 2),
  //     new Ingredient('Pork Meat', 1),
  //     new Ingredient('Bread Crumbs', 3)
  //   ]),
  //   new Recipe('Summer Salad','Okayish','http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
  //     new Ingredient('Head of Lettuce', 1),
  //     new Ingredient('Small Tomatoes', 6),
  //     new Ingredient('Cucumber', 2),
  //     new Ingredient('Croutons', 8)
  //   ])
  // ];

  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-86b7d.firebaseio.com/recipes.json', body, { headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-86b7d.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        });
  }
}
