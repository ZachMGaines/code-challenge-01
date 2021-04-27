export function doubleNumbers(arr) {
  return arr.map(item => {
    const multiply = item * 2;
    return multiply;
  });
};

export function stringNumbers(arr) {
  return arr.map(item => {
    const stringy = item + '';
    return stringy;
  });
};

