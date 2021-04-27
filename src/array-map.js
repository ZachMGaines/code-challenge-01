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

export function capitalizeNames(arr) {
  return arr.map(item => {

    const hello = item.charAt(0).slice(0, 4, 9, 21);

    return hello.toUpperCase();
  });
}