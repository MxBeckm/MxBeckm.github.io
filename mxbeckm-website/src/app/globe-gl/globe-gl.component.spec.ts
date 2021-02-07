import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeGlComponent } from './globe-gl.component';

describe('GlobeGlComponent', () => {
  let component: GlobeGlComponent;
  let fixture: ComponentFixture<GlobeGlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeGlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
