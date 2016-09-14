import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent, HeaderComponent, DropdownDirective, routing } from './';
import { RecipesComponent, RecipeService, RecipeStartComponent } from './recipes';
import { RecipeListComponent, RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail';
import { RecipeEditComponent } from './recipes/recipe-edit';
import { ShoppingListComponent, ShoppingListAddComponent, ShoppingListService } from './shopping-list';

@NgModule({
    declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeEditComponent,  RecipeDetailComponent, RecipeStartComponent, ShoppingListComponent, ShoppingListAddComponent, DropdownDirective],
    imports: [ BrowserModule, FormsModule, routing ],
    bootstrap: [ AppComponent ],
    providers: [ RecipeService, ShoppingListService ]
})
export class AppModule {}