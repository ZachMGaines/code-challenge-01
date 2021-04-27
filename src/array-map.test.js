import { doubleNumbers, stringNumbers, capitalizeNames, namesOnly } from './array-map';



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

test('it capatalizes the names', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
  const actual = capitalizeNames(input);
  expect(actual).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
});

test('names show only', () => {
  const input = [
    {
      name: 'Angelina Jolie',
      age: 80
    },
    {
      name: 'Eric Jones',
      age: 2
    },
    {
      name: 'Paris Hilton',
      age: 5
    },
    {
      name: 'Kayne West',
      age: 16
    },
    {
      name: 'Bob Ziroll',
      age: 100
    }
  ];
  const actual = namesOnly(input);
  expect(actual).toEqual([
    'Angelina Jolie',
    'Eric Jones',
    'Paris Hilton',
    'Kayne West',
    'Bob Ziroll'
  ]);

});