import { Component } from '@angular/core';

@Component({
  selector: 'container',
  standalone: false,
  
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString : string[] = ['Mark', 'John', 'Peter'];
  searchTextContainer : string = '';

  handleSearch(value : string) : void{
    // console.log('Searched text', value);
    this.searchTextContainer = value;
  }
}
