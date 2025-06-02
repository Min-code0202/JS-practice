// 1. 중첩 함수와 변수 스코프
function outer() {
  const name = '바깥쪽';
  console.log(name, '함수');

  function inner() {
    const name = '안쪽';
    console.log(name, '함수');
  }
  inner();
}

outer();


// 2. 함수 내 함수(클로저 없이 단순 함수 조합)
function addMulSub(x, y) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  // (x + y) * y - y
  return sub(mul(add(x, y), y), y);
}

console.log(addMulSub(8, 3));


// 3. 재귀 함수 (1부터 5까지 출력)
function upto5(x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  }
}

upto5(1);
upto5(3);
upto5(7); // 7부터 시작하면 바로 else 부분 출력


// 4. 재귀를 이용한 팩토리얼 계산
function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(fact(1), fact(2), fact(3), fact(4));


// 5. 즉시 실행 함수 (IIFE: Immediately Invoked Function Expression)
(function () {
  console.log('IIFE');
})();


// 6. IIFE 내부에서 변수 스코프 예시 (var 사용)
const initialMessage = (function () {
  // var는 함수 스코프
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;

  for (const temp of temps) {
    avgTemp += temp;
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();

console.log(initialMessage);

// console.log(month); // ReferenceError: month is not defined


// 7. 블록 스코프와 let, const 예시
let initialMessage2;

{
  const month = 8;
  const day = 15;
  const temps = [28, 27, 27, 30, 32, 32, 30, 28];
  let avgTemp = 0;

  for (const temp of temps) {
    avgTemp += temp;
  }
  avgTemp /= temps.length;

  initialMessage2 = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
}

console.log(initialMessage2);
// console.log(month); // ReferenceError: month is not defined


// 8. 값과 참조 전달 차이 예시
let x = 1;  // 원시 타입 (값 전달)
let y = {  // 객체 (참조 전달)
  name: '홍길동',
  age: 15
};
let z = [1, 2, 3]; // 배열 (참조 전달)

function changeValue(a, b, c) {
  a++;              // 원시 타입은 함수 내부에서 복사본 변경, 외부 영향 없음
  b.name = '전우치'; // 객체 프로퍼티 변경, 외부 객체에도 영향 있음
  b.age++;          // 객체 프로퍼티 변경
  c[0]++;           // 배열 내부 값 변경, 외부 배열에도 영향 있음

  console.log('함수 내부:', a, b, c);
}

changeValue(x, y, z);
console.log('함수 호출 후:', x, y, z);
