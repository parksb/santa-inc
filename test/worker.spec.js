import Rudolph from '../src/workers/Rudolph';
import InternElf from '../src/workers/InternElf';
import RegularElf from '../src/workers/RegularElf';
import Machine from '../src/workers/Machine';
import CyborgElf from '../src/workers/CyborgElf';
import Couple from '../src/workers/Couple';

const rudolph = new Rudolph();
const internElf = new InternElf();
const regularElf = new RegularElf();
const machine = new Machine();
const cyborgElf = new CyborgElf();
const couple = new Couple();

describe('getName()', () => {
  it('should returns the name of the worker', () => {
    expect(rudolph.getName()).toBe('rudolph');
    expect(internElf.getName()).toBe('internElf');
    expect(regularElf.getName()).toBe('regularElf');
    expect(machine.getName()).toBe('machine');
    expect(cyborgElf.getName()).toBe('cyborgElf');
    expect(couple.getName()).toBe('couple');
  });
});

describe('getOutput()', () => {
  it('should returns a value between minOutput and maxOutput', () => {
    expect(rudolph.getOutput()).toBeWithinRange(1, 2);
    expect(internElf.getOutput()).toBeWithinRange(2, 5);
    expect(regularElf.getOutput()).toBeWithinRange(2, 7);
    expect(machine.getOutput()).toBeWithinRange(4, 10);
    expect(cyborgElf.getOutput()).toBeWithinRange(6, 12);
    expect(couple.getOutput()).toBeWithinRange(9, 15);
  }); 
});

describe('next()', () => {
  it('should returns a next level worker', () => {
    expect(rudolph.next().constructor.name).toBe('InternElf');
    expect(internElf.next().constructor.name).toBe('RegularElf');
    expect(regularElf.next().constructor.name).toBe('Machine');
    expect(machine.next().constructor.name).toBe('CyborgElf');
    expect(cyborgElf.next().constructor.name).toBe('Couple');
    expect(couple.next()).toBe(null);
  }); 
});
