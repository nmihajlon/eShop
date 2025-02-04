import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective implements OnInit {

  constructor(
    private element : ElementRef,
    private renderer : Renderer2
  ) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') OnMouseEnter(){
    console.log("mouse enter");
    this.renderer.addClass(this.element.nativeElement, 'highlight-product')
  }

  @HostListener('mouseleave') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product'); 
  }
}
