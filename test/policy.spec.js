import Game from '../src/Game';
import RibbonPractice from '../src/policies/RibbonPractice';
import SmartWork from '../src/policies/SmartWork';
import NightOver from '../src/policies/NightOver';

describe('Click present with ribbon practice', () => {
  it('should be 1.2', () => {
    RibbonPractice.execute();
    expect(Game.getClickPresent()).toBe(1.2);
  });
});

describe('Click present with smart work', () => {
  it('should be 1.5', () => {
    SmartWork.execute();
    expect(Game.getClickPresent()).toBe(1.5);
  });
});