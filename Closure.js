export const range = (start, end) => {
  const result = [];
  if (end === undefined) {
    return (endParam) => range(start, endParam);
  }
  if (start > end) {
    return result;
  }
  for (let number = start; number <= end; number++) {
    result.push(number);
  }
  return result;
};
