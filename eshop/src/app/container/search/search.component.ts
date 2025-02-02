import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = '';
  @Output() searchEvent : EventEmitter<string> = new EventEmitter<string>();

  onInput() : void {
    this.searchEvent.emit(this.searchText);
  }
}
