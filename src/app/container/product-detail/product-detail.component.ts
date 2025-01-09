import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product;

  @Input()
  productListComp: ProductListComponent = undefined;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
