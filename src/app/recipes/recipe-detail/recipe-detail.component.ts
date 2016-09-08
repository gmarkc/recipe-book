import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared';
import { RecipeService } from '../';
import { ShoppingListService } from '../../shopping-list';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor(private recipeService: RecipeService, private sls: ShoppingListService) { }

    ngOnInit() {
      this.recipeService.selectedRecipeChanged.subscribe(
        data => {
          this.selectedRecipe = data;
        }
      )
    }

    onAddToShoppingList() {
      this.sls.addItems(this.selectedRecipe.ingredients);
    }
}
