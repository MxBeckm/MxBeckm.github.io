import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {

        if (result.matches) {
          console.log("screens matches HandsetLandscape");
        }

    });
  }

}
