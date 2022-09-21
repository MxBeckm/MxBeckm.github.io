import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  isChecked: boolean = false;
  mode: string = 'light_mode';  
  title = 'mxbeckm-website';
  // @ViewChild("globeGL") divView: ElementRef;
  
  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }

  onResize(event) {
    // console.log(this.elmRef.nativeElement);
    // this.renderer.setStyle(this.elmRef.nativeElement,'background','pink');
  }
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }
}
