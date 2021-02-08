import { SetGlobeStyleDirective } from './set-globe-style.directive';

describe('SetGlobeStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new SetGlobeStyleDirective(SetGlobeStyleDirective.prototype.test,SetGlobeStyleDirective.prototype.test2);
    expect(directive).toBeTruthy();
  });
});
