import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild, Renderer2 } from '@angular/core';
import Globe from 'globe.gl';

@Component({
  selector: 'app-globe-gl',
  template: '<div #myname (window:resize)="onResize($event)"></div>',
  styleUrls: ['./globe-gl.component.scss']
})



export class GlobeGlComponent implements OnInit {

  
  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }
  myGlobe = Globe();
  @ViewChild('myname') div:ElementRef;
  ngOnInit() {
    
    const N = 100;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      alt: Math.random() * 0.8 + 0.1,
      radius: Math.random() * 5,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));
    
    
      
      
  }
  ngAfterViewInit() {
    var points:Array<Object> = [{pointLat:  47.81063453537859, pointLng: 13.055422928100008, radius: Math.random() * 5},
      {pointLat:  47.81063453537859, pointLng: 13.055422928100008, radius: Math.random() * 5}];
    this.myGlobe(this.div.nativeElement)
      .globeImageUrl('../../assets/img/earth-at-night.jpg')
      .pointsData(points)
      .backgroundImageUrl('../../assets/img/white.jpg')
      .width(600)
      .height(600);
  }
  
  onResize($event){
    console.log(this.div.nativeElement.firstChild.firstChild.firstChild.lastChild);
    console.log(this.div);
    if (window.innerWidth < 600){
      this.renderer.setStyle(this.div.nativeElement.firstChild.firstChild.firstChild.lastChild,'width',window.innerWidth.toLocaleString()+"px");
      this.renderer.setStyle(this.div.nativeElement.firstChild.firstChild.firstChild.lastChild,'height',window.innerWidth.toLocaleString()+"px");
    }
    
  }

}
