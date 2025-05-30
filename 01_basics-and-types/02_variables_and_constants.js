// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';
console.log(SALUTATION, person);

person = '영희';
console.log(SALUTATION, person);

// 초기화되지 않은 변수
let x;
console.log('초기화 전:', x); // undefined

x = 1;
console.log('초기화 후:', x);

// 변수 재선언 오류 예시 (let은 같은 스코프에서 재선언 불가)
// let x = 1; // SyntaxError

// 복사할당 예시
let a = 1;
let b = a;
console.log('초기값:', a, b);

a = '변경된 값';
console.log('a 변경 후:', a, b); // b는 그대로

// const는 재할당 불가
const PI = 3.14;
console.log('원주율:', PI);

// const는 선언과 동시에 초기화 필요
// const WRONG; // SyntaxError: Missing initializer

// const 재할당 불가 예시
// PI = 3.14159; // TypeError: Assignment to constant variable

// 여러 변수 한 줄에 선언
let c = 1, d = 2, e = 3;
const X = 4, Y = 5, Z = 6;

console.log(c, d, e);
console.log(X, Y, Z);

// TDZ 예시 - 선언 전에 접근
// console.log(beforeInit); // ReferenceError
let beforeInit = 10;

// var와 비교
console.log(someVar); // undefined (호이스팅됨)
var someVar = 123;

// let은 호이스팅은 되지만 TDZ에 걸림
// console.log(someLet); // ReferenceError
let someLet = 456;
