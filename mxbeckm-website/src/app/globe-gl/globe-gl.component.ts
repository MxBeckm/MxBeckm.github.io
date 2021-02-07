import { Component, OnInit, ElementRef } from '@angular/core';
import Globe from 'globe.gl';

@Component({
  selector: 'app-globe-gl',
  templateUrl: './globe-gl.component.html',
  styleUrls: ['./globe-gl.component.scss']
})
export class GlobeGlComponent implements OnInit {

  constructor(private elRef:ElementRef) { }

  
  ngOnInit() {
    var points:Array<Object> = [{pointLat:  47.81063453537859, pointLng: 13.055422928100008},{pointLat:  47.81063453537859, pointLng: 13.055422928100008}];
    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      alt: Math.random() * 0.8 + 0.1,
      radius: Math.random() * 5,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));
    const myGlobe = Globe();
    myGlobe(this.elRef.nativeElement)
      .globeImageUrl('../../assets/img/earth-at-night.jpg')
      .pointsData(gData)
      .backgroundImageUrl('../../assets/img/white.jpg')
      .width(600)
      .height(600);
  }

}
