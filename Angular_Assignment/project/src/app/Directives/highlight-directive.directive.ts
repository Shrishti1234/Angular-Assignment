import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  private isHighlight=false
  constructor() { }

  @HostBinding('class.highlighted')
  get highlighted(){
    return this.isHighlight
  }

  @HostListener('mouseover')
  mouseOver(){
    this.isHighlight=true
  }
  @HostListener('mouseout')
  mouseOut(){
    this.isHighlight=false
  }

}
