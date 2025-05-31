// 반복문 예제 정리 및 주석 추가

// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i); // 0부터 4까지 출력
}

// 증감 위치 변경
for (let i = 0; i < 5;) {
  console.log(i++); // 0부터 4까지 출력 (i가 증가하면서 반복)
}

// 감소 반복문
for (let i = 10; i >= 0; i -= 2) {
  console.log(i); // 10, 8, ..., 0 출력
}

// 구구단 출력
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 복수 변수 제어
for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y); // x는 증가, y는 감소
}

// 논리 기반 반복
for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
    console.log(y, z);
}

// 무한 루프
let count = 0;
for (;;) {
    console.log(count++); // 종료 조건 없음
    if (count > 5) break;
}

// 잘못된 증감으로 인한 무한 루프 방지
for (let i = 0; i < 10; i++) {
  console.log(i); // i-- 제거하여 정상 종료
}

// 객체 순회
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
};

for (const key in lunch) {
  console.log(key, ':', lunch[key]);
}

// 배열 순회
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}

// 문자열 순회
for (const letter of '안녕하세요~') {
  console.log(letter);
}

// 배열 순회 방식 비교
const numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

// 배열 복사와 원본 변경
const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // 복사된 값
  numbers2.push(num + 1);
}

console.log(numbers1, numbers2);

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // 원본 배열 수정
}

console.log(numbers1, numbers2);

// continue 예제
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

// break 예제
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// 레이블 사용 예제
outer:
for (let i = 1; i < 10; i++) {
  inner:
  for (let j = 1; j < 10; j++) {
    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    if (j > 8) break inner;
    if (i - j > 7) break outer;
    console.log(i, j, i * j);
  }
}

// while 기본 사용
let x1 = 0;
while (x1 < 10) {
  console.log(x1++);
}

// 무한 반복 예제 (중단 조건 없음)
// while (true) {
//   console.log('무한반복');
// }

// 조건 중단 예제
let x2 = 0;
while (true) {
  if (x2++ >= 5) break;
  console.log(x2);
}

// 의도와 다른 무한루프 예제
let x3 = 0;
while (x3 < 14) {
  if (x3 % 2 === 0) {
    x3++; // 무한루프 방지용 수동 증가
    continue;
  }
  if (x3 > 7) break;
  console.log(x3++);
}

// 가독성 개선된 반복
let x4 = 0;
while (x4 < 14) {
  const xNow = x4++;
  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;
  console.log(xNow);
}

// do-while 사용 예시
let x5 = 12;
do {
  console.log(x5++); // 최소 한 번 실행됨
} while (x5 < 10);
