import { Injectable } from '@angular/core';
import { Recipe, Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel','Very tasty','http://www.coopzeitung.ch/site/presse/displayImageThumbService/1613009/600x400/Wiener_Schnitzel.jpg', [
      new Ingredient('Butter', 2),
      new Ingredient('Pork Meat', 1),
      new Ingredient('Bread Crumbs', 3)
    ]),
    new Recipe('Summer Salad','Okayish','http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Head of Lettuce', 1),
      new Ingredient('Small Tomatoes', 6),
      new Ingredient('Cucumber', 2),
      new Ingredient('Croutons', 8)
    ])
  ];

  constructor() { }

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
}
