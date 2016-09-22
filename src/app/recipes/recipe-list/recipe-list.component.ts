import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared';
import { RecipeService } from '../';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.fetchData();
        // this.recipes = this.recipeService.getRecipes();
        this.recipeService.recipesChanged.subscribe(
            (recipes: Recipe[]) => this.recipes = recipes
        );
    }
}
