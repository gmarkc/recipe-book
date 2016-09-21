import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RecipeDetailComponent} from './recipe-detail';
import {RecipeEditComponent} from './recipe-edit';
import {RecipeItemComponent, RecipeListComponent} from './recipe-list';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start.component';
import {recipesRouting} from "./recipes.routing";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        recipesRouting
    ]
})
export class RecipesModule {
}
