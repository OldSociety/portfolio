import {timesThree} from '../App';


// THREE TIMES THREE is a starter test to ensure Jest is properly working.
describe('The timesThree function', () => {
  test('should multiply by 3', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})