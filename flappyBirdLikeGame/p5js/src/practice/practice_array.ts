let array1: number[] = [];
let array2: Array<number> = [];
/**
 * 配列の追加
 */
export const p_array1 = () => {
  array1.push(1);
  array1.push(2);
  array1.push(3);

  array2.push(1);
  array2.push(2);
  array2.push(3);
};

/**
 * 配列の要素を取り出す
 */
export const p_array2 = () => {
  // 方法1
  for (let count = 0; count < array1.length; count++) {
    console.log(array1[count]);
  }

  // 方法2
  for (const count of array1) {
    console.log(count);
  }

  // 方法3
  [...Array(array1.length).keys()].forEach((count) => {
    console.log(array1[count]);
  });
};

/**
 * fillter
 * 値が2より大きければtrueそうでなければfalseを返す
 * @param value 
 */
const greaterThan2 = (value: number) => {
  return value > 2;
}

/**
 * フィルターで特定の要素を取り出す
 */
export const p_array3 = () => {
  let numbers = array1.filter(greaterThan2);
  console.log(numbers);
}
