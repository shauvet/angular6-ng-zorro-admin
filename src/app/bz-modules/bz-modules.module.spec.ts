import { BzModulesModule } from './bz-modules.module';

describe('BzModulesModule', () => {
  let bzModulesModule: BzModulesModule;

  beforeEach(() => {
    bzModulesModule = new BzModulesModule();
  });

  it('should create an instance', () => {
    expect(bzModulesModule).toBeTruthy();
  });
});
