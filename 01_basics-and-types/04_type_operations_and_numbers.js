// 문자열 비교
console.log(
  '안녕하세요~' === "안녕하세요~",
  '안녕하세요~' === `안녕하세요~`,
  "안녕하세요~" === `안녕하세요~`,
);

// 대소문자 비교 - false (ASCII 코드 기준)
console.log('Hello!' === 'hello!');

// 느슨한 비교 (==) - 타입 강제 변환
console.log(
  '1' == '1',   // true
  '1' == 1,     // true (문자열 '1' -> 숫자 1)
  '1' == 2      // false
);

// 느슨한 부등 비교 (!=)
console.log(
  '1' != '1',   // false
  '1' != 1,     // false
  '1' != 2      // true
);

// 엄격한 비교 (===)
console.log(
  '1' === '1',  // true
  '1' === 1,    // false
  '1' === 2     // false
);

// 엄격한 부등 비교 (!==)
console.log(
  '1' !== '1',  // false
  '1' !== 1,    // true
  '1' !== 2     // true
);

// 문자열 대소 비교 (사전 순 비교)
console.log(
  'ABC' < 'abc',            // true
  'apple' <= 'banana',      // true
  '가나다' > '라마바',      // false (유니코드 기준)
  '안녕' >= '안녕'          // true
);

// 문자열과 숫자 비교
console.log(
  100 > 12,           // true (숫자 비교)
  '100' > '12',       // false (문자열 비교 - 첫 문자 '1' vs '1', 다음 '0' vs '2')
  '100' > 12          // true ('100' -> 숫자 변환 후 비교)
);

// 문자열 연산 및 부수효과
let str1 = 'Hello';
let str2 = ' ' + 'World';
let str3 = str1 + str2;

console.log(str1);     // 'Hello'
console.log(str2);     // ' World'
console.log(str3);     // 'Hello World'

console.log(str3 + '!!!' + ' 😀'); // 'Hello World!!! 😀'

str1 += ' 월드';
console.log(str1);     // 'Hello 월드'

let str4 = str1 += '~~~';
console.log(str4);     // 'Hello 월드~~~'

// ⚠️ 부수효과 대상이 아닌 값에 += 사용 불가
// let errorStr = '헬로' += '월드';  // ❌ SyntaxError
// const STR = '안녕~';
// STR += ' 반가워요!'; // ❌ TypeError

// 여러 줄 문자열
const lyric1 = '노는 게 제일 좋아'
  + '\n친구들 모여라'
  + '\n언제나 즐거워'
  + '\n개구쟁이 뽀로로';
console.log(lyric1);

// 문자열 + 숫자/불리언/null/undefined => 모두 문자열
let result = '안녕' + 1 + true;
console.log(result);          // '안녕1true'
console.log(typeof result);  // 'string'

result += null;
result += undefined;
console.log(result);          // '안녕1truenullundefined'
console.log(typeof result);  // 'string'

// 숫자형
let integer = 100;
let real = 1.234;
let negative = -5.67;
console.log(typeof integer, typeof real, typeof negative); // 'number'

// Infinity와 NaN
let inf = 1 / 0;
console.log(inf, typeof inf); // Infinity, 'number'
console.log(-inf, typeof -inf); // -Infinity

let nan1 = 1 / 'abc';
let nan2 = 2 * '가나다';
console.log(nan1, typeof nan1); // NaN 'number'
console.log(nan2, typeof nan2); // NaN 'number'
console.log(Number.isNaN(nan1)); // true

// isNaN와 Number.isNaN 차이
console.log(
  typeof '1', isNaN('1'), Number.isNaN('1') // false, false
);
console.log(
  typeof true, isNaN(true), Number.isNaN(true) // false, false
);
console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a') // true, false
);
console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a') // true, true
);

// 기본 산술 연산
let x = 10;
let y = x * 10;
console.log(
  y + 1,
  y - 1,
  y * 2,
  y / 5,
  y % 3,
  y ** 2
);

// 홀수 짝수 판별
console.log(123 % 2, 2 % 2); // 1, 0

// 연산 우선순위
console.log(
  4 * 1 + 2,         // 6
  4 * (1 + 2),       // 12
  4 * -(1 + 2),      // -12
  -(4 * -(1 + 2))    // 12
);

// 증감 연산자
x = 10;
console.log('1.', x++, x); // 10, 11
console.log('2.', ++x, x); // 12, 12

x = 3; y = 4;
console.log(x-- * --y, x, y); // 3 * 3 = 9, x=2, y=3

x = 1;
console.log(+x, -x, -(-x), -(x++), -x * -1);

// 숫자 변환 연산자
console.log(
  +'100',   // 100
  -'100',   // -100
  +'abc'    // NaN
);

x = '100';
console.log(x++, x); // 100, 101

x = 'abc';
console.log(x++, x); // NaN, NaN

// 복합 대입 연산자
x = 3;
x += 2;
x -= 3;
x *= 12;
x /= 3;
x %= 5;
x **= 4;
console.log(x);

// 제곱근
let z = 25;
console.log(z **= 0.5); // 5