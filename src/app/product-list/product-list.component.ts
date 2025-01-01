import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent,NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  name: string = 'iPhone 14';
  price: number = 999;
  color: string = 'Deep Purple';
  addToCart: number = 0;

  // Defining an object
  product = {
    name: 'iPhone 14 Pro Max',
    price: 789,
    color: this.color,
    discount: 8.5,
    inStock: 5,
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  addItemToCart() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart = this.addToCart + 1;
    }
  }

  removeItemFromCart() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
}
