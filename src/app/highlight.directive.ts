import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private el: ElementRef<any>) { }

  @HostListener('mouseover') onMouseOver(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
