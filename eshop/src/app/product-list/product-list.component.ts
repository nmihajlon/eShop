import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name : string = "John Smith";
  addToCart : number = 0;
  product = {
    name : "Iphone",
    price : 999.00,
    color : "red",
    inStock : true
  }
  
  onNameChange(event : any) : void{
    // console.log(event.data);
    // this.name = event.target.value;
  }

  decrement(){
    if(this.addToCart >= 0)
      this.addToCart--;
  }

  increment(){
    this.addToCart++;
  } 
}
