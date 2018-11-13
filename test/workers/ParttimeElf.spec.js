import ParttimeElf from '../src/workers/ParttimeElf';

describe('The method of ParttimeElf', () => {
  const parttimeElf = new ParttimeElf();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      parttimeElf.initializeOutput(ParttimeElf.getMinOutput(), ParttimeElf.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(parttimeElf.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(parttimeElf.next().constructor.name).toBe('ParttimeElf');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      ParttimeElf.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const parttimeElfMaxOutput = ParttimeElf.getMaxOutput();

      expect(ParttimeElf.getMaxOutput()).toBe(parttimeElfMaxOutput + addedVal);
    }); 
  });
})
