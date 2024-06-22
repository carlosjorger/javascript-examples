export function toggle(...params) {
  if (params.length == 0) {
    return function doNothing() {};
  }
  let currentParams = params;
  return function next() {
    const first = currentParams.shift();
    currentParams.push(first);
    return first;
  };
}
