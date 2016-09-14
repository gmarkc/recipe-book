import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared';
import { ShoppingListService } from './shopping-list.service';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(value: Ingredient) {
    if(!this.isAdd) {
      // Edit
    } else {
      this.item = new Ingredient(value.name, value.amount);
      this.sls.addItem(this.item);
    }
  }
}
