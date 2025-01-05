import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;
}
