import {NgModule} from '@angular/core';
import {DropDownDirective} from './dropdown.directive';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [DropDownDirective, HomeComponent],
    exports: [DropDownDirective]
})
export class CoreModule {}
