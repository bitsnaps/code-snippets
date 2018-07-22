import { UtilityComponentModule } from './utility-component.module';

describe('UtilityComponentModule', () => {
  let utilityComponentModule: UtilityComponentModule;

  beforeEach(() => {
    utilityComponentModule = new UtilityComponentModule();
  });

  it('should create an instance', () => {
    expect(utilityComponentModule).toBeTruthy();
  });
});
