import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent, HeaderComponent, DropdownDirective, routing } from './';
import { RecipeService } from './recipes';
import { ShoppingListModule, ShoppingListService } from './shopping-list';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        DropdownDirective, HomeComponent
    ],
    imports: [ 
        BrowserModule, 
        HttpModule,
        routing,
        ShoppingListModule
    ],
    bootstrap: [ 
        AppComponent 
    ],
    providers: [ 
        RecipeService, 
        ShoppingListService 
    ]
})
export class AppModule {}