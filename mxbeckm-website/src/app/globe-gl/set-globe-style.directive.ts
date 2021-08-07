import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '.app-globe-gl'
})
export class SetGlobeStyleDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }

  test = this.renderer;
  test2= this.elmRef;
  
  ngOnInit() {
    console.log(this.test2.nativeElement);
    this.test.setStyle(
       this.test2.nativeElement,
       'width',
       '300'
    );

  }


}