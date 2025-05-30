const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);