// ✅ 기본 함수 선언 방식
function add(x, y) {
    // x, y를 인자(parameter)라고 부름
    // return 문은 값을 반환함
    return x + y;
}

// a, b는 인수(argument)
let result = add(2, 3);
console.log(result); // 5

console.log(add(4, 5)); // 9

// 함수 결과를 중첩해서 사용 가능
console.log(add(add(6, 7), add(8, 9))); // 30


// ✅ boolean 반환 예시 함수
function isOdd(x) {
    return !!(x % 2); // 홀수면 true, 짝수면 false
}

let num = 12;
console.log(`${num}(는)은 ${isOdd(num) ? '홀' : '짝'}수입니다.`); // 12(는)은 짝수입니다.


// ✅ 외부 변수 접근 함수
let currentTemp = 24.5;

function logCurrentTemp() {
    console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

logCurrentTemp();
// 반환값 없음 (undefined)
console.log('반환값:', logCurrentTemp());


// ✅ return 이후 코드는 실행되지 않음
function addVerbose(x, y) {
    console.log(`${x}와 ${y}를 더합니다.`);
    return x + y;
    // 아래 코드는 실행되지 않음
    console.log(`결과는 ${x + y}입니다.`);
}

console.log(addVerbose(2, 7)); // 9


// ✅ 함수 선언보다 먼저 호출 가능 (호이스팅)
console.log(addHoisted(2, 7)); // 9

function addHoisted(x, y) {
    return x + y;
}


// ✅ 함수 표현식 (선언 전에 사용 불가)
const subt = function (x, y) {
    return x - y;
};

console.log(subt(7, 2)); // 5

// ✅ 기존 함수 변수 재정의
let addRe = function (x, y) {
    console.log(`${x}와 ${y}를 더합니다.`);
    console.log(`결과는 ${x + y}입니다.`);
    return x + y;
};

console.log(addRe(2, 7)); // 9


// ✅ 화살표 함수 (Arrow Function)
// 한 줄이면 return 생략 가능
const mult = (x, y) => x * y;
console.log(mult(2, 7)); // 14

// 여러 문장이면 중괄호 필요
const multVerbose = (x, y) => {
    console.log(`${x}와 ${y}를 곱합니다.`);
    console.log(`결과는 ${x * y}입니다.`);
    return x * y;
};

console.log(multVerbose(2, 7)); // 14

// 인자가 하나인 경우 괄호 생략 가능
const pow = x => x ** 2;
console.log(pow(3)); // 9


// ✅ 화살표 함수는 호이스팅 되지 않음
// console.log(div(8, 4)); // ❌ ReferenceError

const div = function (x, y) {
    return x / y;
};

console.log(div(8, 4)); // 2

const divArrow = (x, y) => x / y;
console.log(divArrow(10, 2)); // 5

// ✅ 함수에서 아무것도 반환하지 않으면 undefined 반환
function noReturn() {
    let x = 1 + 2;
}

console.log(noReturn()); // undefined