console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1, 2, 3]);
console.log(this);

// console 기능
console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');

// 변수
const SALUTATION = 'Hello,';
let person = '철수';
console.log(SALUTATION, person);
person = '영희';
console.log(SALUTATION, person);

let x;
console.log(x);
x = 1;
console.log(x);
let y = x;
console.log(x, y);
x = 'Hello';
console.log(x, y);

// 상수
const PI = 3.14;
console.log('PI:', PI);

let a = 1, b = 2, c = 3;
const i = 4, j = 5, k = 6;
console.log('a, b, c:', a, b, c);
console.log('i, j, k:', i, j, k);

// type of, 반환값은 string
b = true;
c = 'Hello';
let d;
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
d = null;
console.log(d, typeof d);
const e = Symbol('hello');
console.log(typeof e);

// 자료형과 정적, 동적 타입
let job = '학생';
let age = 17;
console.log(job, age);
console.log(typeof age);

// 숫자 값이 들어있던 age에 문자열 값을 넣음
age = '열일곱';
console.log(age);
console.log(typeof age);

// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음
function getUpperCase(str) {
    return str.toUpperCase();
}

console.log(getUpperCase('hello'));
/**⚠️ 오류 발생!
    console.log(getUpperCase(1));
    1 + 1 => 2
    '1' + 1 => '11'
*/

// 문자열
let word = '안녕하세요! 🙂';
console.log(word);
word = "반갑습니다~ 👋";
console.log(word);

let word1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);

/* ⚠️ 오류 발생
let word1 = '작은따옴표 안에 '작은따옴표' 사용';
let word2 = "큰따옴표 안에 "큰따옴표" 사용";
console.log(word1, word2); */

// ⭐️ 이스케이프 표현(escape sequence)
word1 = '작은따옴표 안에 \'작은따옴표\' 사용';
word2 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word1, word2);

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

// 백틱
word = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word);

const NAME = '홍길동';
age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);

// 연산자
console.log(
    '안녕하세요~' === "안녕하세요~",
    '안녕하세요~' === `안녕하세요~`,
    "안녕하세요~" === `안녕하세요~`,
    'Hello!' === 'hello!'
);

console.log(
    '1' == '1',
    '1' == 1,
    '1' == 2
);

console.log(
    '1' != '1',
    '1' != 1,
    '1' != 2
);

console.log(
    '1' === '1',
    '1' === 1,
    '1' === 2
);

console.log(
    '1' !== '1',
    '1' !== 1,
    '1' !== 2
);

console.log(
    'ABC' < 'abc',
    'apple' <= 'banana',
    '가나다' > '라마바',
    '안녕' >= '안녕'
);

// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환
);

let str1 = 'Hello';
// 값 반환
let str2 = ' ' + 'World';
console.log(str1);
console.log(str2);

let str3 = str1 + str2;
console.log(str3);

str1 = '헬로';
str1 += ' 월드';
// 부수효과
console.log(str1);

// 값 반환
str2 = str1 += '~~~';
console.log(str2);

const lyric1 = '노는 게 제일 좋아'
+ '\n친구들 모여라'
+ '\n언제나 즐거워'
+ '\n개구쟁이 뽀로로';
console.log(lyric1);

let lyric2 = '눈 덮인 숲 속 마을';
lyric2 += '\n꼬마펭귄 나가신다';
lyric2 += '\n언제나 즐거워';
lyric2 += '\n뽀롱뽀롱뽀롱뽀롱 뽀로로';
console.log(lyric2);

// 다른 자료형과 연산
let result = '안녕' + 1 + true;
console.log(result);
console.log(typeof result);

result += null;
result += undefined;
console.log(result);
console.log(typeof result);

// 숫자 관련 연산자
// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
    typeof integer,
    typeof real,
    typeof negative
);

// 무한대
x = 1 / 0;
console.log(x, typeof x);
// 무한대에는 양음이 있음
console.log(-x, typeof -x);
y = -1 / 0;
console.log(y, typeof y);
let z = Infinity;
console.log(z, typeof z);

// 숫자가 아닌 것
x = 1 / 'abc';
y = 2 * '가나다';
z = NaN;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
// NaN은 양음이 없음
console.log(-NaN);

// NaN 판별
x = 1 / 'abc';

console.log(
    x,
    x == NaN,
    x === NaN,
    isNaN(x), // 숫자가 아닐 시 true
    Number.isNaN(x) // 보다 엄격한 버전
);

console.log(
    typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자

console.log(
    typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨

console.log(
    typeof 'a', isNaN('a'), Number.isNaN('a')
); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
    typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우

// 연산자
// 값 반환
x = 10;
y = x * 10;
console.log(y);

console.log(
  y + 1, // 덧샘
  y - 1, // 뺄셈
  y * 2, // 곱셈
  y / 5, // 나눗셈
  y % 3,  // 나머지
  y ** 2 // 제곱
);

// 부수효과 없음
console.log(y);

// 널리 사용되는 홀수와 짝수의 판별법
console.log(
    '홀수 ',
    123 % 2,
    55 % 2,
    999 % 2
);
console.log(
    '짝수 ',
    2 % 2,
    100 % 2,
    8 % 2
);

console.log(
  4 * 1 + 2,
  4 * (1 + 2),
  4 * -(1 + 2),
  -(4 * -(1 + 2))
);

x = 10;
// 값을 반환부터 하고 증가
console.log('1.', x++, x);
// 값을 증가부터 하고 반환
console.log('2.', ++x, x);

x = 3;
y = 4;
// 💡 부수효과가 일어나는 시점
console.log(x-- * --y, x, y);

x = 1;
console.log(
    +x,
    -x,
    -(-x),
    -(x++),
    -x * -1
);

// string -> int
console.log(
    +'100',
    -'100',
    +'abc' // 숫자로 변환될 수 없는 문자열
);
x = '100';
console.log(x++, x);
y = '100';
console.log(--y, y);
// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
z = 'abc';
console.log(z++, z);

// 할당 산술 연산자
x = 3;

x += 2;
console.log(x);

x -= 3;
console.log(x);

x *= 12;
console.log(x);

x /= 3;
console.log(x);

x %= 5;
console.log(x);

x **= 4;
console.log(x)

// 부동 소수점 오차
console.log(
    0.1 + 0.2,
    0.1 + 0.2 === 0.3
);

x = 0.1 * 10;
y = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;
console.log(
    x, y, x === y
);

console.log(
    0.2 * 0.7,
    0.4 * 3,
    0.9 - 0.6,
    0.9 - 0.3
);

// ⭐️ 2의 거듭제곱으로 나눈 수의 계산은 정확
console.log(
    0.25 * 0.5,
    0.5 + 0.25 + 0.125 + 0.125,
    0.0625 / 0.25
);

// 불리언(boolean)과 관련 연산자
console.log(true, typeof true);
console.log(false, typeof false);
a = 1 === 2;
b = 'abc' !== 'def'
c = a !== b;
d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

// 부정 연산자
console.log(
    true, !true, false, !false
);

console.log(
    true, !true, !!true, !!!true
);

console.log(
    false, !false, !!false, !!!false
);

console.log(
    true === !false,
    !(1 == '1'),
    !(1 === '1'),
    !(typeof false === 'boolean')
);

// AND / OR
console.log(
    true && true,
    true && false,
    false && true,
    false && false,
);