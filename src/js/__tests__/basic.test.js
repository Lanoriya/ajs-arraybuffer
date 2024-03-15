import Magician from '../Character';
import Daemon from '../Character';
describe('Check error', () => {
  test('checker case', () => {
    const result = [
      new Daemon(2).attack,
      new Magician(3).attack,
      new Daemon(6).attack,
      new Magician(2).stoned,
      new Daemon(3).stoned,
      new Magician(6).stoned,
    ];
    
    expect(result).toEqual([90, 80, 50, 85, 72, 37]);
  });
})