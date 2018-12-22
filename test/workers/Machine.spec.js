import Machine from '../../src/workers/Machine';

describe('The method of ParttimeElf', () => {
  const machine = new Machine();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      machine.initializeOutput(Machine.getMinOutput(), Machine.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(machine.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(machine.next().constructor.name).toBe('Machine');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      Machine.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const machineMaxOutput = Machine.getMaxOutput();

      expect(Machine.getMaxOutput()).toBe(machineMaxOutput + addedVal);
    }); 
  });
})
