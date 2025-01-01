import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  mainMenuItems: string[] = [
    'Home',
    'Products',
    'Sale',
    'New Arrival',
    'Contact',
    'Services',
  ];
}
