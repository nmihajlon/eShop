import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  standalone: false,
  
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuItems : string[] = ['Home','Products','Sale','New Arrival','Contact','Services'];
}
