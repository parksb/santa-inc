import PolicyInterface from '../../src/interfaces/PolicyInterface';

describe('The property of PersonnelInterface', () => {
  const policyInterface = new PolicyInterface();
  
  describe('the two instances', () => {
    const anotherPolicyInterface = new PolicyInterface();

    it('must be the same', () => {
      expect(policyInterface === anotherPolicyInterface).toBe(true);
    }); 
  });
})