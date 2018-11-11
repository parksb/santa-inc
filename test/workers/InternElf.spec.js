import InternElf from '../src/workers/InternElf';

describe('The method of ParttimeElf', () => {
  const internElf = new InternElf();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      internElf.initializeOutput(InternElf.getMinOutput(), InternElf.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(internElf.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(internElf.next().constructor.name).toBe('InternElf');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      InternElf.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const internElfMaxOutput = InternElf.getMaxOutput();

      expect(InternElf.getMaxOutput()).toBe(internElfMaxOutput + addedVal);
    }); 
  });
})
