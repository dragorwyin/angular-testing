import { TourOfHeroesModule } from './tour-of-heroes.module';

describe('TourOfHeroesModule', () => {
  let tourOfHeroesModule: TourOfHeroesModule;

  beforeEach(() => {
    tourOfHeroesModule = new TourOfHeroesModule();
  });

  it('should create an instance', () => {
    expect(tourOfHeroesModule).toBeTruthy();
  });
});
