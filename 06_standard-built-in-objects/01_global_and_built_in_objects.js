// 브라우저 환경에서 this는 window 객체를 참조함
console.log(this); // window

console.log(
  this === window,  // true
  window === self,  // true
  self === frames   // true
);

// Node.js 환경에서는 this는 module.exports임 (전역 객체 아님)
console.log(this);        // {}
console.log(global);      // Node의 전역 객체
console.log(globalThis);  // 브라우저/Node 공통 전역 객체

// 전역 변수와 함수 선언 (var는 globalThis에 등록됨)
var myGlobalVar = 1;
const myGlobalConst = 1;
function myGlobalFunc () {}

console.log(
  globalThis.myGlobalVar,     // 1
  globalThis.myGlobalConst,   // undefined
  globalThis.myGlobalFunc     // [Function: myGlobalFunc]
);

// globalThis 객체의 대표 속성들
console.log(globalThis.Infinity);     // Infinity
console.log(globalThis.isNaN);        // [Function: isNaN]
console.log(globalThis.Object);       // [Function: Object]

// 원시 문자열 사용 예시
const rawStr = 'abcde';
console.log(
  rawStr.length,          // 5
  rawStr.toUpperCase(),   // 'ABCDE'
  rawStr[0]               // 'a'
);

// 숫자 메서드 사용 예시
const rawNum = 123.4567;
console.log(
  typeof rawNum.toString(),   // 'string'
  rawNum.toFixed(2)           // '123.46'
);

// 원시 값을 감싼 래퍼 객체 (비추천)
const strObj = new String('abcde');
const numObj = new Number(123.4567);
const boolObj = new Boolean(true);

console.log(typeof strObj, strObj);  // object, [String: 'abcde']
console.log(typeof numObj, numObj);  // object, [Number: 123.4567]
console.log(typeof boolObj, boolObj); // object, [Boolean: true]

// 원시 타입은 실제로는 래퍼 객체를 잠깐 생성해 사용함
const simpleStr = 'abcde';
console.log(simpleStr.length);         // 5
console.log(typeof simpleStr, simpleStr); // string, 'abcde'

// 래퍼 객체에서 실제 값 추출
console.log(strObj.valueOf());   // 'abcde'
console.log(numObj.valueOf());   // 123.4567
console.log(boolObj.valueOf());  // true