import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent, HeaderComponent } from './';
import { RecipesComponent } from './recipes';
import { RecipeListComponent, RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail';
import { ShoppingListComponent, ShoppingListAddComponent } from './shopping-list';

@NgModule({
    declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingListComponent, ShoppingListAddComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent] 
})
export class AppModule {}