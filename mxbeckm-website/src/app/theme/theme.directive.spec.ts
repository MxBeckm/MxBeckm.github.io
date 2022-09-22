import { ThemeDirective } from './theme.directive';
import { asNativeElements, ElementRef } from '@angular/core';
import { ThemeService } from './theme.service';
import { NativeDateModule } from '@angular/material/core';
describe('ThemeDirective', () => {
  it('should create an instance', () => {
    const directive = new ThemeDirective( ElementRef,ThemeService)
    expect(directive).toBeTruthy();
  });
});
