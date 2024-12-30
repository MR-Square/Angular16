import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  name: string = 'iPhone 14';
  price: number = 999;
  color: string = 'Deep Purple';

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
}
