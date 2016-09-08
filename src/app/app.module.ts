import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent, HeaderComponent, DropdownDirective } from './';
import { RecipesComponent, RecipeService } from './recipes';
import { RecipeListComponent, RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail';
import { ShoppingListComponent, ShoppingListAddComponent, ShoppingListService } from './shopping-list';

@NgModule({
    declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, ShoppingListComponent, ShoppingListAddComponent, DropdownDirective],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
    providers: [ RecipeService, ShoppingListService ]
})
export class AppModule {}