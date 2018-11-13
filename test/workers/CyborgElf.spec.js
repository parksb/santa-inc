import CyborgElf from '../src/workers/CyborgElf';

describe('The method of ParttimeElf', () => {
  const cyborgElf = new CyborgElf();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      cyborgElf.initializeOutput(CyborgElf.getMinOutput(), CyborgElf.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(cyborgElf.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(cyborgElf.next().constructor.name).toBe('CyborgElf');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      CyborgElf.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const cyborgElfMaxOutput = CyborgElf.getMaxOutput();

      expect(CyborgElf.getMaxOutput()).toBe(cyborgElfMaxOutput + addedVal);
    }); 
  });
})
