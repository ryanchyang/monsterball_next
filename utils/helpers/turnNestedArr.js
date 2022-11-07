export const turnNestedArr = (arr, num) => {
  const arrLength = arr.length;
  const returnArr = Array.from({ length: arrLength / num }).map((_, i) => {
    return arr.slice(i * num, i * num + num);
  });

  return returnArr;
};
