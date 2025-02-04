import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class AppHoverDirective {

  constructor(
    private element : ElementRef,
    private renderer : Renderer2
  ) { }

  @HostBinding('style.background-color') backGroundColor : string = '#282828';
  @HostBinding('style.border') border : string = 'none';
  @HostBinding('style.color') textColor : string = 'white';
  
  @HostListener('mouseenter') OnMouseEnter()
  {
    this.backGroundColor = 'white';
    this.textColor = '#282828';
    this.border = 'solid 1px #282828';
  }

  @HostListener('mouseleave') OnMouseLeave()
  {
    this.backGroundColor = '#282828';
    this.textColor = 'white';
    this.border = 'none';
  }
}
