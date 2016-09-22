import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() recipeId: number;
}
