import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: false
})
export class SetBackground implements OnInit{
    constructor(
        private element : ElementRef,
        private renderer : Renderer2
    ) {}

    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement, 'background', '#36454F');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        // this.renderer.setAttribute(this.element.nativeElement, 'title', "This is a title");
    }
}