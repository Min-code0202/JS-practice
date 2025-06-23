// 전역 객체(globalThis)의 특수 상수들
console.log(globalThis.Infinity);   // 무한대
console.log(globalThis.NaN);        // Not a Number
console.log(globalThis.undefined);  // undefined

// globalThis는 자기 자신을 참조함
console.log(globalThis.globalThis); // globalThis

// globalThis는 몇 번을 중첩해도 자기 자신
console.log(
  globalThis === globalThis.globalThis,                      // true
  globalThis === globalThis.globalThis.globalThis,           // true
  globalThis === globalThis.globalThis.globalThis.globalThis // true
);

// eval 함수: 문자열 코드를 실행
const x = eval('1 + 2 + 3');  // 6

// 객체 리터럴은 괄호로 감싸야 올바르게 평가됨
const obj = eval('({a: 1, b: 2})'); // {a: 1, b: 2}

console.log(x, obj);

// 복수 줄 코드도 문자열로 실행 가능
const code = `
  let y = 1;
  console.log(y++, y); // 1 2
`;
eval(code);

// isFinite: 유한한 숫자인지 여부
console.log(
  isFinite(1),       // true
  isFinite(0),       // true
  isFinite('1'),     // true (문자열 숫자도 허용)
  isFinite(null)     // true (null → 0)
);

console.log(
  isFinite(1 / 0),       // false
  isFinite(Infinity),    // false
  isFinite(-Infinity),   // false
  isFinite(NaN),         // false
  isFinite('abc')        // false
);

// isNaN: NaN인지 여부 (숫자로 변환 불가한 경우 포함)
console.log(
  isNaN(NaN),        // true
  isNaN('abcde'),    // true
  isNaN({}),         // true
  isNaN(undefined)   // true
);

// parseFloat: 문자열 → 부동소수점 숫자
console.log(
  parseFloat(123.4567),       // 123.4567
  parseFloat('123.4567'),     // 123.4567
  parseFloat(' 123.4567 ')    // 123.4567
);

console.log(
  parseFloat('123.0'),        // 123
  parseFloat('123'),          // 123
  parseFloat(' 123ABC '),     // 123 (숫자 다음 문자 무시)
  parseFloat([123, 456, 789]) // 123 (배열 → 문자열 → 파싱)
);

console.log(
  parseFloat('ABC123'),         // NaN (숫자 없음)
  parseFloat({x: 1}),           // NaN
  parseFloat([]),               // NaN (빈 배열은 빈 문자열)
  parseFloat(['a', 1, true])    // NaN
);

// parseInt: 정수로 변환 (소수점 이하 제거)
console.log(
  parseInt(123),            // 123
  parseInt('123'),          // 123
  parseInt(' 123.4567 '),   // 123
  parseInt('345.6789')      // 345
);

// 숫자로 시작하지 않으면 NaN
console.log(
  parseInt('abc'),      // NaN
  parseInt('{}'),       // NaN
  parseInt('[]')        // NaN
);

// 진수(radix) 지정
console.log(
  parseInt('11'),        // 11 (기본 10진수)
  parseInt('11', 2),     // 3  (2진수: 1*2 + 1)
  parseInt('11', 8),     // 9
  parseInt('11', 16),    // 17
  parseInt('11', 32),    // 33

  parseInt('11', 37),    // NaN (진수는 2~36만 가능)
  parseInt('11', 'A')    // NaN (radix는 숫자여야 함)
);

// URI 인코딩
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);  // 전체 URI 인코딩 (공백, 한글 등)

console.log(encodedURI);

// 특정 구성 요소만 인코딩
const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword); // 한글 → 퍼센트 인코딩

console.log(encodedKeyword);

// 인코딩된 키워드를 포함한 URI
const searchFullURI = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchFullURI);

// URI 구성요소 예시
const rawQuery = '?q=얄코';
console.log(encodeURI(rawQuery));         // ?q=%EC%96%84%EC%BD%94
console.log(encodeURIComponent(rawQuery)); // %3Fq%3D%EC%96%84%EC%BD%94

// 디코딩
const encodedFullURI = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedFullURI);
console.log(decodedURI); // 원래 문자열로 복원됨

const encodedPart = '%EC%96%84%EC%BD%94';
const decodedComponent = decodeURIComponent(encodedPart);
console.log(decodedComponent); // 얄코