import WorkerInterface from '../../src/interfaces/WorkerInterface';

describe('The property of WorkerInterface', () => {
  const workerInterface = new WorkerInterface();
  
  describe('the two instances', () => {
    const anotherWorkerInterface = new WorkerInterface();

    it('must be the same', () => {
      expect(workerInterface === anotherWorkerInterface).toBe(true);
    }); 
  });
})