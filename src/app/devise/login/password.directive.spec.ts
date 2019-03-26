import { ShowHidePasswordDirective } from './password.directive';

describe(showHidePass(), () => {
  it('should create an instance', () => {
    const directive = new ShowHidePasswordDirective();
    expect(directive).toBeTruthy();
  });
});

