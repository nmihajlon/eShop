import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective implements OnInit {
  @Input() disableProduct: boolean = false;
  constructor(
    private element : ElementRef,
    private renderer : Renderer2
  ) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') OnMouseEnter(){
    if (this.disableProduct) return;
    this.renderer.addClass(this.element.nativeElement, 'highlight-product')
  }

  @HostListener('mouseleave') OnMouseOut(){
    if (this.disableProduct) return;
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product'); 
  }
}
