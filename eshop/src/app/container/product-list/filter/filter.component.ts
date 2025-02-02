import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  standalone: false,
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
}) 
export class FilterComponent {
  @Input() all : number = 0;
  @Input() inStock : number = 0;
  @Input() outOfStock : number = 0;
  selectedFilterRadioButton : string = 'all';
  @Output() selectedFilterRadioButtonChange : EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }
}
