import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  standalone: false,
  
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString : string[] = ['Mark', 'John', 'Peter'];
  searchTextContainer : string = '';
  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;

  handleSearch(value : string) : void{
    // console.log('Searched text', value);
    this.searchTextContainer = value;
  }
}
