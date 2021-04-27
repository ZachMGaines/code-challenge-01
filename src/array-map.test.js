import { doubleNumbers, stringNumbers } from './array-map';



//turn array of numbers to strings

test('it doubles the numbers', () => {
  const input = [2, 5, 100];
  const actual = doubleNumbers(input);
  expect(actual).toEqual([4, 10, 200]);
});

test('it turns the array to a string', () => {
  const input = [2, 5, 10];
  const actual = stringNumbers(input);
  expect(actual).toEqual(['2', '5', '10']);
});