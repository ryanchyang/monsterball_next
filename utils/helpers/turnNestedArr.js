export const turnNestedArr = (arr, num) => {
  const arrLength = arr.length;
  console.log(arrLength);
  const returnArr = Array.from({ length: arrLength / num }).map((_, i) => {
    console.log(i);
    console.log(i * num, i * num + num);
    return arr.slice(i * num, i * num + num);
  });

  return returnArr;
};

//  8  slice(0,3) slice(4,7)
//  12 slice(0,3) slice(4,7) slice(8,11)

// 0,1,2,3
// Array.from({length: totalNum / num }).map((_,i) => arr.slice(i * num, i * num + num -1 ) )
