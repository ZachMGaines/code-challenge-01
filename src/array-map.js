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
  return arr.map(item =>
    item[0].toUpperCase() + item.slice(1).toLowerCase());
};

export function namesOnly(arr) {
  return arr.map(item => {
    const happy = item.name;
    return happy;
  });
}