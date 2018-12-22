import PersonnelInterface from '../../src/interfaces/PersonnelInterface';

describe('The property of PersonnelInterface', () => {
  const personnelInterface = new PersonnelInterface();
  
  describe('the two instances', () => {
    const anotherPersonnelInterface = new PersonnelInterface();

    it('must be the same', () => {
      expect(personnelInterface === anotherPersonnelInterface).toBe(true);
    }); 
  });
})