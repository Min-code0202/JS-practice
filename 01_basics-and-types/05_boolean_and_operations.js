// 05_boolean_and_operations.js

// Boolean 타입과 관련 연산자 학습 및 예제

console.log(true, typeof true); // true, 'boolean'
console.log(false, typeof false); // false, 'boolean'

// 비교 연산자는 항상 Boolean 반환
let a = 1 === 2; // false
let b = 'abc' !== 'def'; // true
let c = a !== b; // true (false !== true)
let d = typeof a === typeof b === true; 
// typeof a === typeof b 는 true, true === true → true

console.log(a, typeof a); // false 'boolean'
console.log(b, typeof b); // true 'boolean'
console.log(c, typeof c); // true 'boolean'
console.log(d, typeof d); // true 'boolean'

// 부정 연산자(!) - true ↔ false 변환
console.log(true, !true, false, !false);

// 부정 연산자 반복 적용
console.log(true, !true, !!true, !!!true);
console.log(false, !false, !!false, !!!false);

// 논리 연산자와 부정의 조합
console.log(
  true === !false,         // true === true → true
  !(1 == '1'),             // !(true) → false (== 은 타입 변환 후 비교)
  !(1 === '1'),            // !(false) → true (=== 은 타입까지 비교)
  !(typeof false === 'boolean') // !(true) → false
);

// AND 연산자
console.log(true && true, true && false, false && true, false && false);

// OR 연산자
console.log(true || true, true || false, false || true, false || false);

// 복합 조건식 예제
let x = 14;
// x = 6;
// x = 25;

console.log(
  (x > 10 && x <= 20) || x % 3 === 0
); // true if 10 < x ≤ 20 or x divisible by 3

// 드 모르간 법칙(Demorgan's Laws)
// !(A && B) === !A || !B
// !(A || B) === !A && !B
let aa = true;
// aa = false;
let bb = true;
// bb = false;

console.log(
  !(aa && bb) === (!aa || !bb),
  !(aa || bb) === (!aa && !bb)
); // 항상 true

// && 와 || 연산자의 단축 평가 (short-circuit)
let error = true;
// error = false;

// error가 true일 때만 경고 출력
error && console.warn('오류 발생!');

// error가 false일 때만 정상 메시지 출력
error || console.log('이상 없음.');

// &&, ||는 실제 값 반환 (true, false가 아니라)
let xx = true;
// xx = false;

let yy = xx && 'abc'; // 'abc' if xx true, else false
let zz = xx || 123;   // true → xx 반환, false → 123 반환

console.log(yy, zz);

// 삼항 연산자
let t = true;
// t = false;

let result = t ? '참입니다.' : '거짓입니다.';
console.log(result);

// 숫자에 대한 조건문 예제
let num = 103247;

console.log(
  'num은 3의 배수' + (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

// 삼항 연산자 + console 메서드 조합
let err = true;
// err = false;

err 
  ? console.error('오류 발생!') 
  : console.log('이상 없음');

// 자바스크립트에서 falsy/truthy 판별
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// true와 값이 같다는 의미는 아님 (== 와 === 차이)
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);

// falsy 값들 (false로 평가되는 값들)
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// falsy 판별 비교 (==, ===)
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);

// 부수 효과와 && 연산자 조합 예
let valX = 0;
let valY = 1;

valX && valX++; // valX가 0 falsy라 증가 안 됨
valY && valY++; // valY가 1 truthy라 증가

console.log(valX, valY); // 0, 2

// 홀짝 판별
let n1 = 2;
let n2 = 3;

console.log(
  n1 % 2 ? '홀' : '짝', // 2 % 2 = 0 → 짝
  n2 % 2 ? '홀' : '짝'  // 3 % 2 = 1 → 홀
);

// OR 연산자 활용 기본값 할당
let val1 = '';
let val2 = '회사원';
let val3 = val1 || val2;

console.log(val3); // '회사원'

val1 = val1 || '단기알바';
val2 = val2 || '단기알바';

console.log(val1, val2); // '단기알바', '회사원'

// 부정 연산자 활용 예
console.log(
  !1, !-999, !'hello', // 모두 false로 변환 후 부정 → false false false
  !0, !'', !null       // 모두 true로 변환 후 부정 → true true true
);

// !! 연산자를 이용해 Boolean 값으로 강제 변환
console.log(
  !!1, !!-999, !!'hello', // true true true
  !!0, !!'', !!null       // false false false
);

// 홀수 판별 Boolean 출력
let number = 123;

console.log(
  'number는 홀수인가?', 
  !!(number % 2) // true (홀수)
);

// 추가 설명
// - && 와 || 는 '단축 평가'를 수행하며, 실제 값(피연산자)을 반환한다.
// - 삼항 연산자(?:)는 조건에 따라 두 값 중 하나를 반환한다.
// - 부정 연산자(!)는 Boolean 값을 반전시킨다.
// - !! 는 값을 Boolean으로 변환한다.

// 부족한 부분: 논리 연산자 우선순위, Truthy/Falsy 리스트 추가 및 예시 가능

// Truthy 값 예시
console.log(!!123, !!'abc', !![], !!{}, !!Infinity);

// Falsy 값 예시
console.log(!!0, !!'', !!null, !!undefined, !!NaN);

// 논리 연산자 우선순위 예시
console.log(true || false && false); // &&가 우선 → true || false → true
console.log((true || false) && false); // () 먼저 → true && false → false
