import { Injectable, EventEmitter } from '@angular/core';
import { Recipe, Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  selectedRecipeChanged = new EventEmitter<Recipe>();

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

  pushSelectedRecipe(value: Recipe) {
    this.selectedRecipeChanged.emit(value);
  }
}
