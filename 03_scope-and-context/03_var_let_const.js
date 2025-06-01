// ✅ var, let, const 차이점 정리 예제

// 1. 선언과 재선언

var a = 1;
var a = 2; // ✅ 가능 (var는 재선언 허용)
console.log('var 재선언:', a); // 2

let b = 1;
// let b = 2; // ❌ 오류! let은 같은 스코프에서 재선언 불가

const c = 1;
// const c = 2; // ❌ 오류! const도 재선언 불가


// 2. 재할당

let x = 10;
x = 20; // ✅ 가능

const y = 30;
// y = 40; // ❌ 오류! const는 재할당 불가


// 3. 스코프(scope)

if (true) {
  var scopeVar = 'var 변수';
  let scopeLet = 'let 변수';
  const scopeConst = 'const 변수';
}

console.log(scopeVar); // ✅ 'var 변수' (var는 함수 스코프)
/// console.log(scopeLet); // ❌ 오류 (let은 블록 스코프)
/// console.log(scopeConst); // ❌ 오류 (const도 블록 스코프)


// 4. 호이스팅(hoisting)

// var는 선언이 끌어올려지지만, 초기화는 안 됨
console.log(hoistedVar); // undefined
var hoistedVar = 'var hoisting';

// let과 const는 TDZ(Temporal Dead Zone)에 걸려 오류 발생
// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = 'let hoisting';

// console.log(hoistedConst); // ❌ ReferenceError
const hoistedConst = 'const hoisting';


// 5. 전역 객체 등록 여부 (브라우저 환경에서 확인 가능)

// var로 선언한 전역 변수는 window 객체에 등록됨
var globalVar = 'global var';
console.log(window.globalVar); // ✅ 'global var'

// let/const는 전역 객체에 등록되지 않음
let globalLet = 'global let';
const globalConst = 'global const';
console.log(window.globalLet); // ❌ undefined
console.log(window.globalConst); // ❌ undefined


// 6. const로 선언한 객체는 내부 값은 변경 가능 (불변 아님)

const user = { name: 'Kim' };
user.name = 'Lee'; // ✅ 객체 내부 변경 가능
console.log(user); // { name: 'Lee' }

// user = { name: 'Park' }; // ❌ 전체 재할당은 불가능

