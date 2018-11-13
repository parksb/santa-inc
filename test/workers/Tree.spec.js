import Tree from '../src/workers/Tree';

describe('The method of Rudolph', () => {
  const tree = new Tree();
  
  describe('getOutput()', () => {
    beforeEach(() => {
      tree.initializeOutput(Tree.getMinOutput(), Tree.getMaxOutput());
    });

    it('returns a value between minimum output and maximum output', () => {
      expect(tree.getOutput()).toBeWithinRange(1, 2);
    }); 
  });
  
  describe('next()', () => {
    it('returns a next level worker', () => {
      expect(tree.next().constructor.name).toBe('Tree');
    }); 
  });
  
  describe('addMaxOutput(val)', () => {
    const addedVal = 10;

    beforeEach(() => {
      Tree.addMaxOutput(addedVal);
    });

    it('adds val to maximum output of the worker', () => {
      const treeMaxOutput = Tree.getMaxOutput();

      expect(Tree.getMaxOutput()).toBe(treeMaxOutput + addedVal);
    }); 
  });
})
