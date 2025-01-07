import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product;

  @Input()
  productListComp: ProductListComponent = undefined;
}
