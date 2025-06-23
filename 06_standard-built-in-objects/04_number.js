// Number 객체 생성자 사용
const numObj1 = new Number();           // 0
const numObj2 = new Number(123);        // 123
const numObj3 = new Number(-123.45);    // -123.45

console.log(numObj1, numObj2, numObj3); // [Number: 0], [Number: 123], [Number: -123.45]

// 원시값 추출
console.log(
    numObj1.valueOf(),   // 0
    numObj2.valueOf(),   // 123
    numObj3.valueOf()    // -123.45
);

// 숫자로 잘 변환되는 값들
console.log(
    new Number('-123.4567'), // [Number: -123.4567]
    new Number('Infinity'),  // [Number: Infinity]
    new Number(true),        // [Number: 1]
    new Number(false)        // [Number: 0]
);

// NaN이 되는 경우
console.log(
    new Number('1/2'),             // NaN (문자열 수식 아님)
    new Number('123ABC'),          // NaN
    new Number('ABC'),             // NaN
    new Number('{a: 1, b: 2}'),    // NaN
    new Number([1, 2, 3])          // NaN
);

// Number 함수는 숫자로 변환된 원시값 반환
const num1 = Number('123');
const num2 = Number('-123.45');
const num3 = Number(true);
const num4 = Number(false);
const num5 = Number(null);

console.log(typeof num1, num1); // number 123
console.log(typeof num2, num2); // number -123.45
console.log(typeof num3, num3); // number 1
console.log(typeof num4, num4); // number 0
console.log(typeof num5, num5); // number 0

// 부동소수점 오차 보정용 극소값
console.log(Number.EPSILON);             // 2.220446049250313e-16
console.log(0.1 + 0.2);                  // 0.30000000000000004
console.log((0.1 + 0.2) - 0.3 < Number.EPSILON); // true

// 표현 가능한 최대/최소 값
console.log(Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);           // 5e-324

// 안전한 정수 범위
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991

// 특수 숫자 상수들
console.log(Number.POSITIVE_INFINITY);   // Infinity
console.log(Number.NEGATIVE_INFINITY);   // -Infinity
console.log(Number.NaN);                 // NaN

// isFinite 비교: 전역 vs Number 메서드
console.log(
    isFinite(null),             // true (null → 0)
    Number.isFinite(null)       // false (숫자 타입 아님)
);

// isNaN 비교
console.log(
    isNaN('abc'),               // true (NaN으로 변환됨)
    Number.isNaN('abc')         // false (타입 자체가 NaN 아님)
);

// 파싱 함수
console.log(
    Number.parseInt('123.4567'),     // 123
    Number.parseFloat('123.4567')    // 123.4567
);

// 정수 여부 확인
console.log(
    Number.isInteger(123),     // true
    Number.isInteger(123.45)   // false
);

// 문자열 등은 정수로 인식하지 않음
console.log(
    Number.isInteger('123'),       // false
    Number.isInteger(true),        // false
    Number.isInteger(Infinity)     // false
);

// 안전한 정수 여부 확인
console.log(
    Number.isSafeInteger(123),                         // true
    Number.isSafeInteger(123.45),                      // false
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER),     // true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)  // false
);

// 지수 표기
const numInExp = (123.456789).toExponential();
console.log(typeof numInExp, numInExp); // string '1.23456789e+2'

// 소수점 이하 자릿수 지정
console.log(
    (123.456789).toExponential(2), // '1.23e+2'
    (123.456789).toExponential(4), // '1.2346e+2'
    (123.456789).toExponential(6)  // '1.234568e+2'
);

// 고정 소수점 표기
console.log(
    (111.234567).toFixed(),    // '111'
    (111.234567).toFixed(0),   // '111'
    (111.234567).toFixed(1),   // '111.2'
    (111.234567).toFixed(2),   // '111.23'
    (111.234567).toFixed(3),   // '111.235'
    (111.234567).toFixed(4)    // '111.2346'
);

// 지정된 유효 자릿수로 변환
console.log(
    (1234.56789).toPrecision(),   // '1234.56789' (인자 없으면 toString)
    (1234.56789).toPrecision(1),  // '1e+3'
    (1234.56789).toPrecision(2),  // '1.2e+3'
    (1234.56789).toPrecision(3),  // '1.23e+3'
    (1234.56789).toPrecision(4),  // '1235'
    (1234.56789).toPrecision(6),  // '1234.57'
    (1234.56789).toPrecision(8)   // '1234.5679'
);

// 진수 문자열 변환
console.log(
    (11).toString(),    // '11'
    (11).toString(2),   // '1011' (2진수)
    (11).toString(8),   // '13'   (8진수)
    (11).toString(16)   // 'b'    (16진수)
);