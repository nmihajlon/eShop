import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = '';
  @Output() searchEvent : EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("searchInput") searchInputElement : ElementRef;

  updateSearchText() : void{
    console.log(this.searchInputElement);
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchEvent.emit(this.searchText);
  }
}
