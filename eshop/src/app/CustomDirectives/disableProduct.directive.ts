import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({ 
    selector: '[disableProduct]',
    standalone: false
})

export class DisableProductDirective {
    @Input() set disableProduct(disable : boolean){
        if(disable == true){
            this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
        }
    }
    constructor(
        private element : ElementRef,
        private renderer : Renderer2
     ) { }
     
}