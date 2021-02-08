import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  // @ViewChild("globeGL") divView: ElementRef;

  
  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }

  title = 'mxbeckm-website';
  onResize(event) {
    console.log(this.elmRef.nativeElement);
    // this.renderer.setStyle(this.elmRef.nativeElement,'background','pink');
  }
}
