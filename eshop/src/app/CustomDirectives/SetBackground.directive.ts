import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: false
})
export class SetBackground implements OnInit{
    @Input() backColor : string = '#36454F';
    @Input() textColor : string = 'white';

    constructor(
        private element : ElementRef,
        private renderer : Renderer2
    ) {}

    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement, 'background', this.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
        // this.renderer.setAttribute(this.element.nativeElement, 'title', "This is a title");
    }
}