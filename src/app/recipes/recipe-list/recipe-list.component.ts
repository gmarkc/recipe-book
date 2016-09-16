import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared';
import { RecipeService } from '../';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = []

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
}
