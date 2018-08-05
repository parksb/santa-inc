import Game from '../src/Game';
import RibbonPractice from '../src/policies/RibbonPractice';
import SmartWork from '../src/policies/SmartWork';
import NightOver from '../src/policies/NightOver';

const ribbonPractice = new RibbonPractice();
const smartWork = new SmartWork();
const nightOver = new NightOver();

describe('Click present with ribbon practice', () => {
  it('should be 1.2', () => {
    ribbonPractice.execute();
    expect(Game.getClickPresent()).toBe(1.2);
  });
});