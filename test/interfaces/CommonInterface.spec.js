import CommonInterface from '../../src/interfaces/CommonInterface';

describe('The property of CommonInterafce', () => {
  const commonInterface = new CommonInterface();
  
  describe('the two instances', () => {
    const anotherCommonInterface = new CommonInterface();

    it('must be the same', () => {
      expect(commonInterface === anotherCommonInterface).toBe(true);
    }); 
  });
})
