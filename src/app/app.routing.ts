import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent, RECIPE_ROUTES } from './recipes';
import { ShoppingListComponent } from './shopping-list';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);