// 📘 boolean
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn, typeof isLoggedIn);

// 📘 number (정수, 실수, 음수, NaN, Infinity)
let a = 123, b = 12.34, c = -99;
console.log(a, b, c, typeof b);

console.log(0 / 0); // NaN
console.log(1 / 0); // Infinity
console.log(typeof NaN); // number

// 📘 string
let firstName = "Brendan", lastName = 'Eich';
let quote1 = '작은따옴표 안에 "큰따옴표"';
let quote2 = "큰따옴표 안에 '작은따옴표'";
let escapeExample = 'Hello\tWorld\nLine2\\Backslash';
let template = `Hello, ${firstName} ${lastName}`;

console.log(firstName, lastName);
console.log(quote1, quote2);
console.log(escapeExample);
console.log(template);

// 📘 undefined
let notDefined;
console.log(notDefined, typeof notDefined);

// 📘 null
let empty = null;
console.log(empty, typeof empty); // ⚠️ object (자바스크립트 초기 버그)

// null 체크 방법
console.log(empty === null); // true

// 📘 symbol
const uniqueId = Symbol('id');
console.log(uniqueId, typeof uniqueId);

// 📘 bigint
const big = 1234567890123456789012345678901234567890n;
console.log(big, typeof big);

// 📘 typeof 이중 적용
console.log(typeof (typeof true)); // string
console.log(typeof (typeof 123.45)); // string

// 📘 동적 타이핑 예시
let job = '학생';
let age = 17;
console.log(job, age, typeof age);
age = '열일곱'; // 문자열로 변경
console.log(age, typeof age);

// ⚠️ 형 변환 없이 메서드 호출 시 에러
function getUpperCase(str) {
  if (typeof str !== 'string') {
    return '문자열만 허용됩니다';
  }
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));
console.log(getUpperCase(1)); // 안전하게 처리됨

// 📘 템플릿 문자열 활용
const NAME = '홍길동';
let married = false;
console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, ${married ? '기혼' : '미혼'}입니다.`
);
