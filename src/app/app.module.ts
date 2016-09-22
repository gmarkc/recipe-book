import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent, HeaderComponent, routing } from './';
import { RecipeService } from './recipes';
import { ShoppingListModule, ShoppingListService } from './shopping-list';
import {CoreModule} from './core.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ShoppingListModule,
        CoreModule
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
