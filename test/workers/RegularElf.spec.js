import RegularElf from '../src/workers/RegularElf';

describe('The method of RegularElf', () => {
  const regularElf = new RegularElf();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      regularElf.initializeOutput(RegularElf.getMinOutput(), RegularElf.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(regularElf.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(regularElf.next().constructor.name).toBe('RegularElf');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      RegularElf.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const regularElfMaxOutput = RegularElf.getMaxOutput();

      expect(RegularElf.getMaxOutput()).toBe(regularElfMaxOutput + addedVal);
    }); 
  });
})
