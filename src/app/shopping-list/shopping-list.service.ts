import { Ingredient } from '../shared';

export class ShoppingListService {
  private items: Ingredient[] = [];
  
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.findIndex((i) => i === item), 1);
  }
}
