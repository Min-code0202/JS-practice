// 기본 자료형(Primitive) 값 복사 - 값이 복사됨
let numA1 = 1;
let strA1 = 'ABC';
let boolA1 = true;

// 값을 단순히 복사 → 완전히 별개로 존재함
let numA2 = numA1;
let strA2 = strA1;
let boolA2 = boolA1;

// 복사된 값만 변경
numA2 = 2;
strA2 = '가나다';
boolA2 = false;

// 원본에는 영향 없음
console.log('~A1:', numA1, strA1, boolA1); // 1 'ABC' true
console.log('~A2:', numA2, strA2, boolA2); // 2 '가나다' false

// 참조 자료형(Reference Type) - 객체
const objB1 = {
  num: 1, str: 'ABC', bool: true
};
// obj2는 obj1과 같은 객체를 참조 (동일한 메모리 주소)
const objB2 = objB1;

// 객체의 프로퍼티 값 변경
objB2.num = 2;
objB2.str = '가나다';
objB2.bool = false;

// obj1과 obj2 모두 영향을 받음
console.log('objB1:', objB1); // { num: 2, str: '가나다', bool: false }
console.log('objB2:', objB2); // 동일

// 배열도 객체이므로 동일한 참조 방식
const arrC1 = [1, 'ABC', true];
const arrC2 = arrC1;
// 배열 내부 요소 변경
arrC2[0] = 3;
arrC2[1] = 'def';
arrC2[2] = false;

console.log('arrC1:', arrC1); // [3, 'def', false]
console.log('arrC2:', arrC2); // 동일

// 💡 const는 재할당은 불가하지만 내부 값은 변경 가능함
// const obj2 = {}; // ❌ 에러 발생
// const array2 = []; // ❌ 에러 발생

// 다시 한번 값 복사 vs 참조 복사 구분 예시

// 값 복사
let numD1 = 1;
let numD2 = numD1;
numD2 = 2;
console.log('값 복사:', numD1, numD2); // 1 2

// 객체 참조 복사
const objD1 = {
  num: 1,
  str: 'ABC',
  bool: true
};
const objD2 = objD1;
objD2.num = 2;
console.log('객체 참조:', objD1, objD2); // 둘 다 num이 2

// 배열 참조 복사
const arrD1 = [1, 'ABC', true];
const arrD2 = arrD1;
arrD2[1] = '가나다';
console.log('배열 참조:', arrD1, arrD2); // 둘 다 '가나다'
