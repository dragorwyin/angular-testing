import { TourOfHeroesRoutingModule } from './tour-of-heroes-routing.module';

describe('TourOfHeroesRoutingModule', () => {
  let tourOfHeroesRoutingModule: TourOfHeroesRoutingModule;

  beforeEach(() => {
    tourOfHeroesRoutingModule = new TourOfHeroesRoutingModule();
  });

  it('should create an instance', () => {
    expect(tourOfHeroesRoutingModule).toBeTruthy();
  });
});
