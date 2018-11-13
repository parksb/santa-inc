import Rudolph from '../src/workers/Rudolph';

describe('The method of Rudolph', () => {
  const rudolph = new Rudolph();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      rudolph.initializeOutput(Rudolph.getMinOutput(), Rudolph.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(rudolph.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(rudolph.next().constructor.name).toBe('Rudolph');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      Rudolph.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const rudolphMaxOutput = Rudolph.getMaxOutput();

      expect(Rudolph.getMaxOutput()).toBe(rudolphMaxOutput + addedVal);
    }); 
  });
})
